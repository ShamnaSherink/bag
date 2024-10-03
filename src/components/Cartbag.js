import React, { useEffect, useState } from 'react';
import './cartbag.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card, Button } from 'react-bootstrap';
import Navbar2 from './Navbar2';
import { FaPlus, FaMinus, FaTrashAlt } from 'react-icons/fa'; 
import Footer from './Footer';
import axios from 'axios';

export default function Cartbag() {
  const [viewCart,setViewCart]=useState([])
  useEffect(()=>{
    const logid=JSON.parse(localStorage.getItem('login_id'))
    axios.get(`http://127.0.0.1:8000/view_cart_api/${logid}`).then((res)=>{
      console.log(res.data.data);
      setViewCart(res.data.data)
      
    })
  })
  const [quantity, setQuantity] = useState(1); 
  const [price] = useState(1150);
  const discount = 100; 
  const subtotal = price * quantity;
  const total = subtotal - discount;

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleDelete = () => {
    console.log('Item deleted');
  };

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

      <Navbar2 />

      <Container>

        <h2 className="my-4" style={{textAlign:'center',fontFamily:'-moz-initial'}}>Shopping Cart</h2>

        <Row>
          <Col md={8} sm={12}>
          {viewCart.map((value,index)=>{
  
})}
            <Card className="border-0 shadow p-3 mb-4 bg-white rounded">
              <Row>
                <Col md={6} sm={12} className="image-section">
                  <img
                    src="/assets/Shop-1.jpg"
                    className="img-fluid product-image"
                    alt="product"
                  />
                </Col>
                <Col md={6} sm={12} className="details-section">
                  <Card.Body>
                    <Card.Title className="brand-name">Camping Backpack</Card.Title>
                    <Card.Text className="price">
                      <span><b>Rs.1,150.00</b></span>
                    </Card.Text>

                    <div className="quantity-control d-flex align-items-center">
                      <Button variant="light" onClick={handleDecrease} className="me-2">
                        <FaMinus />
                      </Button>
                      <span className="quantity">{quantity}</span>
                      <Button variant="light" onClick={handleIncrease} className="ms-2">
                        <FaPlus />
                      </Button>
                    </div>

                    <Button variant="danger" onClick={handleDelete} className="mt-3">
                      <FaTrashAlt /> Delete
                    </Button>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>







          <Col md={4} sm={12}>
            <Card className="border-0 shadow p-3 mb-4 bg-white rounded">
              <Card.Body>
                <h4>Order Summary</h4>
                <div className="d-flex justify-content-between">
                  <span>Subtotal</span>
                  <span>Rs. {subtotal.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Discount</span>
                  <span>- Rs. {discount.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span><strong>Total</strong></span>
                  <span><strong>Rs. {total.toFixed(2)}</strong></span>
                </div>
                <Button variant="primary" className="mt-3 w-100">Proceed to Checkout</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

<br></br>

      <Footer/>
    </div>
  );
}
