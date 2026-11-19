# Portfolio revision — November 19, round three

Base: `e4a4e8641d749147e0ec6df6cba90eb4e759516f`. Existing exclusive clone and branch `feat/reference-portfolio-rebuild`. Local focused commits only; no history rewriting, push, deployment, email sending, or account changes.

Source brief with full exact excerpts: `/Users/ayaanmunshi/Documents/Codex/2026-11-10/can-you-help-set-up-an-2/outputs/harness/reports/portfolio-revision-2026-11-19-round3-brief.md`.

## Asked vs delivered

Asked:
> “eadshot or landing page picture,s hould be at least 75 % of the pic. rightn now its so small. Remove hte wealthsimple reference in the bmo capital markets thing.”
>
> “aiden video and also my prsentation video should just play not like something you click play into. onclick should be the same as all others opening the full experience.”
>
> “my first rbc one i dont like it go find paltnir softwarr or some software in dark mode and ad that there. also add the teamunder it as enterprise market risk.”
>
> “FOR RbC Capital markets the fall 2025 one add quantitative technolgoy team.”
>
> “for design thinking one make the picture on the cover as the group one zoomed in on us 4.”
>
> “For every experience also ask (want to know more? send a chat or a messge and that wiit my eail and if they want a copy or want to keep track you can have a (start on eail instead?) in small writing on that pop up”
>
> “for oec, add thos document embedded below the pic for the case we made”
>
> “For blackajack also, akmake like a troll face for me or laughing or osme animation moving when i win and when i lose lke a smh type of thing. also when you hit blackjack give casino rules its like 1.5$.”
>
> “make it money like start with like 20$ each hand 1$ and when they reach the end tyou can be like want to keep playing :).”
>
> “add a time in the footer oor top of current time in toronto and new york. live montior style and then aslo i want to know my on click like analytics lke hwo can i know hoa many people actually clicked on my website”

Delivered:
- Three-times proportional portrait crop, centered on the owner’s head and shoulders. Root visual QA verifies the requested subject prominence (answers: “at least 75 %”). No source retouch or invented face.
- Wealthsimple asset and all runtime references removed. BMO uses an original dark terminal with fictional values identified; RBC Summer 2024 uses a separate dark software-service concept. No third-party software ownership implied (answers: “Remove ... wealthsimple” / “software in dark mode”).
- Fall 2025 “Quantitative Technology Team” and Summer 2024 “Enterprise Market Risk” displayed; legacy Fall 2025 team label aligned (answers: exact team requests).
- Supplied OEC and AWS logos, and RBC mark for Design Thinking. Group photo replaces the Design Thinking cover, zoomed around the four presenters; solo photo remains below (answers: supplied-logo requests in brief / “group one zoomed in on us 4”). Canam visual retained.
- Muted inline Aiden and Amplify card playback while onscreen, visible, and motion-enabled. A valid full-cover button opens the existing experience panel; panel playback has controls. Previews stop when a panel is open or motion/visibility conditions change (answers: “should just play” / “onclick ... full experience”).
- Every experience has “Want to know more?”, a contextual “Send a message” button opening one shared contact modal, and a smaller “Start on email instead?” mailto shortcut. Contact retains encoded email draft/copy behavior with no server send (answers: contextual-contact quote).
- Footer now says “Got something in mind?” with Let’s chat; exposed email line removed (answers: footer-copy request in brief).
- Requested OEC Drive case embedded immediately below the photo/caption, with an external fallback link. Root verified the supplied preview loads a 15-page competition case; no private patent PDF added (answers: OEC document quote).
- Blackjack starts with $20 play money and debits $1 once per hand. Ordinary win returns $2 total; natural returns $2.50 total, or $1.50 net. Push returns $1, both naturals push, dealer natural beats a non-natural hand, and a drawn 21 earns ordinary payout. Exhaustion offers a fresh $20. Owner avatar bobs/laughs on dealer win and shakes its head on dealer loss (answers: blackjack quotes).
- Unfinished hands retain their stake/cards across closing; completed queued hands settle once. Reopen does not place a second wager. Stale and repeated settlement is ignored; animation generations invalidate cancelled callbacks.
- Live Toronto and New York monitor-style clocks use their IANA time zones, update each second, handle DST, and stop scheduling work while hidden/offscreen (answers: clock quote).
- Existing Vercel page-view Analytics remains present. No paid custom event tracking or unsupported visit/click count claim added (answers: analytics question; explanation remains root’s user-facing handoff).

Not asked, suggested:
- None added. No real-money gambling, email service, paid analytics upgrade, or new large video download.

Open questions for the owner:
- None needed for the requested implementation. Vercel project Analytics enablement and actual counts remain unverified; custom click events were not enabled. The existing Amplify clip still lacks a verified caption track.

Scope review: pending independent reviewer.

## Commit structure and verification

- `ee6672e`: tighter portrait/group crops, supplied marks, original BMO/RBC visuals, and team labels.
- `c0ad187`: motion-aware video covers, shared contextual contact, OEC case embed, and footer copy.
- `9ddebcf`: guarded play-money wallet, payout/lifecycle tests, and dealer reactions.
- Final focused commit: live city clocks, DST tests, and this scope record.

Final mechanical checks all pass:
- `npm test`: **27/27**. Eight new wallet tests cover stake/payout/idempotency/close/reset; two new clock tests cover winter, summer, DST transition, and midnight. `/private/tmp/portfolio-round3-tests.log`.
- `npm run typecheck`: pass. `/private/tmp/portfolio-round3-typecheck.log`.
- All changed TS/TSX/MJS lint: pass, no warnings. `/private/tmp/portfolio-round3-lint.log`.
- `npm run build`: pass. `/private/tmp/portfolio-round3-build.log`.
- Production preview restarted on `127.0.0.1:3100`, session `79346`. Root owns browser QA and the independent Astra code/scope/security review. Exact final commit/tree supplied in handoff.
- Disk was low; only reproducible `.next/cache` was cleared. User media and source assets were preserved. No additional dependencies installed.

## Sources and practical limits

- Brightcove’s official [iframe options](https://player.support.brightcove.com/publish/available-options-standard-iframe-embed-code.html) document `autoplay=muted`, `muted`, `playsinline`, and looping. Existing RBC public video and attribution remain. A blocked autoplay request falls back to its provider/poster state; the cover still opens the controlled panel.
- OEC case: `https://drive.google.com/file/d/1G0lnnA187u79zQgn6dIyR-2PlLGDmtcM/preview`, provided by owner and browser-verified by root. Viewer availability is external; fallback links directly to that same document.
- New logo sources: owner clipboard PNGs `b0dbe266-ddc4-4d54-aa72-429b281bd83a` (OEC) and `bf650e67-f15f-4536-ad86-881da2e45d33` (AWS), copied unchanged to dated public filenames.
- Existing owner presenting photo and group image are cropped in CSS without distortion. Existing recognizable dealer illustration animates with CSS and respects global pause/reduced motion.
- [Vercel custom events documentation](https://vercel.com/docs/analytics/custom-events), verified by root, restricts custom events to Pro/Enterprise. Existing `Analytics` in `src/app/layout.tsx` handles the installed page-view integration; account/dashboard enablement is not verified. No custom click event or paid configuration was added.
- Patent remains **US application 63/867,457**, filed August 20, 2025; no granted-patent claim or private assignment file. Earlier owner facts and writing prose remain unchanged.
- Built-in browser media policy can block autoplay; no success is claimed until root verifies playback. Existing source clip has no supplied verified captions. Independent review and desktop/mobile QA remain the final readiness checkpoint.
