import DashNav from "./DashboardNav";
import './Features.css'
import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import StarsOutlinedIcon from "@mui/icons-material/StarsOutlined";

const Features = (props) => {
  return (
    <>
      {<DashNav />}
      <h1>Explore our Features</h1>
      <div className="contentdiv">
      <div className="icons">
      {<SummarizeOutlinedIcon fontSize="large" />}
    
      {<StarsOutlinedIcon fontSize="large" />}
      
      {<NotificationsActiveOutlinedIcon fontSize="large" />}
    
      </div>
    <div className="content">
        <h5>Goal Journal</h5>
        <h5>Resources</h5>  
        <h5>Set Daily Reminders</h5>
    </div>
    <div className="info">
        <p>Select from an array of resources that will help benefit your learning adventure. Add as much or as little to your learning journal to help expand your skills. Implement small and frequent goals to help stay dedicated!</p>
        <p>Explore a library of ever expanding learning resources, documentation, industry best practices, and more! Set yourself up for success with practice quizzes and common interview questions!</p>
        <p>Stay focused and determined to grow! Daily reminders will help you stay on track and further you goal progress! Choose a progress pal to join you on your journey!</p>
    </div>
    <div className="div1">
    <h1>Staying Focused isn't always easy</h1>
    <p>In the world of software development, things are always evolving. It may seem daunting to dive into. DisArray will help you stay motivated, learn at your own pace, and connect you with all the resources for the success in what you want to expand on!</p>
    
    </div>

    </div>
     <img src="https://i.pinimg.com/736x/a4/d8/ec/a4d8eccab217762fdd7af943876219ac.jpg" width="35%"></img>     
    </>
  );
};

export default Features;
