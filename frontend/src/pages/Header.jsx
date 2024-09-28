import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Header(props) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">DisArray</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/features">Features</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <NavDropdown title="Explore More" id="basic-nav-dropdown">
              <NavDropdown.Item href="/learnmore">Learn more</NavDropdown.Item>
              <NavDropdown.Item href="/download">
                Sign Up
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;



// const HeaderNav = (props) => {  return (
//     <div>
//       <nav>
//         <div class="nav-wrapper">
      
//           <ul id="nav-mobile" class="right">
//             <li>
//               <a href="/">Logo</a>
//             </li>
//             <li>|</li>
//             <li>
//               <a href="/goals">Goals</a>
//             </li>
//             <li>|</li>
//             <li>
//               <a href="/newgoal">New Goal</a>
//             </li>
//             <li>|</li>
//             <li>
//               <a href="collapsible.html">Resources</a>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default HeaderNav;
