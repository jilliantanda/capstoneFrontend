import {  Link } from "react-router-dom";
import Header from "./Header";
import ListGroup from "react-bootstrap/ListGroup";

function Index(props) {
 
  const loaded = () => {
    return (
      <div className="goalpage">
        {props.goals.map((goal) => (
          <div key={goal._id} className="goal">
            <ListGroup>
              <ListGroup.Item action variant="dark">
                <Link to={`/goals/${goal._id}`}>
                  <h3>{goal.title}</h3>
                </Link>
              </ListGroup.Item>
            </ListGroup>
            <img src={goal.image} alt={goal.name} />
          </div>
        ))}
      </div>
    );
  };

  const loading = () => {};

  return (
    <>
      <Header />
      <h1>Goal Tracker:</h1>
      {props.goals ? loaded() : loading()}
    </>
  );
}

export default Index;
