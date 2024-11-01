import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button, Image, Col, Container, Row } from 'react-bootstrap';
import Navbar from '../components/Navbar';
import Navbar2 from '../components/Navbar2';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function Shopprofile() {
    const [shop, setShop] = useState({});
    
    useEffect(() => {
        const login_id = JSON.parse(localStorage.getItem('login_id'));
        
        axios.get(`http://127.0.0.1:8000/view_shop_profile_api/${login_id}`)
            .then((response) => {
                setShop(response.data);
            })
            .catch((error) => {
                console.error("Error fetching shop profile", error);
            });
    }, []);
    
    return (
        <div>
            <Navbar />
            <Navbar2 />
    
            <Container className="mt-5">
                <Row className="justify-content-center">
                    <Col md={8} lg={6}>
                        <Card>
                            <Card.Body className="text-center">
                                {shop.image ? (
                                    <Image 
                                        src={shop.image}
                                        roundedCircle
                                        fluid
                                        className="mb-4 shop-image"
                                        style={{height:'200px',width:'200px'}}
                                        alt="Shop Image"
                                    />
                                ) : (
                                    <p>No image available</p>
                                )}
                                <Card.Title>{shop.shop_name}</Card.Title>
                                <Card.Text>{shop.address}</Card.Text>
                                <Card.Text>{shop.email}</Card.Text>
                                <Card.Text>{shop.phone_number}</Card.Text>
                                
                                <Link to="/editshopprofile">
                                    <Button variant="primary" className="mt-2">Edit Profile</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
    
            <Footer />
        </div>
    );
}
