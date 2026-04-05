---
layout: default
title: Tracks
permalink: /tracks/
---

<div class="tracks-container">
  <h1 class="tracks-title">Learning Tracks</h1>
  <p class="tracks-intro">Choose your path. Master one domain at a time.</p>

  <div class="tracks-grid">
    {% for track in site.tracks %}
      {% assign lesson_count = site.lessons | where: "track", track.slug | size %}
      
      <a href="{{ track.url }}" class="track-card">
        <div class="card-header">
          <h2 class="card-title">{{ track.title }}</h2>
          <span class="level-badge">{{ track.level }}</span>
        </div>

        <p class="card-tagline">{{ track.tagline }}</p>

        <div class="card-outcomes">
          {% for outcome in track.outcomes %}
            {% if forloop.index <= 2 %}
              <span class="outcome-tag">{{ outcome }}</span>
            {% endif %}
          {% endfor %}
          {% if track.outcomes.size > 2 %}
            <span class="outcome-tag more">+{{ track.outcomes.size | minus: 2 }}</span>
          {% endif %}
        </div>

        <div class="card-footer">
          <span class="lesson-count">{{ lesson_count }} lesson{{ lesson_count | pluralize }}</span>
          <span class="arrow">→</span>
        </div>
      </a>
    {% endfor %}

  </div>
</div>

<style>
  .tracks-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }

  .tracks-title {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    text-align: center;
    color: #1f2937;
  }

  .tracks-intro {
    font-size: 1.1rem;
    color: #666;
    text-align: center;
    margin-bottom: 3rem;
  }

  .tracks-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }

  .track-card {
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 0.75rem;
    padding: 1.5rem;
    text-decoration: none;
    color: #1f2937;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .track-card:hover {
    border-color: #6366f1;
    box-shadow: 0 10px 25px rgba(99, 102, 241, 0.1);
    transform: translateY(-2px);
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .card-title {
    font-size: 1.25rem;
    font-weight: 700;
    margin: 0;
    flex: 1;
    line-height: 1.3;
  }

  .level-badge {
    background: #e0e7ff;
    color: #4f46e5;
    padding: 0.375rem 0.75rem;
    border-radius: 0.5rem;
    font-size: 0.75rem;
    font-weight: 600;
    white-space: nowrap;
    text-transform: capitalize;
  }

  .card-tagline {
    color: #666;
    font-size: 0.95rem;
    line-height: 1.5;
    margin-bottom: 1rem;
  }

  .card-outcomes {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1rem;
    flex: 1;
  }

  .outcome-tag {
    background: #f3f4f6;
    color: #374151;
    padding: 0.375rem 0.75rem;
    border-radius: 0.5rem;
    font-size: 0.8rem;
    border: 1px solid #e5e7eb;
  }

  .outcome-tag.more {
    background: #e5e7eb;
    color: #666;
    font-weight: 600;
  }

  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 1rem;
    border-top: 1px solid #f0f0f0;
    color: #666;
    font-size: 0.9rem;
  }

  .lesson-count {
    font-weight: 500;
  }

  .arrow {
    color: #6366f1;
    font-weight: 700;
  }

  .track-card:hover .arrow {
    transform: translateX(4px);
    transition: transform 0.2s;
  }

  @media (max-width: 768px) {
    .tracks-title {
      font-size: 2rem;
    }

    .tracks-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
