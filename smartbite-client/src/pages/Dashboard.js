// src/pages/Dashboard.js
import React from "react";
import { Link } from "react-router-dom";

<Link to="/joinfamily" className="signup-link">
  Sign Up
</Link>;

export default function Dashboard() {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-3xl font-bold text-green-600 mb-4">
        SmartBite Dashboard
      </h2>
      <p className="text-gray-700 mb-6">
        Welcome back! Here's where your personalized nutrition journey begins.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link
          to="/profile-setup"
          className="p-4 bg-green-100 hover:bg-green-200 rounded shadow"
        >
          📝 Update Profile
        </Link>
        <Link
          to="/grocery"
          className="p-4 bg-green-100 hover:bg-green-200 rounded shadow"
        >
          🛒 Add Grocery Items
        </Link>
        <Link
          to="/meal-plan"
          className="p-4 bg-green-100 hover:bg-green-200 rounded shadow"
        >
          🍽️ View Meal Plan
        </Link>
        <Link
          to="/upload"
          className="p-4 bg-green-100 hover:bg-green-200 rounded shadow"
        >
          📷 Upload Food Image
        </Link>
      </div>
    </div>
  );
}
