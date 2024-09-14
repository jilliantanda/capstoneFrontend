import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Index from "../pages/Index.jsx";
import Show from "../pages/Show.jsx";
import Form from "./Form";

const Home = (props) => {
  const [goals, setGoals] = useState(null);
  const URL = "http://localhost:4000/goals/";

  const getGoals = async () => {
    try {
      const response = await response.json();
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
        <Route path="/goals" element={<Index goals={goals} />} />
        <Route path="/newgoal" element={<Form createGoal={createGoal} />} />
        <Route
          path="/goal/:id"
          element={
            <Show
              goals={goals}
              updateGoals={updateGoals}
              deleteGoals={deleteGoals}
            />
          }
        />
      </Routes>
      <h1> Home Component </h1>
    </main>
  );
};

export default Home;
