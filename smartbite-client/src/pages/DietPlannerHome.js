import React from "react";
import "./DietPlannerHome.css";
import { useNavigate } from "react-router-dom";

const DietPlannerHome = () => {
  const navigate = useNavigate();
  const name = localStorage.getItem("username") || "Friend";

  return (
    <div className="diet-home-container">
      <h1 className="main-heading">
        {name}, plan today for{" "}
        <span className="highlight">healthy tomorrow</span>
      </h1>

      <div className="options-container">
        <div className="option-card" onClick={() => navigate("/aiplan")}>
          <h2 className="clickable-title">👉 AI-Powered Diet Plan Generator</h2>
          <p>
            Get a personalized meal plan created by our AI based on your
            profile, preferences, and goals.
          </p>
        </div>

        <div className="option-card" onClick={() => navigate("/goaltracking")}>
          <h2 className="clickable-title">
            🎯 Goal Tracking & Progress Prediction
          </h2>
          <p>
            Track your health goals and let our system predict your progress
            based on your habits.
          </p>
        </div>

        <div
          className="option-card"
          onClick={() => navigate("/calorieestimator")}
        >
          <h2 className="clickable-title">🧮 Calorie & Nutrition Estimator</h2>
          <p>
            Estimate your daily intake with smart food analysis and nutrition
            breakdown.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DietPlannerHome;

/*import React from "react";
import "./DietPlannerHome.css";
import { useNavigate } from "react-router-dom";

const DietPlannerHome = () => {
  const navigate = useNavigate();

  return (
    <div className="diet-home-container">
      <h1 className="main-heading">
        Plan today for <span className="highlight">healthy tomorrow</span>
      </h1>

      <div className="options-container">
        <div className="option-card" onClick={() => navigate("/aiplan")}>
          <h2 className="clickable-title">👉 AI-Powered Diet Plan Generator</h2>
          <p>
            Get a personalized meal plan created by our AI based on your
            profile, preferences, and goals.
          </p>
        </div>

        <div className="option-card" onClick={() => navigate("/goaltracking")}>
          <h2 className="clickable-title">
            🎯 Goal Tracking & Progress Prediction
          </h2>
          <p>
            Track your health goals and let our system predict your progress
            based on your habits.
          </p>
        </div>

        <div
          className="option-card"
          onClick={() => navigate("/calorieestimator")}
        >
          <h2 className="clickable-title">🧮 Calorie & Nutrition Estimator</h2>
          <p>
            Estimate your daily intake with smart food analysis and nutrition
            breakdown.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DietPlannerHome;
*/
