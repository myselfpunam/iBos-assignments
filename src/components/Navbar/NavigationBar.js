import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/images/logoipsum-332 (1).svg'
import { BsCart } from 'react-icons/bs';
import './NavigationBar.css'
const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="Logo Here"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-bold">
            <Nav.Link className='nav-item' href="#home">Home</Nav.Link>
            <Nav.Link className='nav-item' href="#link">Products</Nav.Link>
            <Nav.Link className='nav-item' href="#link">Categories</Nav.Link>
            <Nav.Link className='nav-item' href="#link">Custom</Nav.Link>
            <Nav.Link className='nav-item' href="#link">Blog</Nav.Link>
          </Nav>
          <Nav className="ms-auto d-flex align-items-center">
          <Nav.Link href="#notifications">
            <BsCart size={24} className="me-2" />
          </Nav.Link>
          <Nav.Link href="#profile">
            
          </Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;