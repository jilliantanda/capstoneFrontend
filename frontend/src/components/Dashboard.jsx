import "./Dashboard.css";
import SignUp from "./Signup";
import FormPropsTextFields from "./Signup";
import BasicExample from "./DashboardNav";

const Dashboard = (props) => {
  return (
    <div>
      {<BasicExample />}
      <div className="slogan">
        <img src="https://i.imgur.com/pIBN1uK.png"></img>
    <br></br>
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
