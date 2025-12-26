'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function OptionsNotesChapter2() {
  return (
    <>
      <Header showHomeLink={true} />

      <h1 className="text-[2.5rem] font-serif tracking-tight text-primary">
        Elementary Strategies
      </h1>
      <p className="text-sm text-foreground/80">
        August 27, 2025 · Options / Markets
      </p>

      <div className="mt-8 prose prose-sm max-w-none prose-headings:text-primary prose-p:text-foreground prose-li:text-foreground prose-ol:text-foreground prose-ul:text-foreground">
        <p>
          Aim of the note: build intuition for basic option positions, how payoff diagrams work,
          and why “simple” strategies are really just different ways of shaping risk/reward.
          This chapter is about being able to <em>look at a payoff graph</em> and instantly know what
          the position is doing.
        </p>

        <h2>1. A beginner way to choose an option</h2>
        <p>
          A simple decision framework: form a view of where the underlying will be at expiration,
          then compare what the option would be worth at expiry (intrinsic value) versus the premium
          you pay today.
        </p>

        <p>
          Example setup (underlying around <em>$99</em>): different strikes have different premiums.
          If you expect price to land around <em>$108</em> at expiration, a 100 call might look attractive:
          it’s cheaper than deeper ITM calls, but still participates in upside.
        </p>

        <h3>Risk-adjusted thinking (ROI style)</h3>
        <p>
          A lower strike call can make more absolute dollars if you’re right, but you’re also paying
          much more premium. A quick sanity check is profit relative to premium at risk:
        </p>
        <ul>
          <li>
            Lower strike call: higher premium → higher break-even and more capital at risk.
          </li>
          <li>
            Higher strike call: lower premium → cheaper exposure, but needs a bigger move to pay.
          </li>
        </ul>

        <h2>2. Reading payoff graphs (the baseline)</h2>
        <p>
          Profit/loss graphs are just “what happens at expiration” drawn as a function of the underlying
          price. The simplest baseline is the underlying itself.
        </p>

        <div className="my-10 flex flex-col items-center">
          <img
            src="/images/notes/options2/fig2-1.png"
            alt="Figure 2-1: Long vs short underlying payoff"
            className="w-[80%] rounded-lg shadow-lg"
          />
          <p className="mt-3 text-xs text-foreground/60">
            Fig 2-1 — Long underlying = line with positive slope; short underlying = negative slope.
          </p>
        </div>

        <ul>
          <li>
            <em>Long underlying</em>: you bought it at some price → you want it to go up.
          </li>
          <li>
            <em>Short underlying</em>: you sold it → you want it to go down.
          </li>
        </ul>

        <h2>3. Long call (limited loss, unlimited upside)</h2>
        <p>
          Buying a call means you pay a premium for the right to buy at the strike. Your maximum loss
          is the premium. Your upside grows as the underlying rises above the strike.
        </p>

        <div className="my-10 space-y-10">
          <div className="flex flex-col items-center">
            <img
              src="/images/notes/options2/fig2-2.png"
              alt="Figure 2-2: Long call payoff"
              className="w-[80%] rounded-lg shadow-lg"
            />
            <p className="mt-3 text-xs text-foreground/60">
              Fig 2-2 — Long 100 call: max loss is the premium; break-even is strike + premium.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="/images/notes/options2/fig2-3.png"
              alt="Figure 2-3: Long calls at different strikes"
              className="w-[80%] rounded-lg shadow-lg"
            />
            <p className="mt-3 text-xs text-foreground/60">
              Fig 2-3 — Lower strikes cost more but behave “more like stock” sooner; higher strikes are cheaper but need a bigger move.
            </p>
          </div>
        </div>

        <h2>4. Short call (limited reward, potentially unlimited risk)</h2>
        <p>
          Selling a call means you collect premium upfront, but you take on the obligation to sell
          at the strike if exercised. If the underlying rallies hard, losses can keep growing.
        </p>

        <p>
          Intuition: the <em>lower</em> the strike you sell, the bigger the premium — but the higher the
          risk you get breached. The <em>higher</em> the strike, the smaller premium — but generally “safer”
          in the sense it needs a larger move against you.
        </p>

        <div className="my-10 flex flex-col items-center">
          <img
            src="/images/notes/options2/fig2-4.png"
            alt="Figure 2-4: Short call payoff"
            className="w-[80%] rounded-lg shadow-lg"
          />
          <p className="mt-3 text-xs text-foreground/60">
            Fig 2-4 — Short calls: premium is capped reward; upside move is the danger zone.
          </p>
        </div>

        <h2>5. Long put (limited loss, big downside payout)</h2>
        <p>
          Buying a put is paying premium for the right to sell at the strike. You profit if the
          underlying falls. Higher strike puts typically cost more, because they’re more likely to
          finish in the money and/or pay more if things drop.
        </p>

        <div className="my-10 flex flex-col items-center">
          <img
            src="/images/notes/options2/fig2-5.png"
            alt="Figure 2-5: Long put payoff"
            className="w-[80%] rounded-lg shadow-lg"
          />
          <p className="mt-3 text-xs text-foreground/60">
            Fig 2-5 — Long puts: max loss is premium; profits grow as the underlying falls below strike.
          </p>
        </div>

        <h2>6. Short put (premium seller with downside obligation)</h2>
        <p>
          Selling a put means you collect premium, but if the underlying drops below strike you can
          be forced to buy at the strike. It’s a bullish-ish position (you’re fine if price stays up),
          with meaningful downside risk if the market falls.
        </p>

        <div className="my-10 flex flex-col items-center">
          <img
            src="/images/notes/options2/fig2-6.png"
            alt="Figure 2-6: Short put payoff"
            className="w-[80%] rounded-lg shadow-lg"
          />
          <p className="mt-3 text-xs text-foreground/60">
            Fig 2-6 — Short puts: premium is the reward; downside move is the risk.
          </p>
        </div>

        <h2>7. Why anyone sells options</h2>
        <p>
          The big asymmetry:
        </p>
        <ul>
          <li>
            Option <em>buyers</em>: limited risk, potentially large reward.
          </li>
          <li>
            Option <em>sellers</em>: limited reward, potentially large risk.
          </li>
        </ul>
        <p>
          So why sell? Because many options expire worthless. Sellers often believe markets won’t move
          far enough, and they try to profit from time decay and “nothing dramatic happens” outcomes.
        </p>

        <h2>8. Combination strategies (shaping the curve)</h2>
        <p>
          You’re not limited to one option. Combining positions creates new payoff shapes with more
          controlled risk/reward.
        </p>

        <h3>Long straddle (buy call + buy put, same strike)</h3>
        <p>
          A long straddle is a bet on a <em>big move</em>, but you don’t want to pick direction. Your max loss
          is total premium paid. You like this into events (earnings, CPI, Fed, etc.).
        </p>

        <div className="my-10 flex flex-col items-center">
          <img
            src="/images/notes/options2/fig2-7.png"
            alt="Figure 2-7: Long straddle payoff"
            className="w-[80%] rounded-lg shadow-lg"
          />
          <p className="mt-3 text-xs text-foreground/60">
            Fig 2-7 — Long straddle: you lose if price sits near strike; win if price moves far either way.
          </p>
        </div>

        <h3>Short straddle (sell call + sell put, same strike)</h3>
        <p>
          Short straddle is the opposite: you want the market to stay near the strike. You collect
          premium, but large moves in either direction can create large losses.
        </p>

        <div className="my-10 flex flex-col items-center">
          <img
            src="/images/notes/options2/fig2-8.png"
            alt="Figure 2-8: Short straddle payoff"
            className="w-[80%] rounded-lg shadow-lg"
          />
          <p className="mt-3 text-xs text-foreground/60">
            Fig 2-8 — Short straddle: premium collected is capped profit; big moves are the enemy.
          </p>
        </div>

        <h3>Short strangle (sell OTM put + sell OTM call)</h3>
        <p>
          Similar idea as short straddle, but you sell out-of-the-money options: wider “safe” range,
          smaller premium, and generally lower probability of catastrophe (but still serious tail risk).
        </p>

        <div className="my-10 flex flex-col items-center">
          <img
            src="/images/notes/options2/fig2-9.png"
            alt="Figure 2-9: Short strangle payoff"
            className="w-[80%] rounded-lg shadow-lg"
          />
          <p className="mt-3 text-xs text-foreground/60">
            Fig 2-9 — Short strangle: wider range than a straddle, less premium collected.
          </p>
        </div>

        <h2>9. Spreads (limited risk, limited reward)</h2>
        <p>
          Spreads are where things start to feel “professional” because you intentionally trade away
          unlimited upside/downside to get more controlled exposure.
        </p>

        <h3>Bull call spread (debit call spread)</h3>
        <p>
          Bull call spread: buy a lower strike call and sell a higher strike call. You’re bullish, but
          you don’t expect a moonshot. Selling the higher strike call reduces cost and caps profit.
        </p>

        <div className="my-10 flex flex-col items-center">
          <img
            src="/images/notes/options2/fig2-10.png"
            alt="Figure 2-10: Bull call spread payoff"
            className="w-[80%] rounded-lg shadow-lg"
          />
          <p className="mt-3 text-xs text-foreground/60">
            Fig 2-10 — Bull call spread: limited loss (net debit), limited max profit (strike difference minus debit).
          </p>
        </div>

        <h3>Bear call spread (credit call spread)</h3>
        <p>
          Bear call spread: sell a lower strike call and buy a higher strike call. You collect a net credit,
          and you want the underlying to stay below the short strike. The long call acts as protection and
          caps worst-case loss.
        </p>

        <h3>Bear put spread</h3>
        <p>
          Bear put spread: buy a higher strike put and sell a lower strike put. You’re bearish, but you want
          limited risk + limited reward instead of extreme tails.
        </p>

        <div className="my-10 flex flex-col items-center">
          <img
            src="/images/notes/options2/fig2-11.png"
            alt="Figure 2-11: Spread example payoff"
            className="w-[80%] rounded-lg shadow-lg"
          />
          <p className="mt-3 text-xs text-foreground/60">
            Fig 2-11 — Add your remaining spread diagram here (e.g., bear call spread or bear put spread payoff).
          </p>
        </div>

        <h2>10. How to draw an expiration payoff graph (repeatable method)</h2>
        <ol>
          <li>
            <em>Bends only at strike prices.</em> Identify all strikes in the position — the payoff can only
            change slope at those points.
          </li>
          <li>
            <em>Find max loss / max gain.</em> If you paid a net debit, that debit is often your max loss.
            If you received a net credit, that credit is often your max gain.
          </li>
          <li>
            <em>Outside the strikes, you act like shares.</em> After expiration, ITM calls behave like long
            stock exposure; ITM puts behave like short stock exposure. Net calls/puts determine slope on
            the far right / far left.
          </li>
        </ol>

        <hr />

        <p className="text-xs text-foreground/60">
          The main win from this chapter is pattern recognition: “long option = convex + limited loss,”
          “short option = premium + tail risk,” and spreads = deliberate tradeoffs.
        </p>
      </div>

      <Footer />
    </>
  )
}
