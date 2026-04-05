---
title: Understanding Operators
code: CS 101
track: programming
week: 1
type: structured
layout: lesson
---

Operators are the symbols that let you perform actions on variables and values. They're the foundation of computation.

## Arithmetic Operators

The basic operators you use every day:

| Operator | Example  | Result        |
| -------- | -------- | ------------- |
| `+`      | 5 + 3    | 8             |
| `-`      | 5 - 3    | 2             |
| `*`      | 5 \* 3   | 15            |
| `/`      | 6 / 2    | 3             |
| `%`      | 5 % 2    | 1 (remainder) |
| `**`     | 2 \*\* 3 | 8 (exponent)  |

## Assignment Operators

These assign values to variables:

```javascript
let x = 10; // assign 10 to x
x += 5; // x = x + 5 (now 15)
x -= 3; // x = x - 3 (now 12)
x *= 2; // x = x * 2 (now 24)
```

## Comparison Operators

These compare values and return true or false:

```javascript
5 > 3; // true
5 < 3; // false
5 == 5; // true
5 != 3; // true
5 >= 5; // true
5 <= 3; // false
```

## Logical Operators

Combine conditions:

```javascript
true && true; // AND - returns true
true || false; // OR - returns true
!true; // NOT - returns false
```

Remember: operators are just tools. The more you practice with them, the more natural they become.
