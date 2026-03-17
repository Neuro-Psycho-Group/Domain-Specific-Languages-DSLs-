# Domain Specific Languages — A Complete Reference

A beautifully designed static website covering the history, applications, future directions, and curiosities of Domain Specific Languages (DSLs).

## Live Site

Deploy to GitHub Pages by pushing this repo. No build step required — pure static HTML/CSS/JS.

## Structure

```
dsl-site/
├── index.html          — Overview & introduction
├── history.html        — Historical timeline (1954–present)
├── applications.html   — Case studies: SQL, CSS, Regex, LaTeX, Terraform, GraphQL, Gherkin
├── future.html         — Future directions & emerging trends
├── tidbits.html        — Fun facts, paradoxes, famous bugs, glossary
├── css/
│   ├── global.css      — Design tokens, typography, utilities
│   └── nav.css         — Navigation & footer styles
└── js/
    ├── nav.js          — Shared navigation HTML injected into every page
    └── site.js         — Scroll reveal, mobile menu, active nav link
```

## Design

- **Palette**: Warm beige base (`#F4EFE4`) with rust (`#B54A1C`) and amber (`#C8872A`) accents
- **Typography**: Libre Baskerville (display) + Crimson Pro (body) + JetBrains Mono (code)
- **Motifs**: Railroad diagrams, parse trees, FSMs, syntax highlighting — all DSL-native visuals
- **Animations**: Token traversal on railroad diagram, scroll reveal, floating orbs, interactive quiz

## GitHub Pages Setup

1. Push to a GitHub repository
2. Go to Settings → Pages
3. Set source to `main` branch, `/ (root)` folder
4. Visit `https://yourusername.github.io/reponame/`

No build step, no dependencies, no bundler — just open `index.html` in any browser.
