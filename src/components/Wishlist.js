import { Container, Row, Col, Card, Button, Navbar } from 'react-bootstrap';
import './wishlist.css'
import React, { useState } from 'react'
import { Nav } from 'react-bootstrap';
import { FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import axios from 'axios';





export default function Wishlist() {
  const navigate = useNavigate()

  const [role, setRole] = useState(JSON.parse(localStorage.getItem('role')))
  console.log(role);

  const logout = () => {
    localStorage.clear()
    navigate('/')

  }

  // const remove=(id)=>{
  //   axios.get(`http://127.0.0.1:8000/view_product_api//${id}`).then((response)=>{
  //   })
    
  // }
  return (

    <div>

      <div className="top-navbar d-flex justify-content-between align-items-center px-4">
        <div>Get 1 Product Free With 200.00 $ Order</div>
        <div className="top-links">
          <a href="/" style={{ color: 'white' }}>Today's Deal</a>
          <a href="/" style={{ color: 'white' }}>Customer Service</a>
          <a href="/" style={{ color: 'white' }}>Gift Certificates</a>
        </div>
      </div>




      <Navbar expand="lg" className="bg-white" variant="light">
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <div style={{ backgroundColor: 'white', padding: '5px 10px', border: '1px solid black' }}>JOOT</div>
            <div style={{ backgroundColor: 'black', padding: '5px 10px', color: 'white' }}>BAG</div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-nav" />

          <Navbar.Collapse id="navbar-nav" className="justify-content-center">
            <Nav className="mx-auto">
              <Nav.Link href="/home" className="text-dark">Home</Nav.Link>

              <Nav.Link href="/viewproduct " className="text-dark">Products</Nav.Link>
              <Nav.Link href="#Shop" className="text-dark">Shops</Nav.Link>
              <Nav.Link href="/viewprofile" className="text-dark">Profile</Nav.Link>
              <Nav.Link href="#LOGOUT" className="text-dark"><button style={{ backgroundColor: 'black', color: 'white', padding: 'px' }} onClick={logout}>Logout</button></Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <div className="d-flex align-items-center">
            <FaSearch className="me-3" size={20} />
            <FaHeart className="me-3" size={20} />
            <FaShoppingCart size={20} />
          </div>
        </Container>
      </Navbar>


      <Container className="mt-5 text-center">
        <h2>My Wishlist</h2>
        <Row className="mt-4 d-flex justify-content-center">
          <Col md={4}>
            <Card className="text-center">
              <Card.Img
                variant="top"
                src="./assets/shop-4.webp"
                alt="Stylish Bag"
                style={{ height: '250px', width: 'auto' }}
              />
              <Card.Body>
                <Card.Title>Stylish Leather Bag</Card.Title>
                <Card.Text>
                  A premium leather bag, perfect for work or casual use.
                </Card.Text>
                <Card.Text className="fw-bold">
                  Price: $120.00
                </Card.Text>
                <div className="d-flex justify-content-between">
                  <Button variant="primary">Add to Cart</Button>
                  <Button variant="danger" style={{marginLeft:'15px'}} >Remove</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>



      <Container fluid className="footer-bottom text-white">
        <Container>
          <Row className="pt-4">
            <Col md={3}>
              <h6>Contact Us</h6>
              <ul className="list-unstyled">
                <li>Site Map</li>
                <li>Site Credits</li>
                <li>Support</li>
                <li>Careers</li>
                <li>Services</li>
                <li>Locations</li>
              </ul>
            </Col>
            <Col md={3}>
              <h6>Company</h6>
              <ul className="list-unstyled">
                <li>Feedback</li>
                <li>Technical Support</li>
                <li>Sales Team</li>
                <li>Products</li>
                <li>Find A Store</li>
              </ul>
            </Col>
            <Col md={3}>
              <h6>Useful Links</h6>
              <ul className="list-unstyled">
                <li>Help Center</li>
                <li>Case Studies</li>
                <li>Events</li>
                <li>Privacy Policy</li>
                <li>Partners</li>
              </ul>
            </Col>
            <Col md={3}>
              <h6>Newsletter</h6>
              <p style={{ fontSize: '17px' }}>Emphasize the ability to provide value in a flexible manner</p>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-2">
                  Send
                </Button>
              </Form>
            </Col>
          </Row>
          <Row className="pt-4">
            <Col>
              <p className="small">
                * Our bags are ideal for students, travelers, and professionals who need to carry essentials hands-free...
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  )
}
