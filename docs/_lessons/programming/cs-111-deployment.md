---
title: "Testing & Deployment: Ship With Confidence"
track: programming
module: cs-107
week: 8
order: 1
type: structured
layout: lesson
marp: true
---

# Testing & Deployment

> Code that isn't deployed doesn't exist. Code without tests breaks silently.

Two skills define the difference between a developer who builds and a developer who ships.

**Testing**: knowing your code works before users find out it doesn't.
**Deployment**: getting it to the world reliably, repeatedly, automatically.

# Unit Testing

## Testing the smallest pieces

```javascript
// sum.js
export const sum = (a, b) => a + b

// sum.test.js
import { sum } from './sum'

describe('sum function', () => {
  test('adds two positive numbers', () => {
    expect(sum(2, 3)).toBe(5)
  })

  test('handles negative numbers', () => {
    expect(sum(-1, 1)).toBe(0)
  })

  test('handles zero', () => {
    expect(sum(0, 0)).toBe(0)
  })
})
```

Run: `jest` or `bun test`

The output tells you what passed, what failed, and where.

# What to Test

| Priority | What to test | Why |
|---|---|---|
| **High** | Business logic functions | Wrong output = wrong data in production |
| **High** | Auth and permissions | Security failures are catastrophic |
| **Medium** | API endpoints | Catch regressions before deployment |
| **Medium** | Form validation | User-facing bugs erode trust |
| **Low** | UI components | High effort, low ROI unless shared library |

Test the code whose failure costs the most. Not everything needs a test.

# Environment Variables

## Secrets

```bash
# .env (never commit this file)
DATABASE_URL=postgresql://user:pass@localhost:5432/mydb
JWT_SECRET=your-secret-key-here
OPENAI_API_KEY=sk-...

# .env.example (commit this — shows what variables are needed)
DATABASE_URL=
JWT_SECRET=
OPENAI_API_KEY=
```

```javascript
// Access in code
const secret = process.env.JWT_SECRET
```

Rules:
1. `.env` is in `.gitignore`. Always.
2. `.env.example` is committed with empty values.
3. Production secrets go in your hosting platform's env config — never in code.

---

# Deploying

## Zero-config deployment(Vercel) for Node and React

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project root
vercel

# Deploy to production
vercel --prod
```

Vercel auto-detects React (Vite), Next.js, and Node.js projects.

Every push to `main` on GitHub triggers an automatic production deploy.

Every push to any other branch creates a preview URL for review.

Set environment variables in: Vercel Dashboard → Project → Settings → Environment Variables.

# Docker Basics

## Your app, packaged and portable

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]
```

```bash
docker build -t my-app .
docker run -p 3000:3000 my-app
```

Docker solves "it works on my machine."

The container runs identically on your laptop, a teammate's machine, and a production server.

Essential for backend services that won't be deployed to Vercel.

> Next lesson: AI Tools & Workflow: build with intelligence.
