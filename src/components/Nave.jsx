import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'; // Keep if you plan to use it
import { Link, NavLink } from 'react-router-dom';
import CartIcon from './CartIcon'; // Import your CartIcon component
import logo from '../assets/khal.svg'
import './Nave.css'
function Nave() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="success" >
      <Container fluid>
        {/* Use Link for Navbar.Brand to navigate home */}
        <Navbar.Brand as={Link} to="/">
<Navbar.Brand as={Link} to="/" className="d-flex align-items-center gap-2">
  <img 
    src={logo} 
    alt="Your Brand Logo" 
    style={{ 
      height: '30px', // Adjust height as needed
      width: 'auto'  // Maintains aspect ratio
    }} 
  />
  <span><b>Paradise Nursery</b></span> {/* Replace with your brand name */}
</Navbar.Brand>    
      

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink to="/" className="nav-link"> {/* Link to home */}
              Home
            </NavLink>
            <NavLink to="plants" className="nav-link">
              Plants
            </NavLink>
            <NavLink to="checkout" className="nav-link">
            Checkout 
            </NavLink>
            {/* Remove the separate "Checkout" NavLink if CartIcon handles it */}
            {/* If you want a text link AND the icon, keep this but style as needed */}
            {/* <NavLink to="checkout" className="nav-link">
              Checkout
            </NavLink> */}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          {/* Place CartIcon outside the Form for better layout flexibility,
              or integrate it within Nav or Form depending on your design.
              It's common to have utility icons on the far right. */}
          <Nav> {/* Wrap CartIcon in a Nav for proper styling if needed by Bootstrap */}
            <NavLink to="/checkout" className="nav-link">
              <CartIcon />
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nave;