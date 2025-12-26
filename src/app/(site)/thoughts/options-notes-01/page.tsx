'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function OptionsNotesChapter1() {
  return (
    <>
      <Header showHomeLink={true} />

      <h1 className="text-[2.5rem] font-serif tracking-tight text-primary">
        Options Notes - Terminology 
      </h1>
      <p className="text-sm text-foreground/80">
        August 26, 2025 · Options / Markets
      </p>

      <div className="mt-8 prose prose-sm max-w-none prose-headings:text-primary prose-p:text-foreground prose-li:text-foreground prose-ol:text-foreground prose-ul:text-foreground">
        <p>
          Aim of the note: learning the language of options, what the contract represents,
          how exchanges standardize it, how to read an order ticket, and the core definitions
          that everything else builds on.
        </p>

        <h2>1. What options are written on</h2>
        <p>
          In commodities markets, options are often written on <em>futures contracts</em> rather
          than directly on the physical good. The futures contract acts as the standardized,
          tradable proxy. The option gives the holder the right, but not the obligation, to
          enter that futures contract at a later date.
        </p>

        <h2>2. Exchange-traded vs OTC options</h2>
        <ul>
          <li>
            OTC options are negotiated directly with a dealer or bank, allowing terms such as
            strike, expiration, and size to be customized.
          </li>
          <li>
            Exchange-traded options are standardized contracts with fixed quantities, strike
            increments, and expiration cycles, making them easier to trade, clear, and manage.
          </li>
        </ul>

        <h2>3. Serial options (quick note)</h2>
        <p>
          Some exchanges list additional expiration months known as <em>serial expiries</em>.
          If an exact futures month does not exist, the exchange typically references the
          nearest futures contract after expiration as the underlying.
        </p>

        <h2>4. Reading an option order ticket</h2>
        <p>
          Most of the essential information about an option is compressed into a small number
          of fields on the order ticket: direction, option type, underlying, expiration, strike,
          and premium.
        </p>

        <div className="my-10 space-y-10">
          <div className="flex flex-col items-center">
            <img
              src="/images/notes/options1/optionsbuyorder.png"
              alt="Example of an option buy order"
              className="w-[85%] rounded-lg shadow-lg"
            />
            <p className="mt-3 text-xs text-foreground/60">
              Example buy order showing contract type, expiration month, strike, and premium.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="/images/notes/options1/optionssellorder.png"
              alt="Example of an option sell order"
              className="w-[85%] rounded-lg shadow-lg"
            />
            <p className="mt-3 text-xs text-foreground/60">
              Example sell order, selling an option means accepting the obligation in exchange
              for premium.
            </p>
          </div>
        </div>

        <h2>5. Option premium</h2>
        <p>
          The price paid for an option is called the <em>premium</em>. It consists of two parts:
        </p>

        <ol>
          <li>
            <em>Intrinsic value</em>, which represents the value of exercising the option
            immediately.
          </li>
          <li>
            <em>Time value</em>, which reflects the potential for the option to become more
            valuable before expiration.
          </li>
        </ol>

        <p>
          An option may have no intrinsic value but still trade at a positive premium due to
          its remaining time value.
        </p>

        <h2>6. Moneyness</h2>
        <p>
          Moneyness describes the relationship between the current underlying price and the
          option’s strike price.
        </p>

        <div className="my-10 flex flex-col items-center">
          <img
            src="/images/notes/options1/moneyness-map.png"
            alt="Moneyness diagram for calls and puts"
            className="w-[85%] rounded-lg shadow-lg"
          />
          <p className="mt-3 text-xs text-foreground/60">
            Relationship between strike price and underlying price for calls and puts.
          </p>
        </div>

        <ul>
          <li>
            In-the-money options have intrinsic value if exercised immediately.
          </li>
          <li>
            Out-of-the-money options have no intrinsic value but may still have time value.
          </li>
          <li>
            At-the-money options have strike prices close to the current underlying price.
          </li>
        </ul>

        <h2>7. Margin and settlement</h2>
        <p>
          Exchanges require margin deposits as a good-faith guarantee that contractual
          obligations can be met. Margin is held by the clearing house and adjusted as prices
          move.
        </p>

        <p>
          Stock-type settlement requires payment of the full contract value, while futures-type
          settlement involves daily mark-to-market, where gains and losses are settled each day.
        </p>

        <h2>8. Long and short positions</h2>
        <p>
          The terms <em>long</em> and <em>short</em> can describe either ownership of the option
          contract or market exposure.
        </p>

        <ul>
          <li>
            Being long an option means owning the contract.
          </li>
          <li>
            Being short an option means having written the contract and accepting the obligation.
          </li>
          <li>
            Market exposure depends on the option type (call or put), not just whether the
            position is long or short.
          </li>
        </ul>

        <hr />

        <p className="text-xs text-foreground/60">
          These foundations set up payoff diagrams and strategies in the next chapter.
        </p>
      </div>

      <Footer />
    </>
  )
}

