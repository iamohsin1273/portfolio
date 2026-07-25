# Portfolio — CLAUDE.md

## Project overview
Single-page cinematic portfolio for **Mohamed Mohsin** (Cloud & Platform / DevOps Engineer).
Concept: **SIGNAL** — a *deployment pipeline made visible*. The page is structured as pipeline
**stages** (Source → Build → Test/Review → Promote → Deploy → Observe → Connect), each with its
own distinct layout + interaction, not a repeated card-grid template.
Visual system: **Editorial/Technical Print** — off-white paper (`--paper #F4F1EA`), deep ink
navy (`--ink #12203A`), single signal-amber accent (`--accent #E8563F`); Space Grotesk display
+ Inter body, JetBrains Mono for real technical artifacts only.
Motion: GSAP + ScrollTrigger (scroll-scrubbed) + Lenis smooth scroll, all via pinned CDN.
Live URL: https://iamohsin1273.github.io/portfolio/
Repo: https://github.com/iamohsin1273/portfolio.git (branch: `main`)
Deploy: GitHub Actions → `.github/workflows/deploy.yml` → GitHub Pages

> History: previous themes (JARVIS OS `2ed6d21`, then a Mystic Multiverse WIP) were retired in
> the SIGNAL rebuild. JARVIS OS is recoverable from git history.

---

## File structure
```
index.html          — entire site: inline <style> (all CSS) + 7 stage <section>s + pipeline rail
js/app.js           — Lenis + GSAP/ScrollTrigger orchestration; one init fn per stage
css/styles.css      — legacy/unused (site is self-contained in index.html)
assets/
  icons/            — SVG brand logos (aws, k8s, terraform, etc.) — NOTE: not currently referenced
  images/           — profile.jpeg (OG image), Original.jpeg
  resume/           — MohamedMohsinResume.pdf (linked from hero + connect stage)
.backup/            — pre-SIGNAL snapshot marker (gitignored)
docs/               — misc docs
.github/workflows/deploy.yml
```

---

## Architecture

### index.html
- **CSS variables** (`:root`): `--paper`, `--paper-2`, `--panel`, `--ink`, `--ink-soft`, `--ink-faint`,
  `--accent`, `--rule`, `--ok`, `--ff-d/-b/-m`, `--rail-w`, `--ease`. Content is **static in the HTML**
  (SEO/ATS-readable) — JS only enhances it.
- **Pipeline rail** (`.rail`, desktop) doubles as nav + scroll progress; collapses to `.topnav` +
  `.topbar` on mobile (≤900px).
- **Stages** (in order), each structurally distinct:
  1. `#source` — hero; name resolves char-by-char, margin annotations
  2. `#build` — self-assembling dependency **DAG** (SVG), horizontal pan, pinned+scrubbed
  3. `#test` — Terraform lab **ledger** (changelog/PR style), score count-up
  4. `#promote` — flagship **case study**, off-grid animated Jenkins/IIS flow diagram + margin narrative
  5. `#deploy` — interactive **K8s simulator** (scale/kill/rollout/load), editorial controls
  6. `#observe` — **horizontal scroll-jacked** timeline (now/next); vertical stack on mobile
  7. `#connect` — calm contact close (email, GitHub, LinkedIn, résumé)
- CDN (all `defer`): GSAP 3.12.5, ScrollTrigger, Lenis 1.1.13; then `./js/app.js`.

### js/app.js
- Globals: `$`/`$$`, `reduceMo`, `isMobile()`, `hasGSAP`/`hasLenis` feature flags.
- `initLenis()` — smooth scroll (skipped under reduced-motion); `scrollToId()` anchor helper.
- Pipeline rail: `updateRail()` (progress + active stage) on scroll; step buttons → `scrollToId`.
- Per-stage init fns, all called from `boot()`:
  - `initSource()` — GSAP char stagger + fade-ins
  - `initBuildDAG()` — builds SVG nodes/edges from `DAG` object; ScrollTrigger pin+scrub lights
    nodes/edges in order + pans horizontally
  - `initTestLedger()` — IntersectionObserver count-up on `.ledger-score[data-score]`
  - `initPromote()` — ScrollTrigger scrub lights `.flow-node`s stage-by-stage
  - `initDeploy()` — pure-JS k8s sim (pods array, reconcile loop, event log)
  - `initObserve()` — GSAP horizontal pan pinned to vertical scroll (desktop only)
- **Reduced-motion**: every module has a static/instant fallback; Lenis + scroll-jack disabled.
- Graceful degradation: if GSAP/Lenis CDN fails, content + sim still work (static end-states).

---

## Current git state (as of SIGNAL rebuild 2026-07-25)
- `index.html` + `js/app.js` fully rebuilt as SIGNAL (see above). JARVIS OS retired (git `2ed6d21`).
- Note: during the rebuild the Bash/PowerShell safety classifier was unavailable, so `git stash`
  could not run; the prior Mystic WIP was superseded directly (JARVIS remains in history).

---

## Owner / personal data
- Name: Mohamed Mohsin
- Location: Chennai
- Email: iamohsin0033@gmail.com
- Phone: +91 7305421447
- GitHub: https://github.com/iamohsin1273
- LinkedIn: https://linkedin.com/in/iam-mohsin
- Role: Junior DevOps Engineer (7 months experience)
- Education: B.Tech CSE — D.R. M.G.R. Educational and Research Institute, Chennai (Aug 2021 – May 2025)
- Current employer: Revolite Infotech Pvt. Ltd., Chennai (Jan 2026 – Present)

## Real skills (from resume)
Cloud: AWS (EC2, S3, IAM, ECS, EKS, CloudFormation)
Containers: Kubernetes, Docker, K8sGPT, Harbor
IaC: Terraform, Ansible
CI/CD: Jenkins, GitHub Actions
Monitoring: Prometheus, Grafana
Security: SonarQube, Trivy
Languages: Python, Shell Scripting
VCS: Git, GitHub
OS: Linux, Windows

## Real projects
1. AI-Powered DevSecOps Pipeline — GitHub, Jenkins, SonarQube, Trivy, Docker, Harbor, Kubernetes, K8sGPT, Slack notifications. Link: https://github.com/iamohsin1273

## Personalisation points
- **Stage content** is static in `index.html` — edit each `<section>` directly (no HERO config object)
- **Terraform ledger** (`#test` section): copy a `.ledger-row` to add completed labs; set dot class (`done`/`active`/`pending`), score `data-score`, and badge class
- **DAG nodes/edges** (`DAG` object in `js/app.js`): add/remove nodes or edges to reflect new skills
- **PROMOTE narrative** (`#promote` section): fill in `<!-- MOHSIN: ... -->` placeholders with real metrics/runbook details
- **Contact links** (`#connect` section): email, GitHub, LinkedIn hrefs + résumé path
- **Meta / OG tags** at top of `<head>`
- **Profile image**: `assets/images/profile.jpeg` (used as OG image; not displayed inline — add an `<img>` to `#source` if desired)

---

## Conventions
- No build step — pure HTML/CSS/JS, no bundler, no npm
- All CSS lives in `<style>` in `index.html`; `css/styles.css` is legacy/unused
- Responsive breakpoint: `900px` (rail hides, topnav + topbar appear, scroll-jack disabled)
- `prefers-reduced-motion` respected: Lenis off, scroll-jack disabled, static end-states shown
- CDN libs loaded `defer` — all modules guard with `hasGSAP`/`hasLenis` flags for graceful degradation
- `.backup/` is gitignored (pre-SIGNAL snapshot marker)

---

## Ongoing / next tasks
- [ ] Add Terraform labs 3+ to the ledger as they complete
- [ ] Fill `<!-- MOHSIN: -->` placeholders in PROMOTE stage with real metrics/runbook details
- [ ] Optionally add profile photo to SOURCE stage (`assets/images/profile.jpeg`)
- [ ] Add any additional real project links or case studies
- [ ] Run Lighthouse mobile audit post-deploy; tune if Perf < 90
