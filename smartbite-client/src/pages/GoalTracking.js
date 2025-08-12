import React, { useState } from "react";
import "./GoalTracking.css";

const GoalTracking = () => {
  const [currentWeight, setCurrentWeight] = useState("");
  const [targetWeight, setTargetWeight] = useState("");
  const [targetDate, setTargetDate] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [result, setResult] = useState(null);

  const calculateResults = () => {
    const daysRemaining = Math.ceil(
      (new Date(targetDate) - new Date()) / (1000 * 60 * 60 * 24)
    );
    const weightLoss = currentWeight - targetWeight;
    const weeksRemaining = daysRemaining / 7;
    const weeklyWeightLoss = (weightLoss / weeksRemaining).toFixed(2);

    let calorieDeficit = 0;
    switch (activityLevel) {
      case "sedentary":
        calorieDeficit = 1500;
        break;
      case "moderate":
        calorieDeficit = 1800;
        break;
      case "active":
        calorieDeficit = 2000;
        break;
      default:
        calorieDeficit = 1700;
    }

    const progress = (
      (weightLoss / (currentWeight - targetWeight)) *
      100
    ).toFixed(2);
    let quote = "You’ve taken the first step!";
    if (progress >= 70) quote = "You're almost there! Keep it up!";
    else if (progress >= 40) quote = "Great going! Stay consistent!";
    else if (progress >= 10) quote = "Progress is progress. Keep pushing!";

    setResult({
      calorieDeficit,
      weeklyWeightLoss,
      progress,
      quote,
    });
  };

  return (
    <div className="goal-tracking-container">
      <h2>Goal Tracking & Progress Estimator</h2>
      <div className="input-group">
        <label>Current Weight (kg)</label>
        <input
          type="number"
          value={currentWeight}
          onChange={(e) => setCurrentWeight(e.target.value)}
        />

        <label>Target Weight (kg)</label>
        <input
          type="number"
          value={targetWeight}
          onChange={(e) => setTargetWeight(e.target.value)}
        />

        <label>Target Date</label>
        <input
          type="date"
          value={targetDate}
          onChange={(e) => setTargetDate(e.target.value)}
        />

        <label>Daily Activity Level</label>
        <select
          value={activityLevel}
          onChange={(e) => setActivityLevel(e.target.value)}
        >
          <option value="">-- Select --</option>
          <option value="sedentary">Sedentary</option>
          <option value="moderate">Moderate</option>
          <option value="active">Active</option>
        </select>

        <button onClick={calculateResults}>Calculate</button>
      </div>

      {result && (
        <div className="results">
          <h3>Your Plan</h3>
          <p>
            🔋 Estimated Daily Calorie Intake:{" "}
            <strong>{result.calorieDeficit} kcal</strong>
          </p>
          <p>
            📅 Weekly Weight Loss Goal:{" "}
            <strong>{result.weeklyWeightLoss} kg/week</strong>
          </p>
          <p>📈 Progress: {result.progress}%</p>

          <div className="progress-bar">
            <div
              className="progress"
              style={{ width: `${result.progress}%` }}
            ></div>
          </div>

          <p className="quote">💡 {result.quote}</p>
        </div>
      )}
    </div>
  );
};

export default GoalTracking;
