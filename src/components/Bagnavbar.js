import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';




export default function Bagnavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" >
      <Container className='navwidth' style={{backgroundColor:'black',maxWidth:'100vw'}}>
        <Navbar.Brand href="#home"> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features" style={{color:'white'}}>Get 1 Product Free With 200.00 $ Order.</Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>
          
          </Nav>
          <Nav>
          <Nav.Link href="#deets" style={{color:'white'}}>Today's Deal</Nav.Link>

            <Nav.Link href="#deets"style={{color:'white'}}>Customer Service</Nav.Link>
            <Nav.Link href="#deets"style={{color:'white'}}>Gift Certificates</Nav.Link>

            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}



