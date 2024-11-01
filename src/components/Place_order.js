import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Navbar2 from './Navbar2';
import Footer from './Footer';
import { Row, Col, Card, Button } from 'react-bootstrap';
import axios from 'axios';

export default function PlaceOrder() {
    const [myOrder, setMyOrder] = useState([]);

    console.log("myOrder====>", myOrder);

    useEffect(() => {
        const login_id = JSON.parse(localStorage.getItem('login_id'));
        
        axios.get(`http://127.0.0.1:8000/view_orders_api/${login_id}/`)
            .then((response) => {
                console.log(response);
                setMyOrder(response.data.data);
            })
            .catch((error) => {
                console.error("There was an error fetching the orders:", error);
            });
    }, []); 

    return (
        <div>
            <Navbar />
            <Navbar2 />
            <h2 style={{ color: 'black' }} className="text-center">My Orders</h2>
          {myOrder.map((value,index)=>(
            <div className="product-card">
            <Row     className="justify-content-center">
                <Col md={6} sm={12}>
                    <Card className="border-0 shadow p-3 mb-9 bg-white rounded">
                        <Row>
                            <Col md={6} sm={12} className="image-section">
                                <img
                                    src={value.product.image}
                                    alt="Shop"
                                />
                            </Col>
                            <Col md={6} sm={12} className="details-section">
                                <Card.Body>
                                    <Card.Title className="brand-name">{value.product.name}</Card.Title>
                                    <br />
                                    <br />
                                    <Card.Subtitle className="product-name"></Card.Subtitle>
                                    <div className="rating"></div>
                                    <Card.Text className="price">
                                        <span><b>RS:  {value.product.price}</b></span>
                                    </Card.Text>
                                    <Card.Text className="price">
                                        <span><b>Quantity:  {value.quantity}</b></span>
                                    </Card.Text>
                                    <Card.Text className="Date And Time">
                                        <span><b>{value.order_date}</b></span>
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </div>


          ))}
            
            <Footer />
        </div>
    );
}
