# Portfolio revision — November 19, round two

Base: `976615458479a20e9ff0ba63e1238ef6eed33761`. Exclusive implementation in the existing portfolio clone, branch `feat/reference-portfolio-rebuild`. No push or deployment. Root owns browser QA, shared harness, and independent Astra review.

Brief: `/Users/ayaanmunshi/Documents/Codex/2026-11-10/can-you-help-set-up-an-2/outputs/harness/reports/portfolio-revision-2026-11-19-round2-brief.md`.

## Asked vs delivered

Asked:
> “make my picture and title slightly bigger.” “change western logo to be see through like aker”
>
> “make this one line not rbeaking into two:Building multi-agent tools that help investment teams query real estate data in plain English.”
>
> “For amplify, make the video the thing that is the main screen and then the picture of me and my ram and frined below it.”
>
> “FOR OEC i ran the comeptitioni made the case make it look more serious.”
>
> “Make the stocks im watching smaller like an exapndable thing, anda lso go in and add the link to my writings, have it expandable in place so its not another page, they canr ead and scrooll here.”
>
> “let's chat ... a modal opens up ... simple very miniamlistic form ... opportunities, business ideas, or setup soccer”

Delivered:
- Slightly larger portrait/title. Supplied HEIC converted to JPEG and cropped in CSS to the face and shoulders, preserving proportions and the prior portrait asset (answers: “picture and title slightly bigger”; presenting-photo instruction in brief).
- Supplied transparent Western, BMO, RBC and Canam marks, using CSS crops for outer padding and emblem visibility, without pale tiles (answers: “see through like aker”; supplied-logo instructions in brief).
- Concise Aker introduction and Investments Analytics Team; shorter experience introductions and skill subtitles, with mobile wrapping permitted (answers: “one line”; team/typography instructions in brief).
- BMO uses a public Wealthsimple trading-platform capture with a subtle vertical pan and visible source identification. RBC Fall 2025 uses an intentional click-to-play Aiden public explainer; RBC 2024 uses a separate scrolling analytics-delivery concept. Public company media is separate from personal-work copy (answers: revised BMO/RBC media instructions in brief).
- Amplify’s controlled presentation video leads both the card and panel. Its poster is a genuine frame from the supplied clip; team photo follows below. Separate valid controls open experience details. US Cash Management Team (Amplify Program), concise AI payment-routing description, and exact application credit are included (answers: “video ... main screen ... picture ... below”; team/application instructions in brief).
- Canam Manufacturing Group / Lean Engineering Student / Toronto / Summer 2023; corrected process and C#/Blender work, plus a warm isometric yard illustration (answers: Canam corrections in brief).
- OEC is Competition Director, describing the owner-created ESG infrastructure case, 200+ participants, 20+ universities, and a 15-person organizing team. No invented date, location, or contestant claim (answers: “i ran the comeptitioni made the case”).
- RBC Design Thinking is the Fall 2023 London technology internship. FinIQ, Indigenous financial-assistance context, RBCx presentation, usability testing, accessible Figma/JavaScript interfaces. Only presenting portrait and group photo remain (answers: Design Thinking corrections in brief).
- AWS keynote cover with clear conference-image caption, plus the owner’s attendee badge. No claim that Ayaan is the keynote speaker (answers: keynote-cover instruction in brief).
- Collapsed stock disclosure lazily mounts and cleans up the provider widget. Writings expand in place with bounded, keyboard-focusable scroll regions. Original articles share the same unchanged bodies with their existing routes, including links, tables and figures (answers: “expandable ... read and scrooll here”).
- Minimal native contact dialog with topic, optional name, and message. “Open email app” creates an encoded mailto draft; “Copy message” copies that draft. Nothing is sent by the site, and no delivery success is claimed (answers: “modal ... minimalistic form”).

Not asked, suggested:
- None added. No new email service, publication, article rewriting, or private-document hosting.

Open questions for the owner:
- None required for this revision. The existing source presentation has no verified caption track; that previously recorded accessibility limitation remains.

Scope review: pending independent reviewer.

## Source facts and assets

Latest owner corrections in the brief supersede the earlier legacy Canam and OEC framing. Resume facts for unaffected experiences remain from the preceding revision. Only selected concise metrics are shown; no new personal achievements inferred from public product media.

- Patent wording: **“Inventor on US patent application 63/867,457, filed August 20, 2025.”** The root inspected Schedule A of owner-supplied `/Users/ayaanmunshi/Downloads/Patent.pdf`, title *SYSTEMS AND METHODS FOR IMPROVED PAYMENT ROUTING USING MACHINE LEARNING*. This is an application, not a granted patent. The private assignment PDF, signatures, and other contents were never copied into the project or public assets.
- Portrait: `/Users/ayaanmunshi/Downloads/DSC08846-Enhanced-NR.heic` → `public/photos/presenting-headshot-nov19.jpg`, using native `sips` format conversion. Scoped system access was needed for a valid HEIC decode. No face generation or retouching.
- Transparent marks, from supplied clipboard PNGs: Western `bab6116b-5db0-4531-b0a0-cb9da3659a30`; BMO `ec88d51c-d930-4303-8a66-391a43e7e8bf`; RBC `8ef21c47-1010-4fbf-bdbd-0d48bb7dfe6e`; Canam `24869122-9c29-4f95-bba6-6a18bed46bc3`. Stable public files end `-transparent-nov19.png`. No original files overwritten.
- AWS cover: supplied `5ac82ce1-8a6c-485d-8c35-f851b1f4e1ff.png` → `aws-keynote-nov19.png`. Speaker is not identified as the owner. The earlier owner badge remains.
- Wealthsimple: official page `https://www.wealthsimple.com/en-ca/trade`; original public asset `https://images.ctfassets.net/v44fuld738we/17yP8C4N1sHmxTANaGhl4k/160809725256a8b692d932161dbbf706/ws_pro___demo___video___en-CA.webp`. It is a 2048×1152 still capture, not a recording. The portfolio pans it gently; reference numbers belong to the provider capture and are not a live quote feed, BMO system, or personal implementation. The second researched asset was only a decorative background and was excluded.
- RBC Aiden: existing verified public Brightcove video `https://players.brightcove.net/6021289101001/eY0NaFfEF_default/index.html?videoId=6089356568001`; source credit links to RBC’s AI Trading page. Iframe only mounts on explicit play, unmounts when offscreen/hidden or globally paused, and remains separate from experience-details controls.
- Amplify poster: AVFoundation extracted frame at 3 seconds of the already trimmed owner clip. Existing 70-second H.264/AAC derivative retained; no duplicate export. Native videos pause when hidden/offscreen or global motion is paused; closing the panel unmounts its playback instance. No autoplay audio.
- Writings: article bodies extracted from the three existing `src/app/(site)/thoughts/*/page.tsx` files into shared components in `src/content/writings/`. A source comparison verified the bodies are byte-for-byte preserved apart from `loading="lazy"` on existing figures. All referenced local article images exist. Metadata still comes from `src/content/thoughts.ts`; existing routes remain.

## Mechanical and browser checks

- `npm test`: 17/17 pass, including three meaningful contact-draft cases for reserved characters/Unicode, topic/header safety, and bounded optional input. `/private/tmp/portfolio-round2-tests.log`.
- `npm run typecheck`: pass. `/private/tmp/portfolio-round2-typecheck.log`.
- Changed-file lint initially identified a synchronous effect state update in the external-video pause handler. Repaired by subscribing directly to actual motion/visibility events; final changed-file lint passes without warnings; log `/private/tmp/portfolio-round2-lint.log`.
- `npm run build`: pass. Log `/private/tmp/portfolio-round2-build.log`. Free disk space after final build: 355 MiB. Only task-owned generated caches were cleared.
- Root browser checklist: desktop and 320/390 mobile; transparent marks/crops; long-title wrapping; Aiden and Amplify intentional playback; page pause; stock expand/collapse/reopen; writing expand/scroll/original routes; contact labels, focus trap, Escape/backdrop, return focus, encoded draft/copy. Do not actually send mail during QA.
- Pending separate Astra code/scope/security review, then hub verification. No claim of unavailable poteto-mode execution or trusted-hook enforcement.
