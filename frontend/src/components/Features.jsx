import DashNav from "./DashboardNav";
import "./Features.css";
import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import StarsOutlinedIcon from "@mui/icons-material/StarsOutlined";

const Features = (props) => {
  return (
    <>
    
      {<DashNav />}
      <div className="title">
      <h1>Explore our Features</h1>
      </div>
      <div className="contentdiv">
        <div className="section1">
          {<SummarizeOutlinedIcon fontSize="large" />}
          <h5>Goal Journal</h5>
          <p>
            Select from an array of resources that will help benefit your
            learning adventure. Add as much or as little to your learning
            journal to help expand your skills. Implement small and frequent
            goals to help stay dedicated!
          </p>
        </div>
        <div className="section2">
          {<StarsOutlinedIcon fontSize="large" />}
          <h5>Resources</h5>

          <p>
            Explore a library of ever expanding learning resources,
            documentation, industry best practices, and more! Set yourself up
            for success with practice quizzes and common interview questions!
          </p>
        </div>

        <div className="section3">
          {<NotificationsActiveOutlinedIcon fontSize="large" />}
          <h5>Set Daily Reminders</h5>
          <p>
            Stay focused and determined to grow! Daily reminders will help you
            stay on track and further you goal progress! Choose a progress pal
            to join you on your journey!
          </p>
        </div>
      </div>

      <div className="div1">
<div className="div2">
        <h1>Staying Focused isn't always easy</h1>
             <br />
        
        <p>
          In the world of software development, things are always evolving. It
          may seem daunting to dive into. DisArray will help you stay motivated,
          learn at your own pace, and connect you with all the resources for the
          success in what you want to expand on!
        </p>
   </div>
        <img
          src="https://i.imgur.com/DwHRN9x.jpeg"
          width="50%"
        ></img>
        </div>
        
        <div>
      </div>
    </>
  );
};

export default Features;
