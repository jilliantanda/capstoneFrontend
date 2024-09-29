import DashNav from "./DashboardNav";
import "./About.css"

const About = (props) => {
    return (
         <>
         {<DashNav/>}
<div className="about">
          <div className="about1">
<img
          src="https://i.imgur.com/WTTUhfL.png"
          width="30%"
          height="30%"
        ></img>
  
        <p>Welcome to DiAarray, your all-in-one productivity tool designed to help you set and achieve your goals while staying on top of industry best practices and emerging technologies. </p>
       </div>

       <div className="about5">
 <p>
        Whether you're a professional aiming to sharpen your skills, a student navigating the learning curve, or a team looking to streamline workflows, DisArray provides the organization and insight you need to thrive.</p>
        </div>
        
        <div className="about2">
<p>

   
<b>What We Offer: </b>
 Goal Setting & Tracking: Easily define personal or professional goals, break them down into actionable steps, and monitor your progress. Stay focused with reminders, milestones, and customizable timelines.
</p>
<p>
<b>Resource Organization: </b>DisArray helps you keep all your learning materials, references, and tools in one place. Organize articles, tutorials, documents, and other resources so they’re easily accessible whenever you need them.
</p>
<p>
<b>Stay Current: </b>The tech industry evolves rapidly. Disarray ensures you’re always in the loop with curated updates on industry trends, new technologies, and best practices tailored to your interests.
</p>
 </div>
 <div className="about3">
<p>
<b>Why DisArray?</b><br/> <br />
We know how challenging it can be to balance learning, growth, and staying organized. DisArray simplifies this process, empowering you to manage your professional or personal development efficiently. Whether you're an individual or a team, DisArray is here to ensure you don’t just keep up with the pace of innovation—you thrive in it.

Start using Disarray today and bring order to your learning journey!</p>
      </div> 
      </div>
       </>
    )
}

export default About