import { useState } from "react";
import { Link } from "react-router-dom";

function Index(props) {
  const loaded = () => {
    return props.goals.map((goal) => (
      <div key={goal._id} className="goal">
        <Link to={`/goals/${goal._id}`}>
          <h1>{goal.title}</h1>
        </Link>
        <img src={goal.image} alt={goal.name} />
        <h3>{goal.active}</h3>
      </div>
    ));
  };
  const loading = () => {};

  return (
    <div className ="headercontainer">
      {props.goals ? loaded() : loading()}
      <Link to="/newgoal">
        <button>New Goal</button>
      </Link>
    </div>
  );
}

export default Index;
