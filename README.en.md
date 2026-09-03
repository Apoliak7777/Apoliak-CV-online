<div align="center">

[![Slovencina](https://img.shields.io/badge/SK-Sloven%C4%8Dina-30363d?style=for-the-badge)](README.md) [![English](https://img.shields.io/badge/EN-English-2ea043?style=for-the-badge)](README.en.md)

</div>

<div align="center">

# 🪪 Apoliak CV online

**A static bilingual (SK/EN) online CV and portfolio — two pages, no framework, no build.**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![No dependencies](https://img.shields.io/badge/dependencies-0-d6ff4b?style=flat-square)
![No build](https://img.shields.io/badge/build-none-6a6e78?style=flat-square)
![Languages](https://img.shields.io/badge/SK%20%2F%20EN-bilingual-7cc5ff?style=flat-square)

</div>

---

## 📑 Contents

- [🔎 Overview](#-overview)
- [✨ Features](#-features)
- [🚀 Quick start](#-quick-start)
- [📁 Project structure](#-project-structure)
- [⚙️ Configuration](#️-configuration)
- [🧱 Data model `content.js`](#-data-model-contentjs)
- [⌨️ Keyboard shortcuts](#️-keyboard-shortcuts)
- [🖨️ Printing and PDF](#️-printing-and-pdf)
- [🌐 Deployment](#-deployment)
- [⚠️ Known limitations](#️-known-limitations)
- [📄 License](#-license)

---

## 🔎 Overview

A personal portfolio and online résumé built as a single static page. All content lives in a plain JavaScript object `window.CV_DATA` inside `content.js`; `index.html` contains the complete markup, CSS and rendering JavaScript inline — it reads the data object and assembles the whole page as an HTML string at runtime.

The goal is zero operational overhead: there is no package manager, no build step, no backend and no database. Editing the CV means editing one object in `content.js` and refreshing the browser. Hosting means uploading six files (`index.html`, `projekty.html`, `style.css`, `content.js`, `projects.js`, `og-image.svg`) to any static host.

The site is bilingual from the ground up — every piece of text is a `{ sk, en }` pair, and switching the language simply re-runs `render()`, without a reload.

---

## ✨ Features

- 🌍 **SK/EN bilingual support** — every text field is a `{ sk, en }` pair unwrapped by the `t()` helper. The language choice is stored in both `localStorage` and `sessionStorage` and restored on the next visit.
- 🧩 **Fully data-driven rendering** — the hero, links, stats, all sections and the footer are generated from `window.CV_DATA`. Section order and visibility are controlled by `sections.order` and `show: true/false`; empty sections are skipped and section numbers (01, 02, ...) are renumbered automatically.
- 🎨 **Theme from data** — `meta.accent`, `accent2` and `accent3` are written into CSS custom properties on `:root` during rendering, so the entire palette is controlled from `content.js`.
- 🗂️ **Six section types, each with its own layout** — an experience timeline (a `teraz`/`now` badge when `current: true`), a project grid (`featured: true` gets an accent frame and a `Hlavný`/`Featured` badge), skill rows, education with a `študujem`/`studying` badge, certificates and interest cards.
- 🏅 **Automatic certificate grouping** — grouped by the `issuer` field; each group gets a rotating accent colour, a date range, a count with correct Slovak declension (certifikát / certifikáty / certifikátov) and a button to expand everything beyond the first five. The group date range is computed from the individual `when` values (e.g. `October – November 2025` + `December 2025 – January 2026` → `October 2025 – January 2026`).
- 📊 **Animated counters** — the counts of experience entries, certificates and projects are derived from the data (not hardcoded) and count up with cubic easing once they enter the viewport.
- 🔍 **Runtime SEO and social metadata** — `<title>`, `description`, `og:title`, `og:description`, `og:image`, `og:url`, `twitter:image`, `canonical`, `hreflang` (sk / en / x-default) and a `schema.org/Person` JSON-LD block are injected and updated on every language change.
- 🎯 **Monogram favicon** — an SVG data URI is generated from the initials of the name and the configured accent colour, replacing the fallback in `<head>`.
- 🖼️ **Avatar fallback** — when `meta.photo` is filled in, an `<img>` is rendered; otherwise a gradient monogram from the initials.
- 📋 **Copy to clipboard** — the `share` button copies the page URL, and the e-mail in the footer copies the address; both with a toast confirmation and a fallback (a toast containing the URL, or `mailto:` respectively).
- 🧭 **Scroll UX** — a jump nav with scroll-spy via `IntersectionObserver` and a floating back-to-top button.
- ✨ **Scroll reveals** — a section does not appear all at once: its top rule stretches out, the section number arrives from the left, the vertical timeline rule is drawn in, and the items fly in one after another (the order is held by the CSS variable `--i`, assigned by `observeReveals()`).
- 🗃️ **A dedicated projects page** — `projekty.html` lists every public GitHub project, sorted into categories, with a filter that remembers its choice in `sessionStorage` and its own `CollectionPage` JSON-LD block.
- 🖨️ **Print to PDF straight from the page** — the *Download CV (PDF)* button calls `window.print()` and the `@media print` stylesheet turns the site into a finished document: darkened accents readable on white, the monogram, section numbers, badges and cards preserved, tightened spacing, `break-inside: avoid` against page-break tearing, external link addresses printed inline, and **all hidden certificates expanded**.
- ♿ **Accessibility** — a skip-to-content link, a `role="status" aria-live="polite"` toast, `aria-label` on the language switcher and the navigation, visible `:focus-visible` outlines and a full `prefers-reduced-motion` block.
- 🛟 **Failure resilience** — a visible `Načítavam CV… / Loading…` boot state, a `<noscript>` message, a try/catch around startup that prints the error straight onto the page instead of showing a black screen, a fallback for when `IntersectionObserver` is missing, and a 1.4 s safety net that adds `body.force` and forcibly reveals anything stuck at `opacity: 0`.

---

## 🚀 Quick start

There is nothing to install — no `package.json`, no scripts, no dependencies.

**Simplest** — open `index.html` directly in the browser:

```powershell
start index.html
```

**Recommended** — a local static server (a faithful preview including SEO and the clipboard):

```bash
python -m http.server 8000
# then http://localhost:8000
```

```bash
npx serve .
```

> [!TIP]
> The server is not pointless. The `getSiteUrl()` function only falls back to `location.origin` under the `http:` / `https:` protocol. Over `file://` it returns an empty string, so the canonical URL, `og:url`, `og:image` and the JSON-LD `url`/`image` fields come out empty, and the hreflang tags are not generated at all. The Clipboard API additionally requires a secure context, so over `file://` the `share` button and the e-mail copy only show a toast or open `mailto:`.

**Editing content** — you change `content.js` and nothing else, then refresh the page. No admin panel and no CMS.

---

## 📁 Project structure

```text
Apoliak-CV-online/
├── index.html      # the CV: <head> with SEO placeholders + the inline renderer <script>
├── projekty.html   # the sub-page listing every public GitHub project
├── style.css       # the design system — shared by both pages
├── content.js      # the CV content — window.CV_DATA
├── projects.js     # the projects page content — window.PROJECTS_DATA
├── og-image.svg    # hand-written 1200x630 preview card for link sharing
├── README.md       # the Slovak original (the site does not load it, it is not needed for hosting)
└── README.en.md    # this file — the English translation
```

Key functions in the inline script of `index.html`:

| Function                                               | What it does                                                        |
| ------------------------------------------------------ | ------------------------------------------------------------------ |
| `t(v, l)`                                              | unwraps a `{ sk, en }` pair according to the current language       |
| `esc()` / `safeUrl()`                                  | HTML-escapes text and neutralises `javascript:` URLs                |
| `getSiteUrl()` / `absUrl()`                            | the site base URL and absolute paths for metadata                   |
| `render()`                                             | assembles the whole document and writes it into `<main id="app">`   |
| `renderSection()`                                      | six layout branches depending on the section key                    |
| `certRange()`                                          | group date range computed from the individual `when` values         |
| `renderStats()` / `renderJumpNav()`                    | stats and jump navigation from the data                             |
| `updateSeo()` / `updateHreflang()` / `updateFavicon()` | metadata, JSON-LD and favicon at runtime                            |
| `observeReveals()` / `observeScrollSpy()` / `observeStats()` | three `IntersectionObserver` instances                        |
| `bindInteractions()`                                   | expanding certificates, sharing, copying the e-mail, back to top    |
| `setLang(l)`                                           | stores the language and re-renders the page                         |

Deliberately **absent** here: `package.json`, a lockfile, `node_modules`, build configuration, tests, CI and `.gitignore`.

---

## ⚙️ Configuration

The entire configuration lives in the `meta` block in `content.js`. No environment variables, no config files.

| Key                               | Default value      | Meaning                                                                                                                                                                             |
| --------------------------------- | ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `meta.name`                       | `"Alex Poliak"`    | the name in the hero, plus the initials for the monogram and favicon                                                                                                                |
| `meta.accent`                     | `#d6ff4b`          | primary accent colour → CSS `--accent`                                                                                                                                              |
| `meta.accent2`                    | `#ff9d54`          | complementary colour → `--accent-2`                                                                                                                                                 |
| `meta.accent3`                    | `#7cc5ff`          | third colour → `--accent-3` (certificate groups)                                                                                                                                    |
| `meta.photo`                      | empty              | photo URL; empty = gradient monogram                                                                                                                                                |
| `meta.cvFile`                     | empty              | URL to a ready-made PDF. When empty the *Download CV (PDF)* button stays — it prints the page itself via `window.print()` and the print stylesheet turns it into a finished document |
| `meta.siteUrl`                    | public URL         | the full public URL for SEO and OG; without it canonical and `og:url` come out incomplete                                                                                           |
| `meta.ogImage`                    | `og-image.svg`     | the preview image, made absolute against `siteUrl`                                                                                                                                  |
| `meta.location`                   | `{ sk, en }`       | the location shown in the hero; it also switches whether the JSON-LD `address` block is generated                                                                                   |
| `meta.locality`                   | town               | `addressLocality` for JSON-LD; falls back to `meta.location` in the current language                                                                                                |
| `meta.birth` / `meta.birthISO`    | `{ sk, en }` / ISO | date of birth in the hero (`nar.` / `b.`) and `birthDate` in JSON-LD; leave both empty to show nothing                                                                               |
| `meta.title` / `meta.description` | `{ sk, en }`       | the `<title>` and meta description per language                                                                                                                                     |
| `hero.available`                  | `true`             | enables the pulsing availability dot in the `meta.accent` colour                                                                                                                    |
| `sections.order`                  | array of 6 keys    | the order of the sections on the page                                                                                                                                               |
| `sections.<key>.show`             | `true`             | turns a section off without deleting its data                                                                                                                                       |
| `sections.<key>.more`             | projects only      | `{ url, count, label }` — renders a button to the sub-page below the section. `count` also overrides the counter (the home page only shows a selection, the counter reports the real total) |

> [!NOTE]
> The main tuning constant outside `content.js` is `CERT_PREVIEW = 5` in the inline script of `index.html` — how many certificates per issuer are shown before the *Show N more* button. Besides it, `index.html` also hardcodes the fallback favicon (the "AP" monogram and the colour `#d6ff4b`), the static `<title>Portfólio</title>`, `theme-color` (a static value in `<head>` that `render()` overwrites with the computed `body` background), `og:locale` (`sk_SK`), the OG image dimensions, the `SK` country in the JSON-LD address and the entire `:root` fallback palette, whose `--accent` / `--accent-2` / `--accent-3` duplicate the values from `content.js`.

---

## 🧱 Data model `content.js`

| Key           | Type    | Contents                                                                                  |
| ------------- | ------- | ----------------------------------------------------------------------------------------- |
| `meta`        | object  | the settings above                                                                        |
| `hero`        | object  | `available`, `status`, `role`, `bio`                                                      |
| `links`       | array   | `{ label: {sk,en}, url }` — external links get `target="_blank" rel="noopener"` and an arrow |
| `sections`    | object  | `order` + `{ show, label }` for each section                                                |
| `experience`  | array   | `current`, `when`, `title`, `company`, `desc`                                              |
| `projects`    | array   | `featured`, `title`, `desc`, `url`, `tags[]`                                               |
| `skills`      | array   | `name`, `detail`                                                                           |
| `education`   | array   | `current`, `when`, `title`, `place`, `desc`                                                |
| `certificates`| array   | `issuer`, `when`, `title`, optionally `url`                                                |
| `interests`   | array   | `name`, `detail`                                                                           |
| `footer`      | object  | `email`                                                                                    |

---

## ⌨️ Keyboard shortcuts

The page registers a single `keydown` listener with two shortcuts:

| Key     | Action                   |
| ------- | ------------------------ |
| `S`     | switch to Slovak         |
| `E`     | switch to English        |

The shortcuts are suppressed while focus is inside an `INPUT`, `TEXTAREA` or `SELECT`.

> [!WARNING]
> The listener does not check modifiers, so `Ctrl` + `S` (or `Cmd` + `S`) switches the language to Slovak alongside the native save-page dialog. The same applies to `Ctrl` + `E`.

---

## 🖨️ Printing and PDF

The browser does the PDF export: `Ctrl` + `P` (or `Cmd` + `P`) → *Save as PDF*. The **Download CV (PDF)** button in the header triggers the same thing whenever `meta.cvFile` is empty.

The `@media print` stylesheet takes care of how the result looks. It does not reduce the document to plain text — it only translates the palette into a print version and leaves the rest of the design as it appears on the web:

- accents are darkened (`#4f6b00`, `#a8500a`, `#14618f`) so they stay readable on white, while the monogram, section numbers, badges, cards and the timeline all remain;
- spacing tightens up, `@page` uses 14 × 13 mm margins, and `print-color-adjust: exact` keeps the browser from dropping the colours;
- `break-inside: avoid` holds individual entries together so they do not fall apart across a page break;
- the controls (language switcher, jump nav, buttons) are hidden and **all hidden certificates are expanded**;
- external links get their address printed after the text — on paper it would otherwise be lost.

> [!IMPORTANT]
> The print palette in `:root` must use `!important`. `render()` writes `--accent`, `--accent-2` and `--accent-3` from `content.js` straight into the inline `style` on `<html>`, which outranks the `@media print` block — without `!important` the PDF would keep the light accents and they would be unreadable on white.

---

## 🌐 Deployment

Upload all six files — `index.html`, `projekty.html`, `style.css`, `content.js`, `projects.js` and `og-image.svg` — exactly as they are to any static host: GitHub Pages, Netlify, Vercel, plain nginx or Apache. You can upload `README.md` and `README.en.md` as well; the site does not use them. No PHP, no database, no runtime environment.

Before deploying:

1. Set `meta.siteUrl` in `content.js` to the final public URL.
2. Update `og-image.svg` if you changed the name or the role (the image does not read the data).
3. Consider replacing `og-image.svg` with a 1200x630 PNG and adjusting `meta.ogImage` — see the limitations below.

---

## ⚠️ Known limitations

> [!WARNING]
> **`og:image` points to an SVG.** Facebook, LinkedIn, X and Slack do not render SVG previews — displaying the preview card for real requires a PNG or JPG at 1200x630. This is the single most likely thing to silently fail in production.

- **`meta.siteUrl` is empty** in the committed data. On an `http(s)` host this does not matter — `getSiteUrl()` falls back to `location.origin`, so the canonical URL, `og:url`, `og:image` and the JSON-LD `url`/`image` all work. Over `file://`, however, they come out empty and all three hreflang tags are not generated at all. Filling `siteUrl` in is still worth it to pin the canonical domain (e.g. apex vs. `www`).
- **`og-image.svg` is not generated from the data.** The name, role, availability text, e-mail and city are all written into it by hand. Changing `content.js` leaves it stale; it has to be edited manually.
- **Static OG tags are not updated on a language switch.** `updateSeo()` only rewrites `og:title`, `og:description`, `og:image` and `og:url`. `og:type`, `og:locale`, `og:locale:alternate` and the image dimensions stay exactly as they are in `index.html` — so `og:locale` reports `sk_SK` even in the English version.
- **JavaScript is mandatory.** A crawler that does not execute JS will see the static fallback `<title>Portfólio</title>`, an empty `<meta name="description">` and a `<main>` containing only the `<noscript>` message plus the leftover boot text `Načítavam CV… / Loading…` — that is, none of the actual CV content. A user with JavaScript disabled sees those same two texts, because the boot element is only removed by `render()`.
- **A hidden `?preview=1` branch.** With this parameter the inline script replaces `window.CV_DATA` with the contents of the `cv_admin_draft` `localStorage` key (according to the comment, this is a preview from an admin panel). There is no admin panel in this repository, so the feature is unreachable here — but it does mean that anything with access to the domain's `localStorage` can control the rendered content on a visit with `?preview=1`.
- **Content is trusted by definition.** The page is assembled via `innerHTML` and string concatenation; `esc()` and `safeUrl()` are enough for data written by the author, but never wire the renderer up to user-supplied or third-party content without further hardening.
- **Personal contact details are in the repository in plaintext** (both `content.js` and `og-image.svg`). When forking this as a template, all of them have to be replaced.
- **Google Fonts is an external request** (Space Grotesk, JetBrains Mono). It is loaded non-blockingly via `media="print"` switched to `all`, so the page is fully usable offline with a system font — the fonts can be self-hosted with no loss of functionality.
- **`index.html` and `content.js` must stay in the same folder** — the script tag uses a bare relative path with no fallback. If `content.js` is missing or has a syntax error, the page prints `Obsah sa nepodarilo načítať.` instead of coming up blank.
- **No tests, no linting, no CI.** The correctness of a content edit can only be verified by opening the page in a browser.
- **Switching the language is a full re-render** — expanded certificate groups collapse and the counter animation replays from the start.

---

## 📄 License

There is **no LICENSE file** in the repository, and not a single source file carries a licence header. The work is therefore "all rights reserved" by default — nobody is granted any right to use, modify or redistribute it.

> [!NOTE]
> `content.js` tags this project as `Open Source` and links to a public GitHub repository. If open source is the actual intent, a licence file (e.g. MIT) needs to be added.

---

<div align="center">

Built by **Alex Poliak** — [GitHub](https://github.com/Apoliak7777) — [alexpoliak21@gmail.com](mailto:alexpoliak21@gmail.com)

</div>
