# Portfolio refinement, round 3

Current implementation includes the later owner-supplied media and pixel-background refinement documented in `portfolio-media-supplement-nov18.md`. The exact original requests below are preserved as source quotations.

Source brief: `/Users/ayaanmunshi/Documents/Codex/2026-11-10/can-you-help-set-up-an-2/outputs/harness/reports/portfolio-round3-request-2026-11-18.md`.
Base: `8c9850dba1c993d779409d64604aabcf079f2026`. Local branch: `feat/reference-portfolio-rebuild`. Original dirty checkout remains untouched.

## Asked vs delivered

Asked:
> “The logo isnt inline for aker and i dont like it. I added aker logo.”
> “add the globe for all lcoations we mention in now previously but very small subtle”
> “western logo is tierrible”
> “Samre thing with ripplign the logo isnyt completely inline even the title of the comapny rippling itself.”
> “RBC not good logo. also add titgle as software engineeringh at rbc capital markets.”
> “remove the em dash bbetween academy-level in the soccer one”
> “for the soccer picture say thats us winning after winnnig ottawa champions showcase.”
> “the aker video i liket he concept but like the naimations are really abd dont look like natural at all. see if you can overlay like arrows or soemthing but also impelment that for eveyrting.”
> “rippling use the rippling websit eto do so find some poictrees of hteir platforms.”
> “For bmo, rbc, find a stock trading ncietr views like some interrctive bloomberhg thing. Also you should have an idea on what i did in each rbc experience so make the visualizs find them online like a screen recording video of the actual platfomr like a produiction videro if you ca.n”
> “Add way mroe stocks too liker have like aa scrollable in the actual card and make the chart biggerr like taller. remove the usd thing and make the price more intutiive ha ve a y axis card of the stocks like a propere view.”
> “change the blackajack like the initial card not glad you found me but a challnege type of wording like want to nplay? And then stay for ahannd of baocacjk is fine.”
> “you dindt impelment the silhoutte of me Also for the headshot i wikll add one soon.”
> “make the backghround more like interactive or cleaner or better someway i dont like how it is maybe smsmall very minor ripples that are colo9ur changes in backhgyroiubnd very subtle though.”

Delivered:
- Supplied Aker, Western and RBC image assets, aligned company text baselines, and tiny globe/city labels for each NOW/PREVIOUSLY location (answers: “logo isnt inline”; “I added aker logo”; “western logo”; “RBC not good logo”; “add the globe”). CSS crops the padded Western attachment to its crest; source file is preserved.
- “Software Engineering at RBC Capital Markets” and “Former academy level soccer player in Ontario”; the soccer text visibly opens the supplied team photo with caption “Celebrating after winning the Ottawa Champions Showcase.” (answers: “add titgle”; “remove the em dash”; “for the soccer picture”). The native dialog supports keyboard/Escape/focus return. The row marker stays aligned to the first wrapped line; Ontario also has a small globe.
- Aker’s real public captures now use still frames, restrained cursor/ring highlights and clear stage labels. Actual Rippling screenshots replace the synthetic scheduling interface. The walkthroughs stop offscreen, on global pause, and with reduced motion (answers: “animations ... natural”; “overlay like arrows”; “find some poictrees”). Other illustrative scenes have restrained cursor/directional guides as well.
- A more detailed original BMO market terminal with a sample price axis and order book; a transaction-stream/validation schematic for the sourced RBC Capital Markets role; payment-agent wording for RBC Amplify. The earlier RBC role remains a generic illustrative report rather than invented details. An optional, click-to-play official RBC Aiden video is included with public-product credit (answers: “stock trading ... views”; “what i did in each rbc experience”; “production videro if you ca.n”). BMO terminal prices are explicitly sample values. Aiden is a public product explainer, not a recording of Ayaan’s own work or an actual trading terminal.
- TradingView Advanced Chart with a taller price chart, provider-native desktop watchlist, and a compact internally scrolling phone/tablet picker for the same 24 symbols, retaining PLTR, TSLA, NVDA and GOOGL first. Outer USD label removed; provider attribution, quote delay disclosure, safe load/error cleanup and source link retained (answers: “Add way mroe stocks”; “scrollable in the actual card”; “chart ... taller”; “remove the usd”; “y axis”). The narrow-screen picker shows names/symbols without invented prices, marks the last locally picked button, and remounts the chart with cleanup through an allowlisted configuration on every click, including the same symbol. The frame title is generic because the native provider search can change its symbol independently. This is a fixed expanded watchlist, not a fabricated automatic weekly ranking.
- Blackjack’s entry says “Want to play?” with its existing invitation. The dealer uses the generated recognizable monochrome Ayaan bust supplied by the hub, derived from the authentic headshot, instead of a generic SVG person (answers: “want to nplay”; “silhoutte of me”). Existing game logic is preserved.
- The latest requested background is a very subtle square-pixel field with slowly changing edge patches, replacing the earlier ripple draft. Its separate Pause/Resume background control freezes the visible pattern; work is bounded and stops when hidden, globally paused or reduced motion is requested (answers: “interactive”; “very subtle”, as refined by the later NotZayed reference in the media supplement).

Not asked, suggested:
- None.

Open questions for the owner:
- The replacement main headshot has now been supplied and integrated with an undistorted face/shoulder crop. No headshot input remains pending.
- Missing earlier RBC/Canam/OEC/design role details and the promised additional experience remain unfilled. OEC and Design Thinking photos have now been integrated. No new achievements, dates or proprietary platform access were invented.
- Automatic weekly selection/news from the earlier request still requires an appropriate public-display feed; this approved TradingView implementation expands the fixed list only.
- No matching public BMO Capital Markets ETF platform recording was found. Its terminal remains explicitly illustrative. Aker and Rippling use animated public stills; only the optional RBC Aiden explainer is an actual public video.

Independent review pending the final revision; this worker does not self-approve it.

## Source and asset provenance

- Aker: https://aker-ai.com/ (public captures previously verified by hub); supplied owner logo `codex-clipboard-f1d11dcd-759a-4f83-b06f-dadf0c4cda2d.png`.
- Western supplied owner logo `codex-clipboard-00156aee-0408-41b2-a8b8-a28139e747e4.png`; RBC supplied owner logo `codex-clipboard-fb5d71c4-f40e-4365-8d08-164fee8ad4b9.png`.
- Soccer: owner screenshot dated November 18 at 12:57:23 AM. Caption supplied by owner/hub, not inferred from the image.
- Rippling: https://www.rippling.com/en-CA/products/hr/scheduling. Official `images.ctfassets.net/k0itp0ir7ty4/` assets `Scheduling_AI_Hero_-_Schedule_Building_enUS.png`, `Scheduling_AI_Insight_Notification_enUS.png`, and `Scheduling_AI_Tablet_-_Publishing_shifts_enUS.png`; hub provenance `/private/tmp/portfolio-revision-assets/rippling-sources.json`.
- RBC: https://www.rbccm.com/en/expertise/global-markets/electronic-trading/ai-trading; public Brightcove video `6089356568001`, verified playing by the hub; its official poster is stored with the project.
- BMO search boundary: https://capitalmarkets.bmo.com/en/solutions/institutional-investing/electronic-trading/ had no corresponding public terminal demo. Retail InvestorLine media was not substituted.
- Dealer: built-in ImageGen derivative supplied by hub, `exec-92bd0c90-4916-4a18-8e41-e8fff8b34553.png`, based on authentic `headshot1.png`; transparent charcoal/silver bust. Stored as `public/photos/ayaan-dealer.png`.
- TradingView official Advanced Chart documentation https://www.tradingview.com/widget-docs/widgets/charts/advanced-chart/ and its official `embed-widget-advanced-chart.js` field allowlist inspected November 18.
- Personal RBC contribution wording remains grounded in the owner-supplied resume. No new performance claims.

## Verification boundary

Repository tests, typecheck, changed-file ESLint and production build precede independent review. Root owns desktop/mobile UI checks, real provider-frame verification and the separate independent Astra review. `$poteto-mode` runtime/hook execution remains unverified. No pushes or deployments.
