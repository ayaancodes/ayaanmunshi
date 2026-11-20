# Google line and blackjack rules — November 19

Base: `cbc3014050a81b631a0b2a1acf13c8715fd46ad0`. Sole writer in `portfolio-rebuild`. Owner excerpts are preserved in the hub's `reports/portfolio-google-blackjack-nov19-brief.md`.

## Asked vs delivered

Asked:
> “can you add an incomin at google line too on google's cloud team. as a line. make it with star emoji or something happy i dont know. location united states.”
>
> “Also you forgot some things for blackjack rules. like the 1.5 isnt fixed like i want to follow casino rules. also when you hit 11, you should be abel to doule. also like same card you should split. you missed those. finish everything”.

Delivered:
- One Now line: decorative star, Incoming at Google, Cloud team, and United States; the supplied original logo links to Google Cloud. No role title, start date, office, or engineering card invented (answers: “as a line”, “cloud team”, “location united states”).
- Naturals pay 3:2 profit on the hand's actual wager plus stake returned; ordinary wins pay 1:1 plus stake and pushes return stake. A small $1/$2/$5 next-bet selector makes the multiplier meaningful while preserving the $20 virtual bankroll and $1 default (answers: “the 1.5 isnt fixed”; scoped hub interpretation).
- Funded double down on any initial two cards, including 11; exactly one card then stand, with the whole doubled wager settled (answers: “11 ... doule”). Three-card 11 cannot double under the stated house rules.
- Funded matching-rank splits, independent hand wagers/results, left-to-right play, double after split, up to four hands, and restricted split aces. A split 21 receives ordinary odds (answers: “same card ... split”).
- Help states this table's precise choices rather than presenting variants as universal casino rules. Dealer naturals are resolved before added wagers. Stale-action revisions and idempotent settlement preserve accounting during rapid clicks, close/reopen, staged dealer play, and motion changes (answers: “follow casino rules” / “finish everything”).

Not asked, suggested:
- None added. No real money, insurance, surrender, side bets, debug UI, or unrelated website changes.

Open questions for the owner:
- None blocking this scope; house-rule choices are explicit in Help.

Scope review: pending independent Astra review through the hub.

## House rules and sources

This original play-money preset uses six decks shuffled each round, stands on soft 17, peeks for dealer blackjack before player actions, pays naturals 3:2, permits double on any initial two cards and after splitting, allows matching-rank splits to four hands, and gives split aces exactly one card each without resplitting. No insurance/surrender. These are explicit local choices, not a claim to duplicate every rule at a named casino.

Primary sources checked November 19:
- [Bellagio's official gaming guide](https://static.mgmresorts.com/content/dam/MGM/bellagio/casino/bellagio-casino-gaming-guide.pdf), blackjack pages 9–11: wager-based 3:2, matching an added split stake, up to four hands, one-card doubles and double after split. Its resplitting-aces variation differs from this table's stated no-resplit choice.
- [MGM Resorts blackjack guide](https://www.mgmresorts.com/en/gamesense/guide-to-blackjack.html): payout variants and no natural-blackjack award after splitting.
- [BetMGM official rules](https://help.betmgm.co.uk/hc/en-gb/articles/12186050178450-Live-Blackjack): stands on soft 17, one-card split aces, natural superiority and explicit game-variant differences. Its no-DAS/single-split rules are not this table's preset.

## Verification

Google-only commit `1e31686` passed typecheck, page lint and production build. Expanded game checks: all **33 tests passed**, including deterministic natural/double/split/ace/dealer/low-balance/stale-action/close cases and 100 seeded full rounds checking bankroll conservation. Typecheck, changed-file ESLint, production build and whitespace checks passed. Logs: `/private/tmp/portfolio-blackjack-{tests,typecheck,lint,build}.log`.

Root owns desktop/phone UI verification and the reused independent Astra review before the authorized GitHub main/Vercel release. No release is claimed here. Poteto runtime/hooks remain unavailable; checks were executed directly. No Riipen actions or shared hub state changes.
