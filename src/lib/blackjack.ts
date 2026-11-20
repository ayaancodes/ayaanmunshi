export type Suit = '♠' | '♥' | '♦' | '♣';
export type Card = { rank: string; suit: Suit };
export type Outcome = 'win' | 'loss' | 'push';
export type PlayerHand = { cards: Card[]; bet: number; fromSplit: boolean; splitAces: boolean; done: boolean; outcome?: Outcome };
export type Round = { deck: Card[]; hands: PlayerHand[]; active: number; dealer: Card[]; phase: 'playing' | 'dealer' | 'finished'; result: string; outcome?: Outcome };
export type Action = 'hit' | 'stand' | 'double' | 'split';
export const STARTING_BALANCE = 2000;
export const HAND_STAKE = 100;
export const BETS = [100, 200, 500] as const;
export const MAX_HANDS = 4;
export type GameSession = { balance: number; handId: number; revision: number; settledHandId: number; round: Round | null; stats: Record<Outcome, number> };

export function score(cards: Card[]): number {
  let total = 0, aces = 0;
  for (const card of cards) {
    if (card.rank === 'A') { total += 11; aces++; }
    else total += ['J', 'Q', 'K'].includes(card.rank) ? 10 : Number(card.rank);
  }
  while (total > 21 && aces > 0) { total -= 10; aces--; }
  return total;
}
export function shuffledDeck(random = Math.random): Card[] {
  const deck: Card[] = [];
  for (let copy = 0; copy < 6; copy++) for (const suit of ['♠', '♥', '♦', '♣'] as Suit[]) {
    for (const rank of ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']) deck.push({ rank, suit });
  }
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}
export const natural = (hand: PlayerHand) => !hand.fromSplit && hand.cards.length === 2 && score(hand.cards) === 21;
export const totalBet = (round: Round) => round.hands.reduce((sum, hand) => sum + hand.bet, 0);
export function payout(hand: PlayerHand): number {
  if (hand.outcome === 'push') return hand.bet;
  if (hand.outcome !== 'win') return 0;
  return hand.bet * (natural(hand) ? 2.5 : 2);
}
export const handReturn = (round: Round) => round.phase === 'finished' ? round.hands.reduce((sum, hand) => sum + payout(hand), 0) : 0;
function resolve(round: Round): Round {
  const dealerScore = score(round.dealer);
  const dealerNatural = round.dealer.length === 2 && dealerScore === 21;
  const hands = round.hands.map(hand => {
    const value = score(hand.cards);
    const outcome: Outcome = value > 21 ? 'loss' : dealerNatural ? natural(hand) ? 'push' : 'loss' : natural(hand) || dealerScore > 21 || value > dealerScore ? 'win' : value === dealerScore ? 'push' : 'loss';
    return { ...hand, done: true, outcome };
  });
  const net = hands.reduce((sum, hand) => sum + payout(hand) - hand.bet, 0);
  const outcome: Outcome = net > 0 ? 'win' : net < 0 ? 'loss' : 'push';
  const result = hands.length > 1 ? `${hands.filter(h => h.outcome === 'win').length} won · ${hands.filter(h => h.outcome === 'loss').length} lost · ${hands.filter(h => h.outcome === 'push').length} pushed.` :
    dealerNatural ? natural(hands[0]) ? 'Two blackjacks. It’s a push.' : 'Dealer has blackjack.' : natural(hands[0]) ? 'Blackjack! You win.' : score(hands[0].cards) > 21 ? 'You bust. Dealer wins.' : dealerScore > 21 ? 'Dealer busts. You win!' : outcome === 'win' ? 'You win!' : outcome === 'loss' ? 'Dealer wins this one.' : 'Same total. It’s a push.';
  return { ...round, hands, phase: 'finished', outcome, result };
}
export function deal(deck: Card[] = shuffledDeck(), bet = HAND_STAKE): Round {
  if (deck.length < 4) throw new Error('A round needs at least four cards.');
  const hand: PlayerHand = { cards: [deck[0], deck[2]], bet, fromSplit: false, splitAces: false, done: false };
  const round: Round = { hands: [hand], active: 0, dealer: [deck[1], deck[3]], deck: deck.slice(4), phase: 'playing', result: 'Your move.' };
  // US hole-card peek: a dealer natural is resolved before any added wagers.
  return natural(hand) || score(round.dealer) === 21 ? resolve(round) : round;
}
function draw(round: Round, index: number): Round {
  if (!round.deck.length) throw new Error('The shoe has no card to draw.');
  return { ...round, deck: round.deck.slice(1), hands: round.hands.map((hand, i) => i === index ? { ...hand, cards: [...hand.cards, round.deck[0]] } : hand) };
}
/** Move left-to-right; a waiting split hand receives its second card only on its turn. */
function advance(round: Round): Round {
  let next = round;
  for (let i = next.active; i < next.hands.length; i++) {
    if (next.hands[i].done) continue;
    next = { ...next, active: i };
    if (next.hands[i].cards.length === 1) next = draw(next, i);
    const hand = next.hands[i];
    if (hand.splitAces || score(hand.cards) >= 21) {
      next = { ...next, hands: next.hands.map((h, index) => index === i ? { ...h, done: true } : h) };
    } else return { ...next, result: next.hands.length > 1 ? `Hand ${i + 1}: your move.` : 'Your move.' };
  }
  if (next.hands.every(hand => score(hand.cards) > 21)) return resolve(next);
  return { ...next, phase: 'dealer', result: 'Dealer’s turn.' };
}
export function dealerStep(round: Round): Round {
  if (round.phase !== 'dealer') return round;
  if (score(round.dealer) >= 17) return resolve(round); // Includes soft 17.
  if (!round.deck.length) throw new Error('The shoe has no dealer card.');
  return { ...round, dealer: [...round.dealer, round.deck[0]], deck: round.deck.slice(1) };
}
export function allowedActions(session: GameSession): Record<Action, boolean> {
  const round = session.round;
  const hand = round?.hands[round.active];
  const playing = Boolean(round?.phase === 'playing' && hand && !hand.done && !hand.splitAces && session.handId !== session.settledHandId);
  const two = playing && hand?.cards.length === 2;
  const funded = hand ? session.balance >= hand.bet : false;
  return { hit: playing, stand: playing, double: Boolean(two && funded), split: Boolean(two && funded && round && round.hands.length < MAX_HANDS && hand?.cards[0].rank === hand?.cards[1].rank) };
}
export function createSession(): GameSession {
  return { balance: STARTING_BALANCE, handId: 0, revision: 0, settledHandId: 0, round: null, stats: { win: 0, loss: 0, push: 0 } };
}
export function beginHand(session: GameSession, deck?: Card[], bet = HAND_STAKE): GameSession {
  if (!BETS.some(value => value === bet) || session.balance < bet || session.handId !== session.settledHandId) return session;
  return { ...session, balance: session.balance - bet, handId: session.handId + 1, revision: session.revision + 1, round: deal(deck, bet) };
}
/** Atomic wager + move. Revision guards prevent a repeated click acting on the next split hand. */
export function playAction(session: GameSession, action: Action, handId: number, revision: number): { session: GameSession; steps: Round[] } {
  if (handId !== session.handId || revision !== session.revision || !allowedActions(session)[action] || !session.round) return { session, steps: [] };
  let round = session.round;
  const index = round.active, hand = round.hands[index];
  const cost = action === 'double' || action === 'split' ? hand.bet : 0;
  if (action === 'split') {
    const splitAces = hand.cards[0].rank === 'A';
    const children = hand.cards.map(card => ({ cards: [card], bet: hand.bet, fromSplit: true, splitAces, done: false }));
    round = advance({ ...round, hands: [...round.hands.slice(0, index), ...children, ...round.hands.slice(index + 1)] });
  } else {
    if (action === 'hit' || action === 'double') round = draw(round, index);
    round = { ...round, hands: round.hands.map((h, i) => i === index ? { ...h, bet: action === 'double' ? h.bet * 2 : h.bet, done: action !== 'hit' || score(h.cards) >= 21 } : h) };
    round = advance(round);
  }
  const steps = [round];
  while (round.phase === 'dealer') { round = dealerStep(round); steps.push(round); }
  return { session: { ...session, balance: session.balance - cost, revision: session.revision + 1, round }, steps };
}
export function settleHand(session: GameSession, handId: number, revision = session.revision): GameSession {
  const round = session.round;
  if (handId !== session.handId || revision !== session.revision || session.settledHandId === handId || round?.phase !== 'finished') return session;
  const stats = { ...session.stats };
  for (const hand of round.hands) if (hand.outcome) stats[hand.outcome]++;
  return { ...session, balance: session.balance + handReturn(round), settledHandId: handId, stats };
}
/** Close finishes any already-computed result once; an unfinished split hand stays intact. */
export const suspendHand = (session: GameSession) => settleHand(session, session.handId);
export function resetBankroll(session: GameSession): GameSession {
  if (session.handId !== session.settledHandId || session.balance >= HAND_STAKE) return session;
  return { ...session, balance: STARTING_BALANCE, round: null };
}
