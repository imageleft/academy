---
title: React and Frontend
code: CS 104
track: programming
week: 4
type: structured
layout: lesson
---

React is a JavaScript library for building user interfaces. It lets you break a page into small, reusable pieces called components. Instead of manipulating the HTML directly, you describe what the UI should look like and React handles the updates.

## Your First Component

A component is a function that returns HTML-like syntax called JSX:

```jsx
function Greeting() {
  return <h1>Hello, imageleft</h1>;
}
```

To use it inside another component:

```jsx
function App() {
  return (
    <div>
      <Greeting />
    </div>
  );
}
```

## JSX Rules

JSX looks like HTML but has a few differences:

```jsx
// Use className instead of class
<div className="container">...</div>

// Self-close tags that have no children
<img src="photo.jpg" alt="description" />
<input type="text" />

// Wrap multiple elements in one parent
function App() {
  return (
    <div>
      <h1>Title</h1>
      <p>Paragraph</p>
    </div>
  );
}

// Or use a Fragment to avoid adding a div to the DOM
function App() {
  return (
    <>
      <h1>Title</h1>
      <p>Paragraph</p>
    </>
  );
}
```

## Props

Props are how you pass data into a component:

```jsx
function UserCard({ name, role }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{role}</p>
    </div>
  );
}

// Using it:
<UserCard name="Alice" role="Developer" />
<UserCard name="Bob" role="Designer" />
```

Props flow one way — from parent to child. A child component cannot change its own props.

## State with useState

State is data that can change. When state changes, React re-renders the component:

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={() => setCount(count - 1)}>Remove</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
```

`useState(0)` sets the initial value to `0`.
`count` is the current value.
`setCount` is the function you call to update it.

## Handling Events

```jsx
function Form() {
  const [name, setName] = useState('');

  function handleSubmit() {
    alert(`Hello, ${name}`);
  }

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
```

## Rendering Lists

Use `.map()` to render an array of items. Every item needs a unique `key`:

```jsx
const tracks = ['Programming', 'Sales', 'Marketing', 'Writing', 'Psychology'];

function TrackList() {
  return (
    <ul>
      {tracks.map((track) => (
        <li key={track}>{track}</li>
      ))}
    </ul>
  );
}
```

## Conditional Rendering

Show or hide content based on state or props:

```jsx
function StatusBadge({ isActive }) {
  return (
    <span>
      {isActive ? 'Active' : 'Inactive'}
    </span>
  );
}

// Render something only if a condition is true
function AdminPanel({ isAdmin }) {
  return (
    <div>
      <p>Dashboard</p>
      {isAdmin && <button>Delete User</button>}
    </div>
  );
}
```

## Fetching Data with useEffect

```jsx
import { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.example.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []); // empty array = run once when component mounts

  if (loading) return <p>Loading...</p>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

## Component Hierarchy

Break your UI into a tree of components:

```
App
├── Header
│   └── Nav
├── Main
│   ├── HeroSection
│   └── TrackList
│       └── TrackCard (repeated)
└── Footer
```

Each component should do one thing. If a component is getting long, split it.

## Quick Reference

| Concept | Syntax |
|---------|--------|
| Create component | `function Name() { return <div /> }` |
| Pass props | `<Component name="value" />` |
| Read props | `function C({ name }) { ... }` |
| Add state | `const [val, setVal] = useState(default)` |
| Update state | `setVal(newValue)` |
| Handle click | `<button onClick={fn}>` |
| Handle input | `onChange={(e) => setVal(e.target.value)}` |
| Render list | `items.map((item) => <li key={item.id}>)` |
| Conditional | `{condition && <Component />}` |
| Side effects | `useEffect(() => { ... }, [deps])` |