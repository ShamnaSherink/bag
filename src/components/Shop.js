import React, { useEffect, useState } from 'react';
import './shop.css';
import Navbar2 from './Navbar2';
import axios from 'axios';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Footer from './Footer';

export default function Shop() {
  const [shops, setShops] = useState([]);
  
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/view_shop_api/`)
      .then(response => {
        console.log(response);
        setShops(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching shop data:', error);
      });
  }, []);

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

      <Container className="mt-4">
        <Row>
          {shops.map((shop, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card>
                <Card.Img 
                  variant="top" 
                  src={shop.image}
                  alt={shop.name} 
                />
                <Card.Body>
                  <Card.Title>{shop.shop_name}</Card.Title>
                  <Card.Text>{shop.address}</Card.Text>
                  <Card.Text>{shop.phone_number}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Footer />
    </div>
  );
}
