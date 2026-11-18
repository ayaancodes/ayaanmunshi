# Portfolio rebuild — local review checkpoint

Owner: `/root/portfolio_rebuild` (Astra builder per explicit user override). Base: `ad0f092913547da5791fef1af7be16f16038dbfc`. Isolated branch: `feat/reference-portfolio-rebuild`.

## Asked vs delivered

Exact user requests, as relayed by the hub:

- “I want you to revcewrse engineer this website and like try to fill it in one to one.” → Poppins typography, 1024px centered layout, warm near-black background, subtle contours, profile/Now/Previously blocks, and responsive two/one-column work grid.
- “I want it produiction. level please.” → explicit TypeScript/build checks, keyboard-native dialogs, reduced-motion plus pause support, honest content boundaries, security patch, and separate review. Deployment readiness is **not yet asserted**: final card copy and a durable counter source remain pending.
- “So I would like aker, rippling, bmo, rbc , rbc, rbc, canam group, ontario engineering competiiotn, design thinking program.” → all nine entries, each with a distinct original animated illustration. The owner explicitly approved original HTML/CSS illustrative scenes.
- “And then a want to build something together or just want to saay hi lets chat.” → requested footer CTA and existing confirmed mail link.
- “Also ill have a treacker of how many npeople visited my website and then also a blackjack game as well” and “Total page visits” → optional read-only adapter for a real shared total, hidden until configured, plus a collapsed play-money-free blackjack toy.
- “Case-study panel” → accessible dialog shells with confirmed role/context and illustration disclosure. **These are not completed authored case studies** while their text is pending.
- “Software Engineer; omit Aker team for now” → exact title and no named Aker team.
- “I’ll provide the full card details” → unknown dates/achievements omitted; no invented metrics or project claims.

**Not asked — suggested:** none implemented. Existing non-home routes were retained. No push, PR, deployment, contact message, or live counter registration performed.

**Open questions:** owner’s final card text, any replacement headshot/Aker logo, durable total-visit backend/aggregate endpoint. Poppins and official Rippling/Western icons were sourced by the hub; company scene artwork is original.

**Reviewer verdict:** pending independent hub review, bound to final code fingerprint.

## Content boundary

Software Engineer title and Aker Applied AI Engineer role are confirmed. No Aker team is named. User is supplying final card details; unknown dates/achievements are omitted. RBC and Canam roles derive from existing published repository copy, with no newly supplied achievement copy. OEC/Design Thinking currently have only their confirmed names. The case-study panels therefore show confirmed role/context and the illustration disclosure; they are not complete authored case studies yet. Headshot is the existing repository photo. Aker uses a temporary neutral initial until the owner supplies a logo.

## Counter setup

`GET /api/visitors` is a read-only adapter. Set server-only `PORTFOLIO_VISITOR_METRIC_URL` to an owner-controlled HTTPS endpoint returning `{ "visits": 123 }`, backed by a durable shared total-page-visit aggregate. No credentials appear in client code. Existing Vercel Analytics collection is retained; its mere presence does not provide an accessible public total. The upstream collection, retention and persistence must be configured/verified separately. Without a valid configured endpoint, the adapter returns 204 and the footer hides the count. No localStorage or fabricated metric is used. An upstream must count visits, not unique visitors. This is pending infrastructure, not a deployed counter.

## Local environment

Original checkout source and dirty files are preserved. Dependency reuse began via a symlink; Next’s fallback downloader wrote compiler files inside the original ignored node_modules on first boot. This does not alter source, but dependency isolation is being completed before later checks. No env/secret files copied. The repository’s current Next 16.4.3 emitted a known-vulnerability warning; patch remediation is required before claiming release readiness. React 18 emitted a future-deprecation notice (supported for Next 16; removal stated for Next 17).

`$poteto-mode` is explicitly invoked in the task brief, but no installed SKILL.md was found in the listed skill roots; no execution is claimed. `until-ready` is followed through explicit checks; hook trust/execution is unverified. Independent review and visual QA are owned by the hub.

## Verification — 2026-11-17 Toronto

- `npm run build`: PASS on Next 16.4.6 with webpack; all 12 static pages generated and `/api/visitors` remains dynamic. Strict TypeScript build checks are enabled; inherited `ignoreBuildErrors` was removed.
- `npm run typecheck`: PASS after production type generation.
- `node node_modules/eslint/bin/eslint.js 'src/app/(home)/page.tsx' 'src/app/(home)/layout.tsx' src/app/layout.tsx src/components/portfolio src/content/portfolio.ts src/lib/blackjack.ts src/app/api/visitors/route.ts tests eslint.config.mjs next.config.js`: PASS, zero warnings/errors. Existing broken `next lint` script/config was replaced by the supported ESLint CLI/flat Next configs. This is changed-file validation, not a claim that every inherited page is lint-clean.
- `node --experimental-strip-types --test tests/blackjack.test.mjs tests/visitor-count.test.mjs`: PASS, 7 tests covering ace scoring, deck uniqueness, naturals, immutable hits/busts, dealer soft-17 behavior, push/win/loss, automatic 21 resolution, and count adapter validation/unavailability. Node 23.5 prints experimental type-stripping/module-type warnings; no test failure.
- Production preview `http://127.0.0.1:3100`: HEAD `/` returns 200; unconfigured `/api/visitors` returns 204 (verified 2026-11-18 04:34:55 UTC).
- Hub browser evidence received: desktop/mobile inspected; case-panel Escape/focus return passed; blackjack Stand revealed dealer, correct loss and disabled Hit/Stand, Play again passed; pause control changed accessible label correctly. Hub performs final QA on the final production build.
- Original checkout source status rechecked unchanged: modified tsconfig.json; untracked AGENTS.md and public/experience/nyc.jpg.

## Dependency and execution limits

The initial linked node_modules was replaced by an independent APFS copy-on-write copy, then patched only inside the isolated checkout. Next and eslint-config-next are pinned to 16.4.6; PostCSS to 8.5.33; compatible transitive security fixes were applied. The original repository already contained `package-lock.json`; the competing stale `bun.lock` was removed so npm is the single maintained lockfile. No global settings changed.

The final audit is **not clean**: 26 package-tree findings (20 high, 4 moderate, 2 low), chiefly propagated from one `picomatch` advisory through build/lint dependencies. Direct root advisories:

- `picomatch`, high: https://github.com/advisories/GHSA-fc5q-39xc-vjpf (<=4.0.7), consumed by Tailwind/Chokidar/Micromatch and ESLint tooling here.
- `glob`, moderate: https://github.com/advisories/GHSA-3g3m-2fjr-6pw4.
- `minimatch`, moderate: https://github.com/advisories/GHSA-g3hv-75wg-m249.
- `postcss-selector-parser`, moderate: https://github.com/advisories/GHSA-rj75-hqrm-r3gf, nested under typography.
- `@eslint/plugin-kit`, low: https://github.com/advisories/GHSA-xffm-g5w8-qvg7.

No request handler passes visitor input into these build/lint parsers or filesystem-glob tools. The independent reviewer must assess residual risk; no security-clean or deployment-ready claim is made. Automatic major changes/forced downgrades were deliberately not made to silence audit output. React 18 remains supported with a Next 16 deprecation warning; a React 19 migration is not needed for this scoped rebuild. A transitive ESLint package also warns that this machine's Node 23.5 is outside its advertised LTS engine ranges; actual lint/build checks passed. Use an actively supported LTS Node version in deployment/CI.

Remaining release work: owner-supplied final case-study copy, optional headshot/logo replacement, configure and verify the persistent total-visit source, independent final code/scope/security verdict, and user authorization for any external release.
