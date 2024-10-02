import React, { useState } from 'react';
import "./Signup.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { doCreateUserWithEmailAndPassword } from '../firebase/auth'
import { auth } from "../firebase/firebase"

const LoginSignup = () => {
  const [email, setEmail] = useState('');  // State for email
  const [username, setUsername] = useState('');  // State for username
  const [password, setPassword] = useState('');  // State for password
  const [confirmPassword, setConfirmPassword] = useState('');  // State for confirm password
  const [error, setError] = useState(null);  // State for error messages


  const handleSignup = async (event) => {
    event.preventDefault();  // Prevent form from refreshing the page

    // Check if passwords match before proceeding
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      // Call Firebase signup function
      const userCredential = await doCreateUserWithEmailAndPassword(email, username,password);
      console.log('User signed up:', userCredential.user);
      const user = auth.currentUser;
      if (user) {
        console.log("UID:", user.uid);
        console.log("Email:", user.email);
        console.log("Display Name:", user.displayName);  // This will show the username
      }

      // You can optionally update the user's display name (username) here
      // Redirect or update UI as needed after successful signup
      window.location.href = '/';  // Example redirect after signup
    } catch (error) {
      setError(error.message);  // Set error message if signup fails
    }
      console.log(auth.currentUser.displayName)
  };

  return (
    <>
      <div className="logcontainer">
        <div className="signup">
          <div>
            <img src="https://i.imgur.com/MfHAsXS.png" alt="Signup illustration" />
          </div>
          <Form onSubmit={handleSignup}>
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

            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                size="lg"
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}  // Update username state on input
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

            <Form.Group className="mb-4" controlId="formBasicConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                size="lg"
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}  // Update confirm password state
              />
            </Form.Group>

            {error && <div className="error-message" style={{ color: 'red' }}>{error}</div>}  {/* Display any errors */}

            <Button variant="primary" type="submit">
              Create Account
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default LoginSignup;

