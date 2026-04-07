---
title: "The Most Leveraged Box"
code: "CS 107"
track: programming
week: 7
type: mindset
layout: lesson
---

Everything around you is a box.

A country is a box with borders.
A skill is a box with rules.
A company is a box with culture and incentives.

The smartest people you know have mastered the art of creating boxes for others to live comfortably inside — so comfortably that you barely notice the walls.

A database is a box.

Probably the most leveraged box in existence.

Every social platform you use is built on one.
When you post something, a write happens.
When you scroll, reads happen by the millions.
When a company sells your attention to advertisers, a query is running somewhere to figure out which ad to show you.

Facebook stores over 300 petabytes of data.
YouTube handles 720,000 hours of new video every single day.
These are not just storage numbers. They are leverage numbers.
The data in those boxes is the actual product.

Understanding databases means understanding leverage.

A well-designed database makes queries fast and cheap.
A poorly designed one makes every feature slow and every scale-up painful.

The decisions you make when you design a schema — what to index, how to relate tables, what to normalise — will affect performance for as long as that schema exists.
Bad decisions made early compound over time.
Good decisions made early scale for free.

For beginners, the most important mindset shift is this:

The database is not where data lives after the real work is done.
The database is the core of the application.
Everything else: API, frontend, business logic exists to read from or write to the database.

Get the data model right first.
The code that wraps it is easier to change than the data model underneath it.

Once you understand that, you start designing from the data outward instead of from the interface inward.
That is a different way of thinking.
It is also a better one.
