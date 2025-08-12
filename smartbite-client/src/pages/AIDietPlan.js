//import sampleMealPlans from "../pages/samplemeal";
import React, { useState } from "react";
import "./AIDietPlan.css";

const mealPlans = {
  "Lose 2 kg|Non-Vegetarian": {
    breakfast: "Boiled eggs (2), whole grain toast, and orange juice",
    lunch: "Grilled chicken, salad, and quinoa",
    dinner: "Baked fish, sautéed veggies, brown rice",
    totalCalories: 1500,
  },
  "Lose 2 kg|Vegetarian": {
    breakfast: "Oats, chia seeds, and almond milk",
    lunch: "Paneer wrap with veggies",
    dinner: "Mixed dal, multigrain roti, spinach salad",
    totalCalories: 1400,
  },
  "Lose 5 kg|Diabetic-Friendly": {
    breakfast: "Unsweetened oatmeal with walnuts and berries",
    lunch: "Stir-fried tofu, brown rice, and kale salad",
    dinner: "Grilled veggies, chickpea curry, low-carb roti",
    totalCalories: 1300,
  },
  "Lose 10 kg|Non-Vegetarian": {
    breakfast: "Scrambled eggs with veggies and green tea",
    lunch: "Chicken salad with olive oil dressing",
    dinner: "Turkey breast, quinoa, roasted vegetables",
    totalCalories: 1100,
  },
  "Lose 10 kg|Vegetarian": {
    breakfast: "Banana smoothie with flaxseed",
    lunch: "Rajma curry, brown rice, cucumber salad",
    dinner: "Veg soup, sautéed greens, roti",
    totalCalories: 1200,
  },
};

const AIDietPlan = () => {
  const [goal, setGoal] = useState("");
  const [diet, setDiet] = useState("");
  const [plan, setPlan] = useState(null);

  const handleGeneratePlan = () => {
    const key = `${goal}|${diet}`;
    setPlan(mealPlans[key]);
  };

  return (
    <div className="ai-diet-wrapper">
      <div className="ai-diet-box">
        <h2>AI-Powered Diet Plan Generator</h2>
        <p>Select your goal and dietary preference:</p>

        <div className="dropdown-group">
          <select value={goal} onChange={(e) => setGoal(e.target.value)}>
            <option value="">-- Select Goal --</option>
            <option value="Lose 2 kg">Lose 2 kg</option>
            <option value="Lose 5 kg">Lose 5 kg</option>
            <option value="Lose 10 kg">Lose 10 kg</option>
          </select>

          <select value={diet} onChange={(e) => setDiet(e.target.value)}>
            <option value="">-- Select Preference --</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="Non-Vegetarian">Non-Vegetarian</option>
            <option value="Diabetic-Friendly">Diabetic-Friendly</option>
          </select>
        </div>

        <button onClick={handleGeneratePlan}>Generate Plan</button>

        {plan && (
          <div className="plan-result">
            <h3>Your Personalized Meal Plan</h3>
            <p>
              <strong>Breakfast:</strong> {plan.breakfast}
            </p>
            <p>
              <strong>Lunch:</strong> {plan.lunch}
            </p>
            <p>
              <strong>Dinner:</strong> {plan.dinner}
            </p>
            <p>
              <strong>Total Daily Calories:</strong> {plan.totalCalories}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIDietPlan;

/*
import "./AIDietPlan.css";
import React, { useState } from "react";

const mealPlans = {
  "Lose 2 kg - Non-Vegetarian": {
    breakfast:
      "Boiled eggs (2), whole grain toast, and a glass of orange juice",
    lunch: "Grilled chicken breast, mixed greens salad, quinoa",
    dinner: "Baked fish with sautéed vegetables and brown rice",
    totalCalories: 1500,
  },
  "Lose 2 kg - Diabetic-Friendly": {
    breakfast: "Oats with skim milk, chia seeds, and apple slices",
    lunch: "Grilled tofu with mixed vegetables and whole wheat roti",
    dinner: "Stir-fried paneer, broccoli, and low-carb salad",
    totalCalories: 1300,
  },
  "Lose 10 kg - Vegetarian": {
    breakfast: "Smoothie with banana, spinach, almond milk, and flaxseed",
    lunch: "Rajma curry with brown rice and cucumber salad",
    dinner: "Vegetable soup, multigrain roti, and sautéed greens",
    totalCalories: 1200,
  },
  "Lose 10 kg - Non-Vegetarian": {
    breakfast: "Scrambled eggs with veggies and green tea",
    lunch: "Grilled chicken salad with olive oil dressing",
    dinner: "Turkey breast with quinoa and roasted veggies",
    totalCalories: 1100,
  },
};

const AIDietPlan = () => {
  const [selectedGoal, setSelectedGoal] = useState("");
  const [plan, setPlan] = useState(null);

  const handleSelectChange = (e) => {
    const goal = e.target.value;
    setSelectedGoal(goal);
    setPlan(mealPlans[goal]);
  };

  return (
    <div className="ai-diet-container">
      <h2>AI-Powered Diet Plan Generator</h2>
      <p>Select your goal and dietary preference:</p>
      <select value={selectedGoal} onChange={handleSelectChange}>
        <option value="">-- Select Goal --</option>
        {Object.keys(mealPlans).map((goal, index) => (
          <option key={index} value={goal}>
            {goal}
          </option>
        ))}
      </select>

      {plan && (
        <div className="diet-plan-box">
          <h3>Your Personalized Meal Plan</h3>
          <p>
            <strong>Breakfast:</strong> {plan.breakfast}
          </p>
          <p>
            <strong>Lunch:</strong> {plan.lunch}
          </p>
          <p>
            <strong>Dinner:</strong> {plan.dinner}
          </p>
          <p>
            <strong>Total Daily Calories:</strong> {plan.totalCalories}
          </p>
        </div>
      )}
    </div>
  );
};

export default AIDietPlan;
*/
