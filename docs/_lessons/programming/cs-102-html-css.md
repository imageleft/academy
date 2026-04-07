---
title: "HTML & CSS: Structure and Style"
track: programming
module: cs-102
week: 2
order: 1
type: structured
layout: lesson
marp: true
---

# HTML & CSS
## HTML is the skeleton. CSS is the skin.

Every website you've ever used is built on two foundational technologies.

**HTML** (HyperText Markup Language) — defines what content exists and its meaning.
**CSS** (Cascading Style Sheets) — defines how that content looks.

Learning them together is learning to think in layers: structure first, presentation second.

# HTML: Semantic Markup
## Tags that mean something

Bad HTML: `<div>` for everything.
Good HTML: the right tag for the right content.

| Tag | Meaning |
|---|---|
| `<header>` | Top of page or section |
| `<nav>` | Navigation links |
| `<main>` | Primary page content |
| `<article>` | Self-contained content |
| `<section>` | Thematic grouping |
| `<footer>` | Bottom of page or section |

Semantic HTML improves accessibility, SEO, and code readability simultaneously.

# HTML: Forms & Inputs
## Where users interact with your page

```html
<form action="/submit" method="POST">
  <label for="email">Email</label>
  <input type="email" id="email" name="email" required />

  <label for="message">Message</label>
  <textarea id="message" name="message"></textarea>

  <button type="submit">Send</button>
</form>
```

Every input needs a `label`. Every form needs an `action`.
The `required` attribute handles basic validation before JavaScript is needed.

# CSS: The Box Model
## Everything is a box

Every HTML element is a rectangular box with four properties:

```
┌─────────────────────────┐
│        MARGIN           │  ← Space outside the element
│  ┌───────────────────┐  │
│  │     BORDER        │  │  ← Optional visible edge
│  │  ┌─────────────┐  │  │
│  │  │   PADDING   │  │  │  ← Space inside, around content
│  │  │  ┌───────┐  │  │  │
│  │  │  │CONTENT│  │  │  │
│  │  │  └───────┘  │  │  │
│  │  └─────────────┘  │  │
│  └───────────────────┘  │
└─────────────────────────┘
```

`box-sizing: border-box` makes width calculations predictable. Use it on everything.

# CSS: Flexbox

```css
.container {
  display: flex;
  justify-content: space-between; /* horizontal alignment */
  align-items: center;            /* vertical alignment */
  gap: 16px;                      /* space between children */
}
```

Flexbox solves one-dimensional layouts (row or column).
For two-dimensional layouts (rows AND columns simultaneously) → use CSS Grid.

Center anything with two lines:
```css
display: flex;
place-items: center;
```

# Responsive Design
## Mobile first

Majority of users are on mobile. Build mobile-first.

```css
/* Mobile styles (default) */
.card { width: 100%; }

/* Tablet and above */
@media (min-width: 768px) {
  .card { width: 48%; }
}

/* Desktop and above */
@media (min-width: 1024px) {
  .card { width: 31%; }
}
```

Start narrow. Add complexity as the screen grows.
This produces leaner CSS and better mobile performance.

> Next lesson: Advanced CSS & Git: animations, Grid, and version control.
