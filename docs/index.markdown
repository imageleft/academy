---
layout: home
title: imageleft - Academy
permalink: /
---

<div class="home-hero">
  <h1>Learning Paths</h1>
  <p>Programming, sales, marketing, writing, and psychology.</p>
</div>

<div class="home-sections">
  <section class="home-section tracks-section w-[80vw] m-auto">
    <div class="section-header">
      <h2>Academy</h2>
      <p>Comprehensive lessons and outcomes</p>
    </div>

    <div class="cards-grid">
      {% for track in site.tracks %}
        {% assign lesson_count = site.lessons | where: "track", track.slug | size %}
        <a href="{{ track.url | relative_url}}" class="card">

          <div class="card-badge">{{ track.level }}</div>
          <h3>{{ track.title }}</h3>
          <p class="card-tagline">{{ track.tagline }}</p>
          <div class="card-meta">
            <span class="badge-small">{{ lesson_count }} lessons</span>
            <span class="badge-small">{{ track.weeks }} weeks</span>
          </div>
          <div class="card-footer">Explore →</div>
        </a>
      {% endfor %}
    </div>

  </section>
</div>

<style>
  .home-hero {
    text-align: center;
    padding: 4rem 1rem;
    background: linear-gradient(135deg, #000 0%, #2c04bd55 100%);
    width: 80vw;
    margin: 2rem auto;
    color: white;
    border-radius: 0.75rem;
    margin-bottom: 4rem;
  }

  .home-hero h1 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  .home-hero p {
    font-size: 1.2rem;
    opacity: 0.95;
    max-width: 600px;
    margin: 0 auto;
  }

  .home-sections {
    max-width: 1200px;
    margin: 0 auto;
  }

  .home-section {
    margin-bottom: 4rem;
  }

  .section-header {
    margin-bottom: 2rem;
  }

  .section-header h2 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: #1f2937;
  }

  .section-header p {
    font-size: 1.1rem;
    color: #666;
  }

  .cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 2rem;
  }

  .card {
    display: flex;
    flex-direction: column;
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 0.75rem;
    padding: 1.5rem;
    text-decoration: none;
    color: #1f2937;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .card:hover {
    border-color: #6366f1;
    box-shadow: 0 10px 30px rgba(99, 102, 241, 0.15);
    transform: translateY(-4px);
  }

  .card-badge {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: #e0e7ff;
    color: #4f46e5;
    padding: 0.375rem 0.75rem;
    border-radius: 0.5rem;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: capitalize;
  }

  .card h3 {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.75rem;
    margin-top: 0.5rem;
  }

  .card-tagline {
    color: #666;
    font-size: 0.95rem;
    line-height: 1.5;
    margin-bottom: 1rem;
    flex: 1;
  }

  .card-meta {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
    margin-bottom: 1rem;
  }

  .badge-small {
    display: inline-block;
    background: #f3f4f6;
    color: #374151;
    padding: 0.375rem 0.75rem;
    border-radius: 0.5rem;
    font-size: 0.8rem;
    border: 1px solid #e5e7eb;
  }

  .card-footer {
    color: #6366f1;
    font-weight: 600;
    font-size: 0.95rem;
  }

  .card:hover .card-footer {
    transform: translateX(4px);
    transition: transform 0.2s;
  }

  @media (max-width: 768px) {
    .home-hero {
      padding: 2rem 1rem;
    }

    .home-hero h1 {
      font-size: 2rem;
    }

    .section-header h2 {
      font-size: 1.5rem;
    }

    .cards-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
