const sampleMealPlans = [
  {
    goal: "Lose 2 kg",
    preference: "Non-Vegetarian",
    calories: "1600 kcal",
    meals: [
      { type: "Breakfast", item: "Boiled Eggs with Toast", kcal: 250 },
      {
        type: "Lunch",
        item: "Grilled Chicken with Quinoa & Veggies",
        kcal: 550,
      },
      { type: "Snack", item: "Greek Yogurt with Honey", kcal: 200 },
      { type: "Dinner", item: "Fish Curry with Brown Rice", kcal: 550 },
    ],
    note: "Balanced with lean protein, low-fat dairy, and whole grains",
  },
  {
    goal: "Lose 5 kg",
    preference: "Diabetic-Friendly",
    calories: "1500 kcal",
    meals: [
      {
        type: "Breakfast",
        item: "Oats with Cinnamon & Apple (No sugar)",
        kcal: 300,
      },
      {
        type: "Lunch",
        item: "Grilled Tofu Salad with Olive Oil Dressing",
        kcal: 400,
      },
      { type: "Snack", item: "Roasted Chickpeas", kcal: 150 },
      { type: "Dinner", item: "Lentil Soup + Steamed Veggies", kcal: 550 },
    ],
    note: "Low-GI foods, no refined sugar, complex carbs",
  },
  {
    goal: "Lose 10 kg",
    preference: "Vegetarian",
    calories: "1300 kcal",
    meals: [
      {
        type: "Breakfast",
        item: "Smoothie (Spinach, Banana, Almond Milk, Flaxseeds)",
        kcal: 250,
      },
      {
        type: "Lunch",
        item: "Mixed Vegetable Stir-Fry + Brown Rice",
        kcal: 450,
      },
      { type: "Snack", item: "Apple + Peanut Butter", kcal: 200 },
      {
        type: "Dinner",
        item: "Moong Dal + Multigrain Roti + Cucumber Salad",
        kcal: 400,
      },
    ],
    note: "High-fiber, plant protein focused",
  },
  {
    goal: "Maintain Weight",
    preference: "Non-Vegetarian",
    calories: "2000 kcal",
    meals: [
      {
        type: "Breakfast",
        item: "Scrambled Eggs with Avocado Toast",
        kcal: 400,
      },
      { type: "Lunch", item: "Chicken Biryani + Raita", kcal: 700 },
      { type: "Snack", item: "Boiled Eggs + Fruit", kcal: 300 },
      { type: "Dinner", item: "Grilled Chicken + Roasted Veggies", kcal: 600 },
    ],
    note: "Satisfying balance of macros for weight maintenance",
  },
  {
    goal: "Gain Weight",
    preference: "Vegetarian",
    calories: "2500 kcal",
    meals: [
      {
        type: "Breakfast",
        item: "Banana + Peanut Butter Toast + Milkshake",
        kcal: 600,
      },
      {
        type: "Lunch",
        item: "Rajma-Chawal + Paneer Bhurji + Salad",
        kcal: 750,
      },
      { type: "Snack", item: "Trail Mix + Banana", kcal: 350 },
      {
        type: "Dinner",
        item: "Veg Pasta with Cheese + Garlic Bread",
        kcal: 800,
      },
    ],
    note: "Calorie-dense, protein-rich vegetarian foods",
  },
];

export default sampleMealPlans;
