import "./Dashboard.css";
import Button from "react-bootstrap/Button";
import DashNav from "./DashboardNav";

const Dashboard = (props) => {
  return (
    <div>
      {<DashNav />}

      <div className="slogan">
        <div className="grid-item">
          <img src="https://i.imgur.com/82HHqL5.png"></img>
        </div>
        <div className="grid-item">
          <img src="https://i.imgur.com/Ytoa5xQ.gif"></img>
        </div>
        <div className="grid-item">
          <h3>learn.solve.grow</h3>
        </div>
        <div className="grid-item">
          <h5>
            Dedicate the time to enhance your skills in software development.
            Set realistic goals, learn new skills, solve difficult problems,
            grow as a developer.
          </h5>
<br></br>
          <div>
            <Button href="/signup" variant="secondary" size="med">
            Sign Up
            </Button>{" "}
            <Button href="/login" variant="secondary" size="med">
              Log In
            </Button>
          </div>
        </div>
      </div>

      <br></br>
    </div>
  );
};

export default Dashboard;
