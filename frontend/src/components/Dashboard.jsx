
import "./Dashboard.css"
import SignUp from "./Signup";
import FormPropsTextFields from "./Signup";
import BasicExample from "./DashboardNav";

const Dashboard = (props) => {
  return (
    <div>
       {<BasicExample/>}
       <div className ="slogan">
      <h1> DisArray </h1>
      {/* <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
        <text x="150" y="40" font-family="Arial" font-size="40" fill="red">
          [
        </text>
        <text
          x="170"
          y="40"
          font-family="Arial"
          font-size="40"
          fill="red"
          transform="rotate(187 177,37)"
        >
          [
        </text>
      </svg> */}

      <h3>learn.solve.grow</h3>
      </div>
      <div className="description">
        <h5>
          Dedicate the time to enhance your skills in software development. Set
          realistic goals, learn new skills, solve difficult problems, grow as a
          developer.
        </h5>
      </div>

    </div>
  );
};

export default Dashboard;
