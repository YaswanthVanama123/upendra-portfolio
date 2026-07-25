# Morampudi Naga Upendra — Portfolio

A modern, responsive portfolio website built with **React + Vite**, highlighting
full-stack development across the **MERN** (MongoDB, Express, React, Node) and
**PERN** (PostgreSQL, Express, React, Node) stacks.

## Tech Stack

- ⚛️ **React 18** — component-based UI
- ⚡ **Vite** — fast dev server & build
- 🎨 Plain CSS (custom properties, no framework) — dark theme, MERN/PERN accents
- 📱 Fully responsive + accessible (respects `prefers-reduced-motion`)

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (opens http://localhost:5173)
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build locally
npm run preview
```

## ✏️ How to Customize (do this when your resume is ready)

**Almost everything lives in one file:** [`src/data/portfolio.js`](src/data/portfolio.js)

Open it and replace the placeholder values:

| What to edit            | Where in `portfolio.js`         |
| ----------------------- | ------------------------------- |
| Name, role, intro       | `profile`                       |
| Email & social links    | `profile.email`, `profile.socials` |
| Resume download link     | `profile.resumeUrl`             |
| Bio & stats             | `about`                         |
| MERN / PERN breakdown   | `stacks`                        |
| Skill chips             | `skillGroups`                   |
| Projects                | `projects`                      |
| Experience & education  | `timeline`                      |

### Add your resume file

Drop your PDF into the `public/` folder (e.g. `public/resume.pdf`) and set:

```js
resumeUrl: '/resume.pdf'
```

### Wire up the contact form

The contact form currently opens the visitor's email client (`mailto:`). To
receive submissions directly, connect it to a service like
[Formspree](https://formspree.io) or your own backend in
[`src/components/Contact.jsx`](src/components/Contact.jsx).

## Project Structure

```
src/
├── data/portfolio.js       ← 📝 EDIT THIS — all your content
├── pages/
│   ├── Home.jsx            ← the one-page portfolio (all sections)
│   └── ProjectDetail.jsx   ← per-project case-study page (/projects/:slug)
├── components/             ← UI sections (Navbar, Hero, About, Skills, Projects, …)
│   └── ScrollManager.jsx   ← scroll-to-top / scroll-to-section on route change
├── hooks/useReveal.jsx     ← scroll-in animations
├── App.jsx                 ← routes + shared Navbar/Footer
├── main.jsx                ← app entry
└── index.css               ← all styles + theme tokens

.github/workflows/deploy.yml  ← CI/CD: auto-build & deploy to GitHub Pages
public/CNAME                  ← custom domain (upendra.clicksolvertech.com)
```

## Routing

The site uses **React Router**. Each project has its own shareable URL:

- `/` — the main portfolio
- `/projects/:slug` — a full case-study page (e.g. `/projects/food-ordering-platform`)

Slugs are defined per project in `src/data/portfolio.js` (the `slug` field).
Clicking a project (or "View Case Study") navigates to its detail page — no modals.

## Deploy — GitHub Pages (automated)

This repo ships with a CI/CD pipeline (`.github/workflows/deploy.yml`). Every push to
`main` builds the site and deploys it to GitHub Pages automatically — no manual steps
after the one-time setup below.

**One-time setup**

1. Create a GitHub repository and push this project to the `main` branch.
2. In the repo: **Settings → Pages → Build and deployment → Source = "GitHub Actions"**.
3. Point the domain at GitHub Pages. At your DNS provider for `clicksolvertech.com`, add:

   | Type  | Host / Name | Value                  |
   | ----- | ----------- | ---------------------- |
   | CNAME | `upendra`   | `<username>.github.io` |

   (Replace `<username>` with your GitHub username / org.)
4. In **Settings → Pages → Custom domain**, confirm `upendra.clicksolvertech.com`
   (it's read from `public/CNAME`), then tick **Enforce HTTPS** once the certificate
   is issued.

That's it. From then on, `git push` → live at **https://upendra.clicksolvertech.com**.

**How SPA deep links work:** the workflow copies `index.html` to `404.html`, so refreshing
or sharing a deep link like `/projects/payment-ledger` still loads the app and React Router
renders the right page.

---

Placeholder content is marked throughout — search for `PLACEHOLDER` and `TODO` in the
codebase to find everything that still needs your real details.

