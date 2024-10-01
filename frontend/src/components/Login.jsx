import * as React from "react";
import "./Signup.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import DashNav from "./DashboardNav";
import "./Signup.css"

const Login = () => {

    return(
        <>
       {<DashNav />}
       <br />
       <br />
       <br />
       <br />
       <h1>Returning User? Log back in!</h1>
<div className="signin">
    <div>
          <div>
            <img src="https://i.imgur.com/MfHAsXS.png"></img>
          </div>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control size="lg" type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control size="lg" type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-1" controlId="formBasicPassword">
              <Form.Label>Forgot Password?</Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Forgot Email?</Form.Label>
            </Form.Group>
            <Button variant="primary" type="submit">
              Log In
            </Button>
          </Form>
        </div>
      </div>
      </>    
    )

}

export default Login