// import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './MyNavbar.module.css';
function MyNavbar() {
  const navStyle = {
    color: 'white', // Set text color to white
    fontWeight: 'bold' // Make text bold󠁼
  };

  return (
    <Navbar collapseOnSelect expand="lg"  variant="dark" className={styles.navbar} >
      <Container>
        <Navbar.Brand href="#home" className='' style={navStyle}>CHE | THANIN</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          </Nav>
          <Nav>
            <Nav.Link href="https://drive.google.com/drive/folders/1l0SHR66QvsCEdzQyJaSB2GtdfUkNwnHr?usp=sharing" style={navStyle} className='fs-5'>My Resume</Nav.Link>
            {/* <Nav.Link href="#" style={navStyle} className='fs-5'>Contact Me</Nav.Link> */}
            {/* <Nav.Link href="#" style={navStyle} className='fs-5'>Blog</Nav.Link> */}
            {/* <Nav.Link eventKey={2} href="#memes" style={navStyle} className='fs-5'> 
              Potfolio
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
