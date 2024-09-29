import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

function Index(props) {
  const loaded = () => {
    return props.goals.map((goal) => (
      <div key={goal._id} className="goal">
        <Link to={`/goals/${goal._id}`}>
          <h3>{goal.title}</h3>
        </Link>
        <img src={goal.image} alt={goal.name} />
      </div>
    ));
  };
  const loading = () => {};

  return (
    <>
      {props.goals ? loaded() : loading()}
      <Link to="/newgoal">
        <button>New Goal</button>
      </Link>
    </>
  );
}

export default Index;
