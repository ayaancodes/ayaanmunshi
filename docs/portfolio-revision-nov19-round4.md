# November 19, round four

This note supersedes round three's tight portrait crop, original BMO terminal, and boxed clock presentation. Base: `551eea199601087f93e4fdfcd2271648c1a1356f`.

| Asked | Delivered |
| --- | --- |
| “use this full pic or landing page like headshot” | Existing presenting photograph displayed in its full 2:3 ratio, head through thighs. Compact 146px desktop width; 110px/92px phone widths. No zoom, stretch, or generated face. |
| “go back to that wealthimple view but dont write welthsmile” | Restored the earlier public trading screenshot from git. Neutral “Public platform reference” labels; accessible description distinguishes it from BMO product UI. |
| Simple live inline clocks, removing the stacked monitors | Gray serif “Toronto HH:mm:ss · New York HH:mm:ss” in the footer. Existing timezone, visibility, and DST behavior preserved. No boxes, green styling, status dots, or visible timezone labels. |

The trading reference is the unmodified public Wealthsimple asset from [its trading page](https://www.wealthsimple.com/en-ca/trade), restored from the parent of `ee6672e`. Source: `https://images.ctfassets.net/v44fuld738we/17yP8C4N1sHmxTANaGhl4k/160809725256a8b692d932161dbbf706/ws_pro___demo___video___en-CA.webp`. It is an illustrative reference, not a BMO product or a claim of personal authorship. No new video was downloaded.

Checked code commits: `fc72c75` (portrait/clocks), `aea3dbb` (trading reference). `npm test` passed 27 tests; typecheck, changed-file ESLint, production build, and diff whitespace checks passed. Logs: `/private/tmp/portfolio-round4-{tests,typecheck,lint,build}.log`. No new behavior tests were needed for this presentation-only change; existing clock timezone/DST tests ran.

Not asked/changed: game, experience facts, video behavior, contact delivery, analytics, or dependencies. Root owns final desktop/mobile QA, independent Astra review, and the newly authorized release. Earlier limitations such as unverified Amplify captions remain unchanged. Poteto runtime/profile hooks are unavailable; actual commands above provide the mechanical evidence.
