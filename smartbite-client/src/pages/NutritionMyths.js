// src/pages/NutritionMyths.js
import React from "react";

const myths = [
  {
    myth: "Carbs make you fat.",
    fact: "Whole carbs are essential; only refined carbs are harmful in excess.",
  },
  {
    myth: "Skipping meals helps weight loss.",
    fact: "Skipping meals can slow metabolism and lead to overeating later.",
  },
  {
    myth: "Fat is bad for you.",
    fact: "Healthy fats (like avocado, nuts, olive oil) are vital for your body.",
  },
];

export default function NutritionMyths() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
        Common Nutrition Myths
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {myths.map((m, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold text-red-500 mb-2">
              Myth: {m.myth}
            </h3>
            <p className="text-green-700">Fact: {m.fact}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
