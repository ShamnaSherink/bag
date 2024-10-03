import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button, Form, Card } from 'react-bootstrap';
import './singleviewproduct.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import axios from 'axios';





export default function SingleViewProduct() {
 const{id}= useParams()
 const[product,setProduct]=useState({})

 useEffect(()=>{
  axios.get(`http://127.0.0.1:8000/view_single_product_api/${id}`).then((response)=>{
    setProduct(response.data.data);
  })

 },[id])  

    return (
        <div>
            {/* NAVBAR:- */}
            <div className="top-navbar d-flex justify-content-between align-items-center px-4">
                <div>Get 1 Product Free With 200.00 $ Order</div>
                <div className="top-links   ">
                    <a href="/" style={{ color: 'white' }}>Today's Deal</a>
                    <a href="/" style={{ color: 'white' }}>Customer Service</a>
                    <a href="/" style={{ color: 'white' }}>Gift Certificates</a>
                </div>
            </div>


            {/* NAVBAR 2:- */}


            <Navbar expand="lg" className="bg-white" variant="light">
                <Container>
                    <Navbar.Brand href="#home" className="d-flex align-items-center">
                        <div style={{ backgroundColor: 'white', padding: '5px 10px', border: '1px solid black' }}>JOOT</div>
                        <div style={{ backgroundColor: 'black', padding: '5px 10px', color: 'white' }}>BAG</div>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="navbar-nav" />

                    <Navbar.Collapse id="navbar-nav" className="justify-content-center">
                        <Nav className="mx-auto">
                            <Nav.Link href="#home" className="text-dark">Home</Nav.Link>
                            <NavDropdown title="Shop" id="shop-dropdown" className="text-dark">
                                <NavDropdown.Item href="#action1">All Products</NavDropdown.Item>
                                <NavDropdown.Item href="#action2">Categories</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#about" className="text-dark">About</Nav.Link>
                            <NavDropdown title="Pages" id="pages-dropdown" className="text-dark">
                                <NavDropdown.Item href="#page1">Page 1</NavDropdown.Item>
                                <NavDropdown.Item href="#page2">Page 2</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>

                    <div className="d-flex align-items-center">
                        <FaSearch className="me-3" size={20} />
                        <FaHeart className="me-3" size={20} />
                        <FaShoppingCart size={20} />
                    </div>
                </Container>
            </Navbar>



    <div className="product-card">
      <Row className="justify-content-center">
        <Col md={6} sm={12}>
          <Card className="border-0 shadow p-3 mb-9 bg-white rounded">
            <Row>
              <Col md={6} sm={12} className="image-section">
                <img
                  src="/assets/shop-3.webp" 
                  className="img-fluid product-image"
                />
              </Col>
              <Col md={6} sm={12} className="details-section">
                <Card.Body>
                  <Card.Title className="brand-name">Camping Backpack</Card.Title>
                  <Card.Subtitle className="product-name"></Card.Subtitle>
                  <div className="rating">
                  </div>
                  <Card.Text className="price">
                    <span><b>Rs.1,150.00</b></span>
                  </Card.Text>
                  
                 
                  <Button variant="primary" className="mt-3">
                    Add to card
                  </Button> 
                </Card.Body>

                 <button class="btn-donate" style={{width:'60px',height:'20px',marginTop:'20px',marginLeft:'40px',padding:'10px'}}>Edit</button   >
                 <button class="btn-donate" style={{width:'60px',height:'20px',marginLeft:'60px',padding:'10px'}}>Delete</button   >

                  
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>



            {/* FOOTER:- */}
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
                            <p>Fusce id velit ut tortor pretium viverra suspendisse potenti.</p>
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
