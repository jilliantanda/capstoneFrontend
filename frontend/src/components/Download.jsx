import DashNav from "./DashboardNav";
import FormPropsTextFields from "./Signup";
import LoginSignup from "./Signup";
const Download = (props) => {
    return (
         <>
         {<DashNav/>}
        <h1>Download page</h1>
        {<LoginSignup/>}
        </>
    )
}

export default Download