# Mohamed Mohsin — Portfolio

A fast, animated single-page portfolio for a Cloud & Platform / DevOps Engineer. Built as a static site with vanilla HTML, CSS, and JavaScript, and deployed automatically to GitHub Pages.

**Live site:** https://iamohsin1273.github.io/portfolio/

## Overview

The site presents a cloud-native themed experience with a hero terminal, animated background layers, an interactive skills and tech stack, an experience timeline, project highlights, an architecture/pipeline showcase, and a contact section. It is fully static — no backend or build step required.

## Tech Stack

- **Markup & styling:** Semantic HTML5, hand-written CSS (`css/styles.css`)
- **Behavior:** Vanilla JavaScript (`js/app.js`)
- **Animation & interaction libraries (CDN):**
  - [GSAP](https://gsap.com/) + ScrollTrigger — scroll-driven animation
  - [AOS](https://michalsnik.github.io/aos/) — animate on scroll
  - [Typed.js](https://mattboldt.com/demos/typed-js/) — typing effect
  - [Vanilla-Tilt](https://micku7zu.github.io/vanilla-tilt.js/) — tilt/hover effects
- **Fonts:** Inter, JetBrains Mono, Space Grotesk (Google Fonts)
- **SEO:** Open Graph and Twitter Card metadata, JSON-LD `Person` structured data, `robots.txt`, and `sitemap.xml`

## Project Structure

```
.
├── index.html              # Single-page markup and metadata
├── css/
│   └── styles.css          # All styling
├── js/
│   └── app.js              # Interactions, animations, dynamic sections
├── assets/
│   ├── images/             # Profile images
│   └── resume/             # Downloadable resume (PDF)
├── robots.txt
├── sitemap.xml
└── .github/workflows/
    └── deploy.yml          # GitHub Pages deployment
```

## Local Development

No build tooling is needed. Clone the repo and open the site with any static server:

```bash
git clone https://github.com/iamohsin1273/portfolio.git
cd portfolio

# Option 1 — Python
python -m http.server 8000

# Option 2 — Node
npx serve .
```

Then visit `http://localhost:8000`. You can also open `index.html` directly in a browser, though a local server is recommended so relative asset paths resolve correctly.

## Deployment

Deployment is automated with GitHub Actions ([.github/workflows/deploy.yml](.github/workflows/deploy.yml)). Every push to `main` builds and publishes the site to GitHub Pages.

To enable it on a fresh clone or fork:

1. Go to **Settings → Pages**.
2. Under **Build and deployment → Source**, select **GitHub Actions**.
3. Push to `main` (or trigger the workflow manually from the **Actions** tab).

## License

Released under the [MIT License](LICENSE). © Mohamed Mohsin
