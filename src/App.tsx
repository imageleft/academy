import React from "react";
import "./index.css";
import { Button } from "./components/ui/button";

export function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-slate-900">
            Web Development for Beginners
          </h1>
          <p className="text-slate-600 mt-2 text-lg">
            Interactive exercises for HTML, CSS, and JavaScript
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">
            Lessons
          </h2>
          <p className="text-slate-600 mb-6">
            Start with any exercise below. Each one covers fundamental web
            development concepts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ExerciseCard
            title="Headings"
            description="Learn HTML heading hierarchy (h1-h6) and semantic markup"
            href="/web-dev-for-beginners/headings.html"
            icon="📝"
          />
          <ExerciseCard
            title="Links"
            description="Master HTML links, navigation, and anchor elements"
            href="/web-dev-for-beginners/links.html"
            icon="🔗"
          />
          <ExerciseCard
            title="Tables"
            description="Build structured data with tables, rows, and columns"
            href="/web-dev-for-beginners/tables.html"
            icon="📊"
          />
        </div>
      </main>
    </div>
  );
}

function ExerciseCard({
  title,
  description,
  href,
  icon,
}: {
  title: string;
  description: string;
  href: string;
  icon: string;
}) {
  return (
    <a href={href} className="group">
      <div className="bg-white rounded-lg shadow hover:shadow-lg transition-all p-6 h-full border border-slate-200 group-hover:border-slate-300">
        <div className="text-4xl mb-4">{icon}</div>
        <h2 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
          {title}
        </h2>
        <p className="text-slate-600 mb-4 text-sm">{description}</p>
        <Button variant="outline" size="sm" className="mt-auto">
          Start Exercise →
        </Button>
      </div>
    </a>
  );
}
