import React, { useState } from 'react';
import "./Signup.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import DashNav from "./DashboardNav";
import "./Signup.css"
import { doSignInWithEmailAndPassword } from '../firebase/auth'
// const Login = () => {

//     return(
//         <>
//        {<DashNav />}
//        <br />
//        <br />
//        <br />
//        <br />
//        <h1>Returning User? Log back in!</h1>
// <div className="signin">
//     <div>
//           <div>
//             <img src="https://i.imgur.com/MfHAsXS.png"></img>
//           </div>
//           <Form>
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//               <Form.Label>Email address</Form.Label>
//               <Form.Control size="lg" type="email" placeholder="Enter email" />
//             </Form.Group>

//             <Form.Group className="mb-4" controlId="formBasicPassword">
//               <Form.Label>Password</Form.Label>
//               <Form.Control size="lg" type="password" placeholder="Password" />
//             </Form.Group>
//             <Form.Group className="mb-1" controlId="formBasicPassword">
//               <Form.Label>Forgot Password?</Form.Label>
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="formBasicPassword">
//               <Form.Label>Forgot Email?</Form.Label>
//             </Form.Group>
//             <Button variant="primary" type="submit">
//               Log In
//             </Button>
//           </Form>
//         </div>
//       </div>
//       </>    
//     )

// }

// export default Login



const Login = () => {
    const [email, setEmail] = useState('');  // State for email
    const [password, setPassword] = useState('');  // State for password
    const [error, setError] = useState(null);  // State for error messages
  
    const handleLogin = async (event) => {
      event.preventDefault();  // Prevent form from refreshing the page
  
      try {
        // Call Firebase sign-in function
        const userCredential = await doSignInWithEmailAndPassword(email, password);
        console.log('User signed in:', userCredential.user);
        // Redirect user or perform additional actions after successful login
        window.location.href = '/home';  // Example redirect after successful login
      } catch (error) {
        setError(error.message);  // Set error message if login fails
      }
    };
  
    return (
      <>
        <DashNav />
        <br />
        <br />
        <br />
        <br />
        <h1>Returning User? Log back in!</h1>
        <div className="signin">
          <div>
            <div>
              <img src="https://i.imgur.com/MfHAsXS.png" alt="Login illustration" />
            </div>
            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  size="lg"
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}  // Update email state on input
                />
              </Form.Group>
  
              <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  size="lg"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}  // Update password state on input
                />
              </Form.Group>
  
              {error && <div className="error-message" style={{ color: 'red' }}>{error}</div>}  {/* Display any errors */}
  
              <Button variant="primary" type="submit">
                Log In
              </Button>
            </Form>
          </div>
        </div>
      </>
    );
  };
  
  export default Login;