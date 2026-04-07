---
title: AI Integration
code: CS 109
track: programming
week: 9
type: mindset
layout: lesson
---

AI tools are now a part of software development. The developers who use them well ship faster, debug faster, and build things that previously required larger teams. This is a guide to integrating AI into your workflow.

## Using AI in Development

### Cursor IDE

Cursor is a code editor built on top of VSCode with AI built-in:

```
Tab         → accept AI autocomplete suggestion
Ctrl+K      → edit selected code with a prompt
Ctrl+L      → open chat panel for questions
Ctrl+I      → inline edit the current file
```

**Write effective prompts in Cursor:**

```
// Weak prompt
// fix this

// Strong prompt
// This function should validate an email address.
// It currently passes for invalid formats like "user@".
// Fix the regex to require a valid domain with at least one dot.
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+$/.test(email);
}
```

Context matters. The more specific your prompt, the more useful the output.

## OpenAI API

```bash
npm install openai
```

```javascript
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function generateText(prompt) {
  const response = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      {
        role: 'system',
        content: 'You are a helpful assistant for a coding academy.',
      },
      {
        role: 'user',
        content: prompt,
      },
    ],
    max_tokens: 500,
  });

  return response.choices[0].message.content;
}

const result = await generateText('Explain what a REST API is in simple terms');
console.log(result);
```

## Calling the Anthropic (Claude) API

```bash
npm install @anthropic-ai/sdk
```

```javascript
import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

async function askClaude(question) {
  const message = await client.messages.create({
    model: 'claude-opus-4-5',
    max_tokens: 1024,
    messages: [
      {
        role: 'user',
        content: question,
      },
    ],
  });

  return message.content[0].text;
}

const answer = await askClaude('What is the difference between SQL and NoSQL?');
console.log(answer);
```

## Using Google Gemini

```bash
npm install @google/generative-ai
```

```javascript
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function generateWithGemini(prompt) {
  const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
  const result = await model.generateContent(prompt);
  return result.response.text();
}
```

## Prompt Engineering Basics

The quality of AI output depends directly on the quality of your prompt.

**Be specific about format:**
```javascript
const prompt = `
Analyze this JavaScript function and return a JSON object with:
- "issues": array of bugs or problems found
- "suggestions": array of improvements
- "score": quality score from 1-10

Function to analyze:
${functionCode}

Return only valid JSON, no other text.
`;
```

**Provide context:**
```javascript
const systemPrompt = `
You are a code reviewer for a team of junior developers.
- Keep explanations simple and clear
- Always explain why, not just what
- Give examples when possible
`;
```

**Chain prompts for complex tasks:**
```javascript
// Step 1: analyse
const analysis = await askAI(`Analyse this code for bugs: ${code}`);

// Step 2: fix
const fixed = await askAI(`Fix the bugs identified here: ${analysis}`);

// Step 3: explain
const explanation = await askAI(`Explain the changes made: ${fixed}`);
```

## Integrating AI into a Next.js App

A simple AI-powered API route:

```javascript
// app/api/explain/route.js
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(request) {
  const { code } = await request.json();

  const response = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      {
        role: 'user',
        content: `Explain this code in simple terms for a beginner:\n\n${code}`,
      },
    ],
  });

  return Response.json({
    explanation: response.choices[0].message.content,
  });
}
```

Frontend call:

```javascript
async function explainCode(code) {
  const res = await fetch('/api/explain', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ code }),
  });
  const { explanation } = await res.json();
  return explanation;
}
```

## What AI Is Good At vs What It Is Not

| Good at | Not good at |
|---------|-------------|
| Boilerplate and repetitive code | Understanding your full codebase |
| Explaining concepts | Making architectural decisions |
| Writing tests for clear requirements | Knowing which edge cases matter |
| Refactoring isolated functions | Debugging complex state across files |
| Generating documentation | Knowing your users or business context |

Use AI to move faster on the things it does well.
Use your judgment for the things it does not.

## Practical Workflow

```
1. Write a comment describing what the function should do
2. Let AI generate the first draft
3. Read it — understand every line before you keep it
4. Test it with real inputs
5. Refine with follow-up prompts if needed
```

The goal is never to accept AI output blindly.

The goal is to use it as a starting point that you then understand, verify, and own.