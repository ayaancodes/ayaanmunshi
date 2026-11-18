export type Suit = '♠' | '♥' | '♦' | '♣';
export type Card = { rank: string; suit: Suit };
export type Round = { deck: Card[]; player: Card[]; dealer: Card[]; phase: 'playing' | 'finished'; result: string };

export function score(cards: Card[]): number {
  let total = 0;
  let aces = 0;
  for (const card of cards) {
    if (card.rank === 'A') { total += 11; aces++; }
    else total += ['J', 'Q', 'K'].includes(card.rank) ? 10 : Number(card.rank);
  }
  while (total > 21 && aces > 0) { total -= 10; aces--; }
  return total;
}
export function shuffledDeck(random = Math.random): Card[] {
  const deck: Card[] = [];
  for (const suit of ['♠', '♥', '♦', '♣'] as Suit[]) {
    for (const rank of ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']) deck.push({ rank, suit });
  }
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}
export function deal(deck: Card[] = shuffledDeck()): Round {
  if (deck.length < 4) throw new Error('A round needs at least four cards.');
  const player = [deck[0], deck[2]];
  const dealer = [deck[1], deck[3]];
  const playerNatural = score(player) === 21;
  const dealerNatural = score(dealer) === 21;
  const finished = playerNatural || dealerNatural;
  return { player, dealer, deck: deck.slice(4), phase: finished ? 'finished' : 'playing', result: playerNatural && dealerNatural ? 'Two blackjacks. It’s a push.' : playerNatural ? 'Blackjack! You win.' : dealerNatural ? 'Dealer has blackjack.' : 'Your move.' };
}
export function stand(round: Round): Round {
  if (round.phase === 'finished') return round;
  const deck = [...round.deck];
  const dealer = [...round.dealer];
  while (score(dealer) < 17 && deck.length) dealer.push(deck.shift()!);
  const playerScore = score(round.player);
  const dealerScore = score(dealer);
  const result = dealerScore > 21 ? 'Dealer busts. You win!' : playerScore > dealerScore ? 'You win!' : playerScore < dealerScore ? 'Dealer wins this one.' : 'Same total. It’s a push.';
  return { ...round, deck, dealer, phase: 'finished', result };
}
export function hit(round: Round): Round {
  if (round.phase === 'finished') return round;
  if (!round.deck.length) return stand(round);
  const player = [...round.player, round.deck[0]];
  const next: Round = { ...round, player, deck: round.deck.slice(1) };
  if (score(player) > 21) return { ...next, phase: 'finished', result: 'You bust. Dealer wins.' };
  if (score(player) === 21) return stand(next);
  return next;
}
