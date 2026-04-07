---
title: "Fix the Root, Not the Surface"
code: "CS 103"
track: programming
week: 3
type: mindset
layout: lesson
---

You cannot put lipstick on a pig.
You cannot fix a broken system by adding a shiny interface on top of it.

When something is broken at the root, adjustments at the surface do not hold.
They look like fixes for a day, maybe a week.
Then the same problem surfaces again in a slightly different shape.

This applies directly to how most developers approach codebases.

A bug appears.
They find the line that is failing and patch it.
The immediate problem disappears.
Two weeks later, a different symptom from the same root cause appears somewhere else.

The developer who patches symptoms forever is always busy.
The developer who finds the root cause fixes it once.

Git exists precisely for this reason.
When you can see the full history of every change — who made it, when, and why — you stop guessing about what the system is doing.
You have a record.
You can trace a problem back to the commit that introduced it.
You can understand the decision that was made before you arrived.

Broken systems also accumulate.

Neglect builds up slowly.
A skipped code review here.
A quick fix with no tests there.
A commit message that says "misc changes."

None of these feel significant in the moment.
Over months they compound into a codebase that nobody wants to touch, because nobody is sure what anything does.

The antidote is not a single heroic refactor.
It is small, consistent discipline.

Write a descriptive commit message every time.
Keep your commits small and focused — one change per commit.
When you encounter a broken piece of code, fix it properly or leave a clear note.
Never leave the codebase worse than you found it.

Point out shortcomings as soon as you spot them.
Not aggressively. Not as blame.
As information.

A broken system that gets named gets fixed.
A broken system that nobody mentions lives forever.

Your voice in a codebase is not just your code.
It is your willingness to say: this part is not working, here is why, here is what I think we should do.

That is how good systems get built.
Not by one genius who writes perfect code.
By a team that keeps pointing at what is broken and fixing it together.