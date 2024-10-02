import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Index from "../pages/Index.jsx";
import Show from "../pages/Show.jsx";
import Forms from "./Form";
import Dashboard from "./Dashboard.jsx";
import Features from "./Features.jsx";
import About from "./About.jsx";
import LearnMore from "./LearnMore.jsx";
import Download from "./Download.jsx";
import Login from "./Login.jsx";
import UserHome from "./UserDashboard.jsx";




const Home = (props) => {
  const [goals, setGoals] = useState(null);
  // const URL = "http://localhost:4000/goals/";
  const URL = "https://capstonebackend-1-tz2o.onrender.com/goals/";

  const getGoals = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setGoals(data.data);
    } catch (error) {
      console.error("Error fetching goals: ", error);
    }
  };

  const createGoal = async (goal) => {
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(goal),
    });
    getGoals();
  };

  const updateGoals = async (goal, id) => {
    await fetch(URL + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(goal),
    });
    getGoals();
  };

  const deleteGoals = async (id) => {
    await fetch(URL + id, {
      method: "DELETE",
    });
    getGoals();
  };

  useEffect(() => {
    getGoals();
  }, []);


  return (
    <main>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<About />} />
        <Route path="/learnmore" element={<LearnMore />} />
        <Route path="/signup" element={<Download />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<UserHome />} />
        <Route path="/goals" element={<Index goals={goals} />} />
        <Route path="/newgoal" element={<Forms createGoal={createGoal} />} />
        <Route
          path="/goals/:id"
          element={
            <Show
              goals={goals}
              updateGoals={updateGoals}
              deleteGoals={deleteGoals}
            />
          }
        />
      </Routes>
    </main>
  );
};

export default Home;
