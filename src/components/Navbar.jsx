import { useState } from 'react'
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from 'react-router-dom';
import ToggleThemeButton from './ToggleThemeButton';


const NavBar = () => {

  return (
    <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
    <Container fluid className="d-flex justify-content-between">
      <Navbar.Brand>iceland earthquakes</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link to='/' className="nav-link">Home</Link>
          <Link to='/quakes' className="nav-link">Earthquakes</Link>
          <Link to='/charts' className="nav-link">Charts</Link>
          <Link to='/description' className="nav-link">Description</Link>
        </Nav>
        <ToggleThemeButton />
      </Navbar.Collapse>
    </Container>
    </Navbar>    
  )
}



export default NavBar