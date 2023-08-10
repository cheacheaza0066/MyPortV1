// import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './Navcomponen.module.css';
function NavBarComponents() {
  const navStyle = {
    color: 'white', // Set text color to white
    fontWeight: 'bold' // Make text bold󠁼
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark" className={styles.navbar} >
      <Container className='navbar'>
        <Navbar.Brand href="#home" className='' style={navStyle}>CHE | THANIN</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          </Nav>
          <Nav>
            <Nav.Link href="#deets" style={navStyle}>My Work</Nav.Link>
            <Nav.Link href="#deets" style={navStyle}>My Profile</Nav.Link>
            <Nav.Link href="#deets" style={navStyle}>Blog</Nav.Link>
            <Nav.Link eventKey={2} href="#memes" style={navStyle}>
              Potfolio
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponents;
