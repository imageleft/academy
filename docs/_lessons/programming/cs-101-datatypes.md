---
title: Data Types Fundamentals
code: CS 101
track: programming
week: 1
type: structured
layout: lesson
---

Every value in programming has a type. Understanding types is understanding how programs work.

## Primitive Data Types

The basic building blocks:

### Numbers

```javascript
let integer = 42;
let decimal = 3.14;
let negative = -10;
```

JavaScript treats all numbers the same way. Other languages distinguish between integers and floats.

### Strings

Text data, wrapped in quotes:

```javascript
let name = "Alice";
let message = "Hello world";
let template = `Hello ${name}`; // template literals
```

### Booleans

True or false. That's it.

```javascript
let isActive = true;
let isAdmin = false;
```

### Special Types

Values that represent nothing or unknown:

```javascript
let empty = null; // explicitly empty
let notDefined = undefined; // not assigned yet
```

## Type Checking

See what type a value is:

```javascript
typeof 42; // "number"
typeof "hello"; // "string"
typeof true; // "boolean"
typeof undefined; // "undefined"
```

## Why Types Matter

Types determine what operations you can do:

```javascript
"5" + 3; // "53" (string concatenation)
5 + 3; // 8 (number addition)

const arr = [1, 2, 3];
arr.length; // 3 (arrays have length)
```

Get types right, and your code works. Get them wrong, and you spend hours debugging.
