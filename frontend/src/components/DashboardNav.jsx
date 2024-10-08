import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./DashNav.css";

function DashNav() {
  return (
    <Navbar expand="lg" className="navbar1">
      <Container>
        <Navbar.Brand href="/">
          <img src="https://i.imgur.com/JKuHfyG.png" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/features">Features</Nav.Link>
            <NavDropdown title="Explore More" id="basic-nav-dropdown">
              {/* <NavDropdown.Item href="/learnmore">Learn more</NavDropdown.Item> */}
              <NavDropdown.Item href="/signup">Sign Up</NavDropdown.Item>
              <NavDropdown.Item href="/login">Log In</NavDropdown.Item>
              <NavDropdown.Item href="/goals">Goals</NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              {/* <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default DashNav;
