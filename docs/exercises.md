---
layout: page
title: Exercises
permalink: /exercises/
---

<div class="exercises-container">
  <h1>Interactive HTML Exercises</h1>
  <p class="intro-text">Practice what you've learned with these interactive exercises. Each exercise includes:</p>
  
  <ul class="features">
    <li>👁️ <strong>Preview</strong>: See the HTML rendered live</li>
    <li>&lt;/&gt; <strong>Code</strong>: View and copy the source code</li>
    <li>📝 <strong:>Instructions</strong: Learn what each exercise teaches</li>
  </ul>

  <h2>HTML Exercises</h2>

  <div class="exercises-grid">
    <a href="./headings/" class="exercise-card">
      <h3>📝 Headings</h3>
      <p>Use HTML heading tags (<code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code>) and practice styling them with colors and alignment.</p>
      <div class="topics">
        <span>Heading hierarchy</span>
        <span>CSS colors</span>
        <span>Text alignment</span>
      </div>
      <div class="cta">Start Exercise →</div>
    </a>

    <a href="./links/" class="exercise-card">
      <h3>🔗 Links</h3>
      <p>Master the <code>&lt;a&gt;</code> tag to create hyperlinks, internal navigation, and understand link attributes.</p>
      <div class="topics">
        <span>Anchor tags</span>
        <span>Navigation</span>
        <span>Link attributes</span>
      </div>
      <div class="cta">Start Exercise →</div>
    </a>

    <a href="./tables/" class="exercise-card">
      <h3>📊 Tables</h3>
      <p>Build structured data with table tags, understand rows and columns, and style tables with CSS.</p>
      <div class="topics">
        <span>Table structure</span>
        <span>Rows & columns</span>
        <span>Table styling</span>
      </div>
      <div class="cta">Start Exercise →</div>
    </a>

    <a href="./forms/stage1/" class="exercise-card">
      <h3>📋 Forms</h3>
      <p>Build interactive forms with input fields, labels, buttons, and validation for user input.</p>
      <div class="topics">
        <span>Form elements</span>
        <span>Input types</span>
        <span>Form submission</span>
      </div>
      <div class="cta">Start Exercise →</div>
    </a>

  </div>
</div>

<style>
  .exercises-container {
    max-width: 900px;
    margin: 0 auto;
    padding: 2rem 1rem;
  }

  .exercises-container h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: #1f2937;
  }

  .intro-text {
    font-size: 1.1rem;
    color: #666;
    margin-bottom: 1.5rem;
  }

  .features {
    background: #f9fafb;
    border-left: 4px solid #6366f1;
    padding: 1.5rem;
    margin-bottom: 3rem;
    border-radius: 0.5rem;
    list-style: none;
  }

  .features li {
    margin-bottom: 0.75rem;
    font-size: 1rem;
  }

  .features li:last-child {
    margin-bottom: 0;
  }

  .exercises-container h2 {
    font-size: 1.75rem;
    font-weight: 700;
    margin-top: 2rem;
    margin-bottom: 1.5rem;
    color: #1f2937;
  }

  .exercises-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
  }

  .exercise-card {
    display: flex;
    flex-direction: column;
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 0.75rem;
    padding: 1.5rem;
    text-decoration: none;
    color: #1f2937;
    transition: all 0.3s ease;
  }

  .exercise-card:hover {
    border-color: #6366f1;
    box-shadow: 0 10px 25px rgba(99, 102, 241, 0.1);
    transform: translateY(-2px);
  }

  .exercise-card h3 {
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 0.75rem;
  }

  .exercise-card p {
    color: #666;
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 1rem;
    flex: 1;
  }

  .exercise-card code {
    background: #f3f4f6;
    padding: 0.125rem 0.375rem;
    border-radius: 0.25rem;
    font-family: monospace;
    color: #dc2626;
  }

  .topics {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  .topics span {
    display: inline-block;
    background: #f0f0f0;
    color: #666;
    padding: 0.375rem 0.75rem;
    border-radius: 0.5rem;
    font-size: 0.8rem;
    font-weight: 500;
  }

  .cta {
    color: #6366f1;
    font-weight: 600;
    font-size: 0.95rem;
  }

  @media (max-width: 768px) {
    .exercises-grid {
      grid-template-columns: 1fr;
    }
  }
</style>

**Topics covered:**

- Creating hyperlinks with `href`
- Target attributes (`_blank`, `_self`)
- Linking to different pages and sections
- Embedding videos with iframes

### [Tables Exercise](./tables/)

Build structured data tables using `<table>`, `<tr>`, `<td>`, and related elements.

**Topics covered:**

- Table structure (`<thead>`, `<tbody>`, `<tfoot>`)
- Table cells and rows
- Table styling and borders
- Responsive tables

## Form Exercises - The Treasure Hunt

A series of progressively harder form exercises in an interactive "Treasure Hunt" game!

### [Form Stage 1: Basic Structure](./forms/stage1/)

Learn the fundamentals of HTML forms.

- Basic form element
- Text input fields
- Submit buttons
- **Challenge**: Answer the clue and find the tag name!

### [Form Stage 2: Input Types](./forms/stage2/)

Explore different input types and form controls.

- Email and password inputs
- Checkboxes and radio buttons
- Select dropdowns
- **Challenge**: Continue the treasure hunt!

### [Form Stage 3: Advanced Features](./forms/stage3/)

Master advanced form features and validation.

- Form validation attributes
- Required fields
- Pattern matching
- Accessibility attributes
- **Challenge**: Final clue before the ultimate form!

### [Form Final: Complete Project](./forms/final/)

Put it all together with a complete, real-world form.

- Multi-element form integration
- Accessible form design
- Proper labeling and grouping
- Form styling
- **Achievement**: Complete the treasure hunt! 🎉

## Tips for Using These Exercises

1. **Start with Preview** - See what the finished result looks like
2. **View the Code** - Understand how it's built by checking the Code tab
3. **Read Instructions** - Each exercise has detailed learning objectives
4. **Take Notes** - Copy code snippets for reference
5. **Modify & Experiment** - Try changing values and see what happens
6. **Test in Real Browser** - Open individual exercises in new tabs for full interactivity

---

## Getting Help

If you get stuck:

- Review the instructions section for each exercise
- Check the Code tab to see the source HTML
- Re-read the main documentation sections
- Try modifying the code and see what changes
- Experiment with different HTML tags and attributes

---

## Challenge Yourself

After completing exercises:

- **Combine what you learned** - Create your own HTML page using multiple concepts
- **Fix the code** - Each exercise has intentional issues to fix with CSS
- **Extend the design** - Add more content or styling
- **Create variations** - Make similar pages with different content
- **Build projects** - Use these skills to create real websites!
