# Yati Pharmaceutical — Corporate Website

A single-page cinematic product/marketing site for Yati Pharmaceutical Pvt Ltd,
built with vanilla HTML/CSS/JS and a refined teal design system, enhanced with
GSAP + ScrollTrigger for premium scroll, parallax and interactive 3D card motion.

## Run locally

```bash
npm start        # serves the site at http://localhost:3000 (via npx serve)
```

Any static file server works — it's a dependency-free front end.

## Project structure

```
.
├── index.html          # Page markup (all sections + modals)
├── index.css           # Design system + all component styles
├── app.js              # Core logic: slider, modals, search, gallery, counters
├── gsap-init.js        # GSAP scroll reveals, parallax, 3D tilt cards, magnetic CTAs
├── processed/          # Optimised hero slides, product shots, transparent cut-outs
├── gallery/            # Facility gallery imagery
├── scripts/            # Node helper scripts for image processing (uses jimp)
│   ├── check_original_images.js
│   └── search_all.js
└── *.jpg               # Section feature imagery
```

## Design system

The palette is defined as CSS custom properties at the top of `index.css`
(`:root`). It is a professional deep-teal + fresh-emerald system:

| Token                   | Value     | Use                        |
| ----------------------- | --------- | -------------------------- |
| `--lupin-green-primary` | `#0E8C77` | primary teal-emerald       |
| `--lupin-green-lime`    | `#4FC2A6` | soft mint accent           |
| `--lupin-teal-dark`     | `#0B4A43` | deep teal (dark sections)  |
| `--lupin-navy-dark`     | `#06302B` | near-black teal ink        |

## Helper scripts

```bash
npm run img:silhouette   # ASCII silhouette preview of a product cut-out
npm run img:search       # template-match product shots against a label patch
```
