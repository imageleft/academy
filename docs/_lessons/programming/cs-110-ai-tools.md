---
title: "AI Dev Tools: Build 10x Faster"
track: programming
module: cs-110
week: 10
order: 1
type: structured
layout: lesson
marp: true
---

# AI Dev Tools

## AI doesn't replace the developer. It replaces the developer who doesn't use AI.

The gap between developers who use AI tools effectively and those who don't is already measurable in output per day.

It will only widen.

This lesson is not about using AI as a crutch.
It is about using AI as a multiplier.

# Cursor IDE

## AI-native coding

Cursor is a fork of VS Code with AI deeply integrated.

**Core features:**
- `Cmd+K`: inline edit: select code, describe the change, it applies it
- `Cmd+L`: chat panel: ask questions about your codebase with full file context
- `Tab`: autocomplete that finishes multi-line logic, not just variable names
- `@file`: reference specific files in your prompt

# AI Prompting for Code

## Garbage in, garbage out

**Weak prompt:**
> "Fix my code"

**Strong prompt:**
> "This Express route returns a 500 error when `req.body.email` is undefined.

> The route should validate that email exists and return a 400 with the message

> 'Email is required' if it's missing. Here's the current code: [paste]"

The more context you give, the more accurate the output.

# AI for Debugging

When stuck on a bug:

1. Paste the error message + stack trace into Cursor chat
2. Add: "Here is the function that's failing: [paste]"
3. Ask: "What is causing this error and what is the fix?"

For 80% of bugs, this produces a correct answer in under 30 seconds.

For the other 20%: the AI explanation gives you enough context to find the answer yourself.

Never blindly apply AI fixes. Read the explanation. Understand the fix. Then apply it.

# AI for Code Review

## Catching problems before they ship

Before submitting any significant code:

```
Prompt: "Review this function for:
1. Security vulnerabilities
2. Edge cases not handled
3. Performance issues
4. Anything that could fail in production

[paste code]"
```

AI code review catches the obvious class of issues instantly.
It is not a replacement for human review on critical paths — but it raises the floor significantly.

# The AI Workflow Rules
## Using tools without becoming dependent on them

**Rule 1:** Understand before you use. If you can't explain what the AI-generated code does, you don't own it.

**Rule 2:** Test everything AI writes. AI produces plausible code, not necessarily correct code.

**Rule 3:** Use AI for speed, not for thinking. Architecture decisions, system design, and tradeoffs require your judgment.

**Rule 4:** Your prompting skill is a programming skill. Invest in it.

The developer who uses AI best is not the one who delegates the most. It is the one who gives AI the most precise instructions and validates the output most rigorously.

> Next lesson: Product catalog: presenting everything you've built.
