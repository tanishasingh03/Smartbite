// src/pages/CustomerReviews.js
import React from "react";

const reviews = [
  {
    name: "Aarav",
    comment:
      "SmartBite helped me stay on track with clean eating. The personalized meals are a game changer!",
    date: "May 2025",
  },
  {
    name: "Neha",
    comment:
      "Love the simplicity! I no longer struggle with planning my meals.",
    date: "April 2025",
  },
  {
    name: "Kabir",
    comment:
      "Was skeptical at first, but the meal suggestions matched my fitness goals perfectly.",
    date: "March 2025",
  },
];

export default function CustomerReviews() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-8">
        Customer Reviews
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition"
          >
            <p className="text-gray-700 italic">“{r.comment}”</p>
            <div className="mt-4 text-sm text-gray-500">
              — {r.name}, {r.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
