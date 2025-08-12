// src/pages/ProfileSetup.js
import React, { useState } from "react";

export default function ProfileSetup() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    height: "",
    weight: "",
    allergies: "",
    goal: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form); // replace with API call
    alert("Profile saved!");
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-6 shadow rounded">
      <h2 className="text-2xl font-bold text-green-600 mb-4 text-center">
        Profile Setup
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full border p-2 rounded"
          required
        />
        <input
          name="age"
          value={form.age}
          onChange={handleChange}
          placeholder="Age"
          className="w-full border p-2 rounded"
          required
        />
        <input
          name="height"
          value={form.height}
          onChange={handleChange}
          placeholder="Height (cm)"
          className="w-full border p-2 rounded"
          required
        />
        <input
          name="weight"
          value={form.weight}
          onChange={handleChange}
          placeholder="Weight (kg)"
          className="w-full border p-2 rounded"
          required
        />
        <input
          name="allergies"
          value={form.allergies}
          onChange={handleChange}
          placeholder="Allergies (comma-separated)"
          className="w-full border p-2 rounded"
        />
        <select
          name="goal"
          value={form.goal}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        >
          <option value="">Select Health Goal</option>
          <option value="weight_loss">Weight Loss</option>
          <option value="muscle_gain">Muscle Gain</option>
          <option value="maintenance">Maintenance</option>
        </select>
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full"
        >
          Save Profile
        </button>
      </form>
    </div>
  );
}
