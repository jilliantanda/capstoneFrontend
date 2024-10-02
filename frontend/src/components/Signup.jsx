import React, { useState } from 'react';
import "./Signup.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { doCreateUserWithEmailAndPassword } from '../firebase/auth'
import { auth } from "../firebase/firebase"

const LoginSignup = () => {
  const [email, setEmail] = useState(''); 
  const [username, setUsername] = useState('');  
  const [password, setPassword] = useState(''); 
  const [confirmPassword, setConfirmPassword] = useState('');  
  const [error, setError] = useState(null); 


  const handleSignup = async (event) => {
    event.preventDefault(); 
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const userCredential = await doCreateUserWithEmailAndPassword(email, username,password);
      console.log('User signed up:', userCredential.user);
      const user = auth.currentUser;
      window.location.href = '/'
      if (user) {
        console.log("UID:", user.uid);
        console.log("Email:", user.email);
        console.log("Display Name:", user.displayName);  
      }
    } catch (error) {
      setError(error.message); 
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
                onChange={(e) => setEmail(e.target.value)}  
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                size="lg"
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)} 
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                size="lg"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                size="lg"
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)} 
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

