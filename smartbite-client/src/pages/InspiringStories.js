// src/pages/InspiringStories.js
import React from "react";

const stories = [
  {
    title: "How I lost 10kg in 3 months",
    summary:
      "With SmartBite’s guidance, I transformed my diet and felt confident again!",
    author: "Riya Sharma",
  },
  {
    title: "From junk food addict to clean eating",
    summary: "SmartBite helped me enjoy healthy food without feeling deprived.",
    author: "Vikram Patel",
  },
  {
    title: "Healing my PCOS through diet",
    summary:
      "Meal planning made me feel in control and improved my health drastically.",
    author: "Sneha Verma",
  },
];

export default function InspiringStories() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center text-red-600 mb-8">
        Inspiring Stories
      </h2>
      <div className="space-y-6">
        {stories.map((s, i) => (
          <div
            key={i}
            className="bg-white shadow-lg p-6 rounded-xl hover:bg-gray-50 transition"
          >
            <h3 className="text-xl font-semibold text-gray-800">{s.title}</h3>
            <p className="text-gray-600 mt-2">{s.summary}</p>
            <div className="text-sm text-gray-500 mt-3">– {s.author}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
