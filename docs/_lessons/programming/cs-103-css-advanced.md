---
title: "Advanced CSS & Git: Polish and Version Control"
track: programming
module: cs-103
week: 3
order: 1
type: structured
layout: lesson
marp: true
---

# Advanced CSS & Git

## CSS Grid for layout. Git, never lose work again.

- **Advanced CSS**(Grid, animations, Tailwind) makes your UIs production ready.
- **Git** makes your work recoverable, shareable, and collaborative.

# CSS Grid
## Two-dimensional layouts

```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* three equal columns */
  grid-template-rows: auto;
  gap: 24px;
}

/* Span an element across multiple columns */
.featured {
  grid-column: span 2;
}
```

Grid vs Flexbox:
- **Flexbox**: one direction (row OR column)
- **Grid**: two directions (rows AND columns simultaneously)

Use both. They solve different problems and work together.

# CSS Animations & Transitions
## Motion that communicates

```css
/* Transition — smooth change between states */
.button {
  background: black;
  transition: background 0.2s ease, transform 0.1s ease;
}
.button:hover {
  background: #333;
  transform: translateY(-2px);
}

/* Keyframe animation */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}
.card {
  animation: fadeIn 0.3s ease forwards;
}
```

Rule: animate opacity and transform only. Animating layout properties (width, height, top) causes repaints and kills performance.

# Tailwind CSS
## Utility-first styling at speed

Tailwind replaces custom CSS classes with composable utility classes:

```html
<!-- Without Tailwind -->
<button class="submit-button">Send</button>

<!-- With Tailwind -->
<button class="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
  Send
</button>
```

Benefits:
- No naming classes (the hardest problem in CSS)
- Design system built in (spacing scale, colors, breakpoints)
- Unused styles are purged automatically — tiny production bundle

---

# Git: Three Core Commands

```bash
git add .              # Stage all changed files
git commit -m "msg"   # Save a snapshot with a message
git push origin main  # Upload to GitHub
```

The mental model: **Git is a time machine for your code.**
Every commit is a point you can return to.
Every branch is a parallel timeline.

Commit messages matter. "fix" tells you nothing in 6 months. "fix: resolve null user error on login" tells you everything.

# Git: Branching Workflow

```bash
git checkout -b feature/new-nav   # Create and switch to new branch
# ... make changes ...
git add . && git commit -m "feat: add responsive nav"
git push origin feature/new-nav
# Create a Pull Request on GitHub → review → merge to main
```

Rule: `main` is always deployable.
All work happens on feature branches.
Merge to main only after review.

This workflow is standard across teams.

> Next lesson: React: component-based thinking for UIs.
