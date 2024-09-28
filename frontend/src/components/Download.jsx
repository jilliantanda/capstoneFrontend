import DashNav from "./DashboardNav";
import LoginSignup from "./Signup";

const Download = (props) => {
    return (
         <>
         {<DashNav/>}
         <div className="title">
        <h1>Create an Account</h1>
        </div>
        {<LoginSignup/>}
        </>
    )
}

export default Download