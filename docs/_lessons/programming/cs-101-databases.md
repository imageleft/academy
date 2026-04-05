---
title: Databases and APIs
code: CS 107
track: programming
week: 7
type: structured
layout: lesson
---

Every application that stores data needs a database. The database is the core of the system — everything else is built around reading from and writing to it correctly.

## Types of Databases

| Type | Examples | Good for |
|------|----------|----------|
| **Relational (SQL)** | PostgreSQL, MySQL, SQLite | Structured data with clear relationships |
| **Document (NoSQL)** | MongoDB, Firestore | Flexible schemas, nested data |
| **Key-Value** | Redis | Caching, sessions, fast lookups |

For most applications you are building, start with a relational database. It forces good data design habits.

## SQL Basics

SQL (Structured Query Language) is how you talk to a relational database:

```sql
-- Create a table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Insert a record
INSERT INTO users (name, email)
VALUES ('Alice', 'alice@example.com');

-- Read records
SELECT * FROM users;
SELECT name, email FROM users WHERE id = 1;
SELECT * FROM users ORDER BY created_at DESC LIMIT 10;

-- Update a record
UPDATE users SET name = 'Alice Updated' WHERE id = 1;

-- Delete a record
DELETE FROM users WHERE id = 1;
```

## Relationships

Databases store related data across multiple tables:

```sql
CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  body TEXT,
  user_id INT REFERENCES users(id),  -- foreign key
  created_at TIMESTAMP DEFAULT NOW()
);

-- Join tables to get related data
SELECT posts.title, users.name
FROM posts
JOIN users ON posts.user_id = users.id;
```

## Firebase — Backend as a Service

Firebase is a backend platform by Google that gives you a database, file storage, and authentication without managing a server. It is ideal for small to medium applications.

**Install and configure in a Next.js app:**

```bash
npm install firebase
```

Create `lib/firebase.ts` at the root of your project:

```typescript
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const googleProvider = new GoogleAuthProvider();

export { db, auth, googleProvider, storage };
```

Store all config values in `.env.local`, never hardcode them.

**Reading and writing with Firestore:**

```typescript
import { db } from '@/lib/firebase';
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
} from 'firebase/firestore';

// Add a document
async function createPost(title: string, body: string, userId: string) {
  const docRef = await addDoc(collection(db, 'posts'), {
    title,
    body,
    userId,
    createdAt: new Date(),
  });
  return docRef.id;
}

// Get all documents in a collection
async function getPosts() {
  const snapshot = await getDocs(collection(db, 'posts'));
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

// Query with filters
async function getPostsByUser(userId: string) {
  const q = query(
    collection(db, 'posts'),
    where('userId', '==', userId),
    orderBy('createdAt', 'desc')
  );
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

// Update a document
async function updatePost(postId: string, updates: object) {
  await updateDoc(doc(db, 'posts', postId), updates);
}

// Delete a document
async function deletePost(postId: string) {
  await deleteDoc(doc(db, 'posts', postId));
}
```

## REST API Design

A REST API is the interface between your database and your frontend. URLs represent resources, HTTP methods represent actions:

| Method | Path | Action |
|--------|------|--------|
| `GET` | `/api/users` | Get all users |
| `GET` | `/api/users/:id` | Get one user |
| `POST` | `/api/users` | Create a user |
| `PUT` | `/api/users/:id` | Replace a user |
| `PATCH` | `/api/users/:id` | Update part of a user |
| `DELETE` | `/api/users/:id` | Delete a user |

## HTTP Status Codes

Always return the right status code:

| Code | Meaning | When to use |
|------|---------|-------------|
| `200` | OK | Successful GET, PUT, PATCH |
| `201` | Created | Successful POST |
| `204` | No Content | Successful DELETE |
| `400` | Bad Request | Invalid input from client |
| `401` | Unauthorized | Not logged in |
| `403` | Forbidden | Logged in but not allowed |
| `404` | Not Found | Resource does not exist |
| `500` | Internal Server Error | Something broke on your end |

## Data Design Checklist

Before you build, answer these:

- What entities does the application need? (users, posts, orders…)
- How are they related to each other?
- What queries will the application run most often?
- What fields are required vs optional?
- What should be unique? (emails, usernames…)

Getting these answers before you write code saves significant time later.
