import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { doSignOut } from '../firebase/auth';


function Header(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <Navbar expand="lg" className="mainheader">
      <Container>
      <Button variant="light" className="launch" onClick={handleShow}>
      <img src="https://i.imgur.com/JKuHfyG.png" />
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Nav.Link href="/dashboard"><h3>Dashboard</h3></Nav.Link>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/goals">Goals</Nav.Link>
            <Nav.Link href="/newgoal">New Goal</Nav.Link>
            <Nav.Link href="/resources">Resources</Nav.Link>
           
          </Nav> 
          <Navbar.Collapse className="justify-content-end">
          
          <Navbar.Text>
            Signed in as: <a href="#login">enteruserhere</a>         
    
          </Navbar.Text>
  
          

        </Navbar.Collapse>
        </Navbar.Collapse>
       <Button onClick={() => { doSignOut.then(() => {Navigate('/')})}}>Sign Out</Button>
      </Container>
       
    </Navbar>
  );
}

export default Header;



