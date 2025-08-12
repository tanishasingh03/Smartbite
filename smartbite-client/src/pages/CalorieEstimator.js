import React, { useState } from "react";
import "./CalorieEstimator.css";

const foodDatabase = {
  Apple: { calories: 52, protein: 0.3, carbs: 14, fat: 0.2, alt: "Guava" },
  "Fried Chicken": {
    calories: 246,
    protein: 25,
    carbs: 0,
    fat: 16,
    alt: "Grilled Chicken",
  },
  "White Rice": {
    calories: 130,
    protein: 2.4,
    carbs: 28,
    fat: 0.3,
    alt: "Quinoa",
  },
  Paneer: { calories: 265, protein: 18, carbs: 1.2, fat: 21, alt: "Tofu" },
  Milk: { calories: 42, protein: 3.4, carbs: 5, fat: 1, alt: "Almond Milk" },
};

const RDI = { protein: 50, carbs: 275, fat: 70 };

const CalorieEstimator = () => {
  const [selectedFood, setSelectedFood] = useState("");
  const [quantity, setQuantity] = useState(100);
  const [data, setData] = useState(null);

  const handleFoodChange = (e) => {
    setSelectedFood(e.target.value);
    setData(null);
  };

  const handleCalculate = () => {
    if (!selectedFood || !foodDatabase[selectedFood]) return;

    const base = foodDatabase[selectedFood];
    const factor = quantity / 100;

    const result = {
      calories: (base.calories * factor).toFixed(1),
      protein: (base.protein * factor).toFixed(1),
      carbs: (base.carbs * factor).toFixed(1),
      fat: (base.fat * factor).toFixed(1),
      alt: base.alt,
    };

    setData(result);
  };

  const getGrade = (calories) => {
    if (calories < 100)
      return { grade: "A", tip: "Great choice! Low in calories." };
    if (calories < 200)
      return { grade: "B", tip: "Moderate calories, healthy in portion." };
    if (calories < 300) return { grade: "C", tip: "Watch portion size!" };
    return { grade: "D", tip: "High in calories. Consider alternatives." };
  };

  return (
    <div className="calorie-estimator-page">
      <h2>Calorie & Nutrition Estimator</h2>

      <div className="estimator-form">
        <select onChange={handleFoodChange} value={selectedFood}>
          <option value="">Select a food item</option>
          {Object.keys(foodDatabase).map((food) => (
            <option key={food} value={food}>
              {food}
            </option>
          ))}
        </select>

        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          placeholder="Quantity in grams"
        />

        <button onClick={handleCalculate}>Estimate</button>
      </div>

      {data && (
        <div className="result-section">
          <h3>
            Nutrition Info for {quantity}g {selectedFood}
          </h3>
          <p>
            <strong>Calories:</strong> {data.calories} kcal
          </p>

          <div className="macro-bars">
            <div className="bar">
              <label>Protein</label>
              <progress value={data.protein} max={RDI.protein}></progress>
              <span>{data.protein}g</span>
            </div>
            <div className="bar">
              <label>Carbs</label>
              <progress value={data.carbs} max={RDI.carbs}></progress>
              <span>{data.carbs}g</span>
            </div>
            <div className="bar">
              <label>Fat</label>
              <progress value={data.fat} max={RDI.fat}></progress>
              <span>{data.fat}g</span>
            </div>
          </div>

          <div className="alt-section">
            <p>
              <strong>Suggested Alternative:</strong> {data.alt}
            </p>
          </div>

          <div className="grade-section">
            <p>
              <strong>Nutrition Grade:</strong> {getGrade(data.calories).grade}
            </p>
            <p className="tip">{getGrade(data.calories).tip}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalorieEstimator;

/*import React, { useState } from "react";
import "./CalorieEstimator.css";

const mockData = {
  "Boiled Egg": { calories: 78, protein: 6, fat: 5, carbs: 0.6 },
  "Grilled Chicken (100g)": { calories: 165, protein: 31, fat: 3.6, carbs: 0 },
  Chapati: { calories: 104, protein: 3, fat: 2, carbs: 18 },
  "Paneer (100g)": { calories: 265, protein: 18, fat: 20, carbs: 2 },
  Apple: { calories: 95, protein: 0.5, fat: 0.3, carbs: 25 },
  "Rice (1 cup)": { calories: 206, protein: 4.3, fat: 0.4, carbs: 45 },
};

const CalorieEstimator = () => {
  const [selectedFood, setSelectedFood] = useState("");
  const [foodList, setFoodList] = useState([]);
  const [totals, setTotals] = useState({
    calories: 0,
    protein: 0,
    fat: 0,
    carbs: 0,
  });

  const addFood = () => {
    if (selectedFood && mockData[selectedFood]) {
      const newList = [...foodList, selectedFood];
      const newTotals = {
        calories: totals.calories + mockData[selectedFood].calories,
        protein: totals.protein + mockData[selectedFood].protein,
        fat: totals.fat + mockData[selectedFood].fat,
        carbs: totals.carbs + mockData[selectedFood].carbs,
      };
      setFoodList(newList);
      setTotals(newTotals);
      setSelectedFood("");
    }
  };

  const reset = () => {
    setFoodList([]);
    setTotals({ calories: 0, protein: 0, fat: 0, carbs: 0 });
  };

  return (
    <div className="estimator-container">
      <h2>Calorie & Nutrition Estimator</h2>
      <p>Select food items to estimate total calories and macronutrients.</p>

      <div className="input-group">
        <select
          value={selectedFood}
          onChange={(e) => setSelectedFood(e.target.value)}
        >
          <option value="">-- Select a food item --</option>
          {Object.keys(mockData).map((item, idx) => (
            <option key={idx} value={item}>
              {item}
            </option>
          ))}
        </select>
        <button onClick={addFood}>Add</button>
        <button onClick={reset} className="reset-btn">
          Reset
        </button>
      </div>

      {foodList.length > 0 && (
        <div className="results">
          <h3>Selected Items:</h3>
          <ul>
            {foodList.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          <h3>Nutrition Summary:</h3>
          <div className="summary">
            <p>
              <strong>Total Calories:</strong> {totals.calories} kcal
            </p>
            <p>
              <strong>Protein:</strong> {totals.protein} g
            </p>
            <p>
              <strong>Fat:</strong> {totals.fat} g
            </p>
            <p>
              <strong>Carbohydrates:</strong> {totals.carbs} g
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalorieEstimator;
*/
