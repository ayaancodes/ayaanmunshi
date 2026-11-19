# November 19, round four

This note supersedes round three's tight portrait crop, original BMO terminal, and boxed clock presentation. Base: `551eea199601087f93e4fdfcd2271648c1a1356f`.

## Asked vs delivered

Asked:
> "use this full pic or landing page like headshot"
>
> "go back to that wealthimple view but dont write welthsmile. or you can get a bloomberg type video too."
>
> "also not this way for this: Toronto EST 05:34:46 LOCAL TIME New York EST 05:34:46 LOCAL TIME Look at this website like clcock"

The clock request includes the owner-supplied Zayed screenshot in the round-four conversation: simple gray serif city/time text without boxes. The hub's scoped brief retains both Toronto and New York.

Delivered:
- The full existing 2:3 presenting photograph, head through thighs, at compact 146px desktop and 110px/92px phone widths, without zoom or distortion (answers: "use this full pic").
- The earlier public trading screenshot and its dark frame, with neutral visible captions and an accessible description distinguishing it from BMO product UI (answers: "go back to that wealthimple view but dont write welthsmile").
- Gray serif "Toronto HH:mm:ss · New York HH:mm:ss" in the footer, retaining live timezone/DST behavior while removing boxes, status dots, green styling, and visible timezone labels (answers: "not this way" and the supplied clock reference).

Not asked, suggested:
- None.

Open questions for the owner:
- None for this scoped revision.

Scope review: pending narrow final re-review (portfolio_polish_review, gpt-6-astra). The builder has not asserted a reviewer pass.

The trading reference is the unmodified public Wealthsimple asset from [its trading page](https://www.wealthsimple.com/en-ca/trade), restored from the parent of `ee6672e`. Source: `https://images.ctfassets.net/v44fuld738we/17yP8C4N1sHmxTANaGhl4k/160809725256a8b692d932161dbbf706/ws_pro___demo___video___en-CA.webp`. It is an illustrative reference, not a BMO product or a claim of personal authorship. No new video was downloaded.

Checked code commits: `fc72c75` (portrait/clocks), `aea3dbb` (trading reference). `npm test` passed 27 tests; typecheck, changed-file ESLint, production build, and diff whitespace checks passed. Logs: `/private/tmp/portfolio-round4-{tests,typecheck,lint,build}.log`. No new behavior tests were needed for this presentation-only change; existing clock timezone/DST tests ran.

Not asked/changed: game, experience facts, video behavior, contact delivery, analytics, or dependencies. Root owns final desktop/mobile QA, independent Astra review, and the newly authorized release. Earlier limitations such as unverified Amplify captions remain unchanged. Poteto runtime/profile hooks are unavailable; actual commands above provide the mechanical evidence.

QA repair: restored the earlier `.walkthrough-trading` dark frame and restrained pan after the hub observed inherited pale Aker styling. Global pause and reduced-motion rules still govern the preview. This CSS/docs-only repair adds no new tests; typecheck, changed-code lint and production build are rerun in `/private/tmp/portfolio-round4-repair-{typecheck,lint,build}.log`.
