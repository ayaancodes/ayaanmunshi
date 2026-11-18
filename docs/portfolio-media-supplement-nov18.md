# Portfolio media and background supplement

Source: `/Users/ayaanmunshi/Documents/Codex/2026-11-10/can-you-help-set-up-an-2/outputs/harness/reports/portfolio-media-supplement-2026-11-18.md`.
Base: `c91b30a75f60f2cedcff3b0433a3574476e4aa04`. This supplement supersedes the prior checkpoint's pending-headshot/media and ripple-background notes. Existing typography, nine-card layout, game logic and approved content are retained.

## Asked vs delivered

Asked:
> also ive added. aheadshot of me make everyhting make it fix around this dont want this to like crunch make it like perfectg not irreegular looking.
> https://notzayed.me/
> alsol i like the backhgyround of this page look atr it for a couple seconds see how the pixels change ror seomthgint here is a pause and resume backhgyround button take a look at that.
> Also i ahve a lot of pics of me presenting, is this something we should add. ill show you some pics for design thinking and then some poictujres for oec.
> Also added the desk i satr att bmo incase you would want that

Delivered:
- The supplied new headshot is the main portrait, with a square, face/shoulder crop using `object-fit: cover`. Natural proportions are preserved and the bottom screenshot badge is outside the displayed crop (answers: “aheadshot of me”; “dont want this to like crunch”; “not irreegular looking”). No face generation or alteration.
- The OEC podium photo replaces its illustrative card and appears in its panel with a factual presentation caption. Design Thinking uses the FinIQ team presentation as its card image, with a portrait-format presentation and one discussion photo in its gallery. Portrait gallery images keep their natural aspect ratio (answers: “pics of me presenting”; “design thinking”; “pictures for oec”). No dates, awards or results were invented.
- BMO retains its illustrative market terminal and gains a desk photo in its panel, captioned “At my BMO desk. Screen details obscured.” Only the inspected redacted derivative was copied; monitor and notebook contents are unreadable. CSS removes its black side margins without stretching the photograph (answers: “the desk i satr att bmo”).
- Original subtle square-pixel clouds replace pointer ripples. Slow neutral/teal/violet patches are strongest at the viewport edges, with the center attenuated for readability. A quiet fixed lower-right button says “Pause background” / “Resume background,” sets the pressed state, and freezes the existing pattern. Canvas work is bounded to 96 columns × 72 rows, at most eight paints per second, and capped device-pixel ratio. Animation stops when hidden, reduced motion is requested, locally paused or globally paused (answers: “pixels change”; “pause and resume background button”). Global/reduced-motion suspension displays the inactive “Background paused” control; the existing global animation control remains separate.
- Repaired the independent review's stock consistency finding: the iframe title is generic, the local selector says “Last picked,” and every local pick increments a reload nonce, even for the same ticker after native chart search. Native provider search is preserved. Selection uses the existing symbol allowlist and cleanup; no unsupported provider synchronization events were invented (necessary correctness repair within the authorized stock-picker implementation).

Not asked, suggested:
- None.

Open questions for the owner:
- Earlier missing experience facts, an additional tenth experience, and automatic weekly stock/news selection remain unresolved as previously recorded. They are not fabricated here.
- No new input is required for this media/background subset. Main headshot, OEC, Design Thinking and BMO desk inputs have now been supplied and integrated.

Independent review and hub visual verification are pending this final revision; the worker does not self-approve.

## Provenance

- Main portrait: owner-supplied `/Users/ayaanmunshi/Desktop/Screenshot 2026-11-18 at 1.05.43 AM.png` (filename contains a narrow no-break space before AM), 802×1211. Stored as `public/photos/headshot-nov18.png` and cropped only in display.
- OEC: owner-supplied TemporaryItems screenshot at 1:18:29 AM; stored as `public/experience/oec-presentation.png`, 1179×658.
- Design Thinking: owner attachments `codex-clipboard-56183f66-f65f-4762-afeb-f0acc92f3525.jpg` (team, 6016×4016), `codex-clipboard-1fe7e266-fd22-4535-8974-d7173c03f274.jpg` (solo, 2624×3936), and `codex-clipboard-26a34c6a-8377-4433-bbee-6ca78b03d283.jpg` (discussion, 3936×2624). Served through Next Image optimization with explicit responsive sizes.
- BMO: generated redaction derivative `exec-17b32201-2c44-4956-be4e-26c26cd47273.png`, 1189×1323, supplied and inspected by the hub. Built-in ImageGen retained the provided desk photograph while strongly blurring all monitor contents and notebook handwriting. Stored as `public/experience/bmo-desk-redacted.png`. The unredacted original is not in project assets.
- Background reference: https://notzayed.me/. Hub observed the changing edge pixel field over about 20 seconds and its pause/resume behavior. Implementation is original, not copied page source.

## Checks and boundary

The regression suite includes same-symbol repeated reload, immutable symbol configs and invalid-symbol rejection. Repository tests, typecheck, changed-file ESLint and production build precede the same independent reviewer's delta review. Root exclusively owns browser QA. No push/deployment; original dirty checkout preserved. `$poteto-mode` runtime/hook execution remains unverified.
