---
title: "Product Launch: Proof That You Can Build"
track: programming
module: cs-111
week: 11
order: 1
type: mindset
layout: lesson
marp: true
---

# Product Catalog

## Launched Products are Evidence to Start Building

A resume says what you did.
A portfolio shows what you can do.

For a founder, a list of launched products with paying users show your capabilities.

For a developer in 2026, a public GitHub profile and a deployed portfolio are proof of readiness.

# What Goes In a Catalog

## Quality Over Quantity

Three to five projects beats ten mediocre ones.

**What makes a project strong:**

- It is deployed and live
- It solves a real problem for a user
- The code is readable and on GitHub with a good README
- You can explain decisions made

**What to include per project:**
- What it does and who it's for
- The technical stack used
- The hardest problem you solved building it
- A live link and a GitHub link

# Catalog Site

```
/                  → Hero + 2-3 featured projects
/projects          → All projects with filters
/projects/:slug    → Individual project deep-dive
/about             → Background, stack, what you're looking for
```

The homepage must answer in 5 seconds:
- Who are you?
- What do you build?
- Can I see it?

If it takes longer than that, the portfolio is failing its job.

# Performance & SEO Basics

```javascript
// Lighthouse targets for a portfolio site
Performance:    > 90
Accessibility:  > 90
Best Practices: > 90
SEO:            > 90
```

Quick wins:
- Compress all images (use WebP)
- Load fonts with `font-display: swap`
- Add `<meta>` description and Open Graph tags for LinkedIn shares
- Ensure every page has a unique `<title>`

Run Google Lighthouse before publishing. Fix everything under 90.

---

# Profile Optimization

A strong profile:

- Has pinned products section showing your best work.
- Has a detailed documentation
- Shows consistent growth
- Has clear instructions on usage

# Writing Project Descriptions

For every project, write:

**One line:** "A full-stack expense tracker for small business owners, built with React, Node.js, and SQLite."

**The problem:** "Small business owners to track expenses in WhatsApp messages and Excel. They lose data and miss deductions."

**Your solution:** "A mobile-first PWA with receipt photo upload, auto-categorization using Claude API, and monthly export."

**The outcome:** "Used by 3 pilot businesses. Saved 4+ hours per month per business in manual reconciliation."

This is the difference between a catalog that gets ignored and one that gets replies.

> Next lesson: Founder Prep: turn ideas into products.