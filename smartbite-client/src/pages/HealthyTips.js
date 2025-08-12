// src/pages/HealthyTips.js
import React from "react";

const tips = [
  "Drink water before meals to aid digestion.",
  "Add more fiber-rich foods to your plate.",
  "Eat mindfully – avoid distractions while eating.",
  "Include a variety of colors in your meals.",
  "Don’t skip breakfast – it sets the tone for the day.",
];

export default function HealthyTips() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center text-orange-600 mb-6">
        Healthy Lifestyle Tips
      </h2>
      <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
        {tips.map((tip, i) => (
          <li
            key={i}
            className="bg-gray-50 p-3 rounded hover:bg-green-50 transition"
          >
            {tip}
          </li>
        ))}
      </ul>
    </div>
  );
}
