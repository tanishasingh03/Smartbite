//http://localhost:3000/dietplanner

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import ProfileSetup from "./pages/ProfileSetup";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CustomerReviews from "./pages/CustomerReviews";
import InspiringStories from "./pages/InspiringStories";
import HealthyTips from "./pages/HealthyTips";
import NutritionMyths from "./pages/NutritionMyths";
import JoinFamily from "./pages/JoinFamily";
import UserProfilePage from "./pages/UserProfilePage";
import DietPlannerHome from "./pages/DietPlannerHome";
import AIDietPlan from "./pages/AIDietPlan";
import GoalTracking from "./pages/GoalTracking";
import CalorieEstimator from "./pages/CalorieEstimator";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />

            <Route path="/signup" element={<JoinFamily />} />

            <Route path="/profile-setup" element={<ProfileSetup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/reviews" element={<CustomerReviews />} />
            <Route path="/stories" element={<InspiringStories />} />
            <Route path="/tips" element={<HealthyTips />} />
            <Route path="/myths" element={<NutritionMyths />} />
            <Route path="/join" element={<JoinFamily />} />
            <Route path="/userprofile" element={<UserProfilePage />} />
            <Route path="/dietplanner" element={<DietPlannerHome />} />

            <Route path="/dietplanner" element={<DietPlannerHome />} />
            <Route path="/aiplan" element={<AIDietPlan />} />
            <Route path="/goaltracking" element={<GoalTracking />} />
            <Route path="/calorieestimator" element={<CalorieEstimator />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
//cd smartbite-client
//npm start
//http://localhost:3000/dietplanner
