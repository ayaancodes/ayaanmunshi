# Portfolio revision — November 19, 2026

Starting revision: `6a7ac76ceb604dd795600c5fa2cf2de52a79e14a` on `feat/reference-portfolio-rebuild`. Local revision only; no push or deployment.

Source brief: `/Users/ayaanmunshi/Documents/Codex/2026-11-10/can-you-help-set-up-an-2/outputs/harness/reports/portfolio-revision-2026-11-19-brief.md`. Root owns browser QA and independent review. This file records the implementation, not an independent approval.

## Asked vs delivered

Asked:
> “my picture is not nice, can you use this pictrue. make it sized correctly.”
>
> “for the actual company like the text or the logo of the company of it is way too close to the previous word. add a little space between the words and then the company.”
>
> “i dont like the animations for aker and rippling too much like the arrow clicking, i like the moving through pages and stuff make it more like that. for bmo make it more like a bloomberg terminal. for rbc you can have charts or tech stacks.”
>
> “For engineering, add the location beside the term. like new york, fall 2026. and we can have the role.”
>
> “for bmo, you should add a line or two and then also the same cards for technologies and concepts. you should actually do that for all of them please”
>
> “50 seconds to 2 mins”.

Delivered:
- Original supplied studio headshot in a proportional square face/shoulder crop; no generated face (answers: “use this pictrue” / “sized correctly”).
- Supplied Aker and RBC marks throughout the homepage and existing experience route, with padding clipped in CSS, Aker’s pale tile removed, and space before inline company links (answers: “add a little space”; supplied-logo instructions in the brief).
- Aker/Rippling real public screenshots crossfade and move slightly between pages, with cursor/ring overlays removed. Existing pause, reduced-motion, and offscreen controls remain (answers: “moving through pages”).
- Original dense BMO terminal, with fictional prices explicitly identified, and RBC chart/technology scenes (answers: “bloomberg terminal” / “charts or tech stacks”). No Bloomberg branding, affiliation, live feed, or personal product claim.
- Location and term together; role on a separate line. All ten experiences have factual short introductions and three skill/concept cards (answers: “location beside the term” / “all of them”).
- Amplify supplied group-photo cover and controlled presentation excerpt, 00:50–02:00. Video mounts only in the open dialog, has no autoplay, and unmounts on close (answers: timestamp response and Amplify-media instructions in brief).
- AWS re:Invent 2025 in Las Vegas as an AWS-sponsored attendee experience, with supplied stage photo and badge. Travel, flights, accommodation, and admission sponsorship follow the owner’s explicit confirmation. No AWS employment or award claimed (answers: AWS addition in brief).
- Existing OEC presentation photo retained (answers: retain-OEC instruction in brief).

Not asked, suggested:
- None added. No new data provider, automated weekly movers, or unrelated design changes.

Open questions for the owner:
- None required for the supplied scope. The source presentation has no supplied caption/transcript file; a verified caption track remains an accessibility enhancement rather than invented dialogue.

Scope review: pending independent reviewer.

## Facts and provenance

- Aker, Rippling, RBC Fall 2025, and Amplify: owner resume `/Users/ayaanmunshi/Downloads/Google_Ayaan_Munshi (1).pdf`, extracted to `/private/tmp/portfolio-resume.txt`. Metrics omitted from new summaries. Amplify patent-inventor phrasing comes from that resume.
- BMO: owner’s explicit Quantitative Trading / ETF Market Making framing retained. Python, KDB/Q, SQL and Global Markets team are recorded in the pre-existing `src/app/(site)/experiences/page.tsx` at the starting revision. The resume’s different credit-risk framing was not combined with this experience.
- RBC Summer 2024 Enterprise Market Risk and Canam Summer 2023 Mississauga: same pre-existing experience page records dates, roles, tools, and the analytics-delivery / telemetry shipment-tracker work. These supply the newly completed summaries, not inference from the illustrations.
- OEC and Design Thinking: existing owner photos and captions establish the joint presentation, FinIQ, and team discussion. Broad concept cards describe those visible activities, without awards, dates, or unverified technologies.
- AWS: explicit owner confirmation in the source brief; stage image shows December 1–5, 2025 and Las Vegas. Badge says attendee. Skill cards are conference concepts, not claims of building AWS systems.
- New portrait: `/Users/ayaanmunshi/Desktop/Internship Grind/Headshots/headshot copy.jpg` → `public/photos/headshot-nov19.jpg` (original preserved).
- Aker mark: clipboard `3bd32f24-223a-4d39-b517-4f4f18dc5b99.png` → `public/experience/aker-mark-nov19.png`; original shape preserved, CSS brightness for dark-background legibility, no tile.
- RBC crest: clipboard `17364782-87a2-47f4-9110-f6e2b6b5ae61.png` → `public/experience/rbc-mark-nov19.png`; original canvas preserved, CSS clips only exterior padding. No shield redraw.
- Amplify cover: owner screenshot in `NSIRD_screencaptureui_EjkaOO`, `11.48.38 PM` → `amplify-cover-nov19.png`.
- AWS stage: `NSIRD_screencaptureui_2zpARg`, `11.56.56 PM` → `aws-stage-nov19.png`; badge: `NSIRD_screencaptureui_sp4go2`, `11.55.13 PM` → `aws-badge-nov19.png`. Exact supplied files were copied directly after directory enumeration was blocked by macOS; no substitutes generated.
- Presentation original: `/Users/ayaanmunshi/Downloads/IMG_5091.MOV`, supplied through `https://photos.app.goo.gl/qExY47TMiPRu2umH6`. Native AVFoundation trimmed 50–120 seconds, then encoded the derivative to H.264 at 1.8 Mbps with AAC audio, 1280×720, 70.032 seconds, 16,926,461 bytes. `moov` precedes `mdat` for progressive playback. Only audio/video tracks remain. Original preserved; derivative is `public/experience/amplify-presentation-nov19.mp4`.
- Existing product-capture and redacted BMO-photo provenance remains in earlier revision reports. No unredacted BMO source added.

## Verification

- `npm test`: 14/14 pass. Log `/private/tmp/portfolio-nov19-tests.log`.
- `npm run typecheck`: pass. Log `/private/tmp/portfolio-nov19-typecheck.log`.
- Changed TypeScript/TSX ESLint: pass. Log `/private/tmp/portfolio-nov19-lint.log`.
- `npm run build`: first attempt failed with `ENOSPC`; only this task’s generated `.next/cache` and temporary encoder cache/output were cleared. Final build passes; log `/private/tmp/portfolio-nov19-build.log`. Free space after the final build: 543 MiB.
- Content integrity check: ten experiences, each with an introduction, three skill/concept cards, and existing referenced media.
- Root to verify desktop/mobile crop, metadata wrapping, product motion pause, both new photo panels, and actual controlled video playback on the refreshed preview.
- Separate Astra code/scope/security review remains the root’s checkpoint. No runtime claim for unavailable poteto-mode or trusted hooks.
