---
title: Node.js and Async Programming
code: CS 106
track: programming
week: 6
type: structured
layout: lesson
---

Node.js lets you run JavaScript on the server. Unlike a browser, where JavaScript runs one interaction at a time, Node.js is designed to handle many things simultaneously without blocking — this is called asynchronous programming.

## Why Async Matters

Most server operations take time:

- Reading a file from disk
- Querying a database
- Fetching data from another API
- Sending an email

Synchronous code waits for each operation to finish before moving to the next. Asynchronous code starts the operation and moves on, coming back when the result is ready. This is what makes Node.js fast.

## Promises

A Promise represents a value that will be available in the future. It exists in one of three states:

| State | Meaning |
|-------|---------|
| **Pending** | The operation is in progress |
| **Fulfilled** | The operation completed successfully |
| **Rejected** | The operation failed |

```javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Data loaded');
  }, 2000);
});

promise
  .then((result) => console.log(result))   // runs on success
  .catch((error) => console.error(error))  // runs on failure
  .finally(() => console.log('Done'));     // always runs
```

## Async / Await

`async/await` is the modern way to write asynchronous code. Under the hood it still uses Promises, but the syntax is cleaner and easier to read:

```javascript
async function fetchUser(id) {
  try {
    const response = await fetch(`https://api.example.com/users/${id}`);
    const user = await response.json();
    console.log(user);
    return user;
  } catch (error) {
    console.error('Failed to fetch user:', error);
  }
}

fetchUser(1);
```

`await` pauses execution inside the function until the Promise resolves.
`async` marks a function as one that contains `await`.
Always wrap `await` calls in `try/catch` to handle errors.

## Common Async Patterns

### Multiple requests in parallel

```javascript
async function loadDashboard() {
  // These run at the same time, not one after another
  const [users, products, orders] = await Promise.all([
    fetch('/api/users').then(r => r.json()),
    fetch('/api/products').then(r => r.json()),
    fetch('/api/orders').then(r => r.json()),
  ]);

  return { users, products, orders };
}
```

### Reading files

```javascript
const fs = require('fs').promises;

async function readConfig() {
  try {
    const content = await fs.readFile('config.json', 'utf8');
    return JSON.parse(content);
  } catch (error) {
    console.error('Could not read config:', error);
  }
}
```

## Building a Simple HTTP Server

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'Hello from Node.js' }));
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
```

## Express — A Minimal Web Framework

Express makes building APIs much simpler:

```javascript
const express = require('express');
const app = express();

app.use(express.json()); // parse incoming JSON

// GET request
app.get('/users', async (req, res) => {
  const users = await getUsers(); // your database function
  res.json(users);
});

// POST request
app.post('/users', async (req, res) => {
  const { name, email } = req.body;
  const user = await createUser({ name, email });
  res.status(201).json(user);
});

// DELETE request
app.delete('/users/:id', async (req, res) => {
  await deleteUser(req.params.id);
  res.status(204).send();
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

## Environment Variables

Never hardcode secrets. Use environment variables:

```javascript
// .env file (never commit this)
// DATABASE_URL=postgres://...
// API_KEY=abc123

require('dotenv').config();

const dbUrl = process.env.DATABASE_URL;
const apiKey = process.env.API_KEY;
```

```bash
npm install dotenv
```

Add `.env` to your `.gitignore`.

## Logging

Good logging is essential for debugging in production:

```javascript
// Basic — fine for small projects
console.log('Server started');
console.error('Something failed:', error);
console.table(users); // renders arrays/objects as a table

// For larger projects, use a logging library like Winston
const winston = require('winston');
const logger = winston.createLogger({
  level: 'info',
  transports: [new winston.transports.Console()],
});

logger.info('User created', { userId: 123 });
logger.error('Database connection failed', { error: err.message });
```

Good log messages include:
- What happened
- Relevant data (user ID, request path)
- When it happened (timestamps)

## Common npm Commands

```bash
npm init -y              # create a new package.json
npm install express      # install a package
npm install -D nodemon   # install a dev-only package
npm run dev              # run your dev script
npx nodemon index.js     # restart server automatically on file changes
```

## Project Structure

A clean Node/Express project looks like:

```
my-api/
├── src/
│   ├── routes/
│   │   ├── users.js
│   │   └── products.js
│   ├── controllers/
│   ├── middleware/
│   └── index.js
├── .env
├── .gitignore
└── package.json
```

Keep routes thin. Business logic goes in controllers. Shared checks (authentication, validation) go in middleware.
