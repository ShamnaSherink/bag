import React from 'react'
import './viewprofile.css'
import { Container, Row, Col, Card, Image, Button, Form } from 'react-bootstrap';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa';
import Navbar2 from './Navbar2';
import Footer from './Footer';




export default function Viewprofile() {
  return (
    <div>

      {/* NAVBAR:- */}
<Navbar/>
      {/* NAVBAR 2:- */}


     <Navbar2/>

   {/* PROFILE:- */}

      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card>
              <Card.Body className="text-center">
                <Image
                  src="./assets/profile.png"
                  roundedCircle
                  fluid
                  className="mb-4"
                />
                <Card.Title>Shamna Sherin</Card.Title>
                <Card.Text>
                  PYTHON FULL-STACK DEVELOPER
                </Card.Text>
                <Button variant="primary" className="mt-2">Edit Profile</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>


      {/* FOOTER:- */}
      <Footer/>
    </div>
  )
}
