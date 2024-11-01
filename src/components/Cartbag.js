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
import { Toaster, toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

export default function Cartbag() {
  const [viewCart, setViewCart] = useState([]);  
  const discount = 100; 
  const navigate = useNavigate();
  console.log("viewCart==>",viewCart);
  
  useEffect(() => {
    const login_id = JSON.parse(localStorage.getItem('login_id'));
    console.log(login_id);

    axios.get(`http://127.0.0.1:8000/view_cart_api/${login_id}`)
      .then((response) => {
        console.log(response);
        
        const cartData = Array.isArray(response.data.cart_items) ? response.data.cart_items : [];  
        console.log('Cart response:', cartData); 
        setViewCart(cartData);  
      })
      .catch((error) => {
        console.error('Error fetching cart:', error);
        toast.error('Failed to load cart');
      });
  }, []);

  const handleIncrease = (id) => {
    console.log(id);
    const cart = {
      cart_id: id
    };
    axios.post(`http://127.0.0.1:8000/increment_quantity_api/`, cart)
      .then((response) => {
        console.log(response);
        const datafilter = viewCart.map((value) => {
          if (value.id === id) {
            value.quantity += 1;  // Increment quantity
          }
          return value;
        });
        setViewCart(datafilter);
      })
      .catch((error) => {
        console.error('Error updating quantity:', error);
        toast.error('Failed to update quantity');
      });
  };

  const handleDecrease = (id) => {
    console.log(id);
    const cart = {
      cart_id: id
    };
    axios.post(`http://127.0.0.1:8000/decrement_quantity_api/`, cart)
      .then((response) => {
        console.log(response);
        const datafilter = viewCart.map((value) => {
          if (value.id === id) {
            value.quantity -= 1;  // Decrement quantity
          }
          return value;
        });
        setViewCart(datafilter);
      })
      .catch((error) => {
        console.error('Error updating quantity:', error);
        toast.error('Failed to update quantity');
      });
  };

  const handleDelete = (cart_id) => {
    axios.delete(`http://127.0.0.1:8000/delete_cart_api/${cart_id}`)
      .then((response) => {
        console.log('Delete response:', response.data);
        setViewCart(viewCart.filter((item) => item.id !== cart_id));  
        toast.success('Item removed from cart');
      })
      .catch((error) => {
        console.error('Error deleting item:', error);
        toast.error('Failed to remove item');
      });
  };

  const checkout = () => {
    navigate('/payment');  
  };

  const calculateSubtotal = () => {
    return (Array.isArray(viewCart) ? viewCart : [])
      .reduce((acc, item) => acc + (item.product_details?.price * item.quantity), 0)
      .toFixed(2);
  };

  const calculateTotal = () => {
    return (calculateSubtotal() - discount).toFixed(2);
  };

  return (
    <div>
      <Navbar />
      <Navbar2 />
      <Toaster />
      <Container>
        <h2 className="text-center">Shopping Cart</h2>
        <Row>
          <Col md={8} sm={12}>
            {viewCart.length > 0 ?  
              viewCart.map((item, index) => (
                <Card key={index} className="border-0 shadow p-3 mb-4 bg-white rounded">
                  <Row>
                    <Col md={6} sm={12} className="image-section">
                      <img
                        src={item.product_details?.image || ""} 
                        className="img-fluid product-image"
                        alt={item.product_details?.name || "Product"}
                      />
                    </Col>
                    <Col md={6} sm={12} className="details-section">
                      <Card.Body>
                        <Card.Title className="brand-name">{item.product_details?.name || "Product Name"}</Card.Title>
                        <Card.Text className="price">
                          <span><b>Rs.{item.product_details?.price || 0}</b></span> 
                        </Card.Text>
                        <div className="quantity-control d-flex align-items-center">
                          <Button variant="light" onClick={() => handleDecrease(item.id)} className="me-2">
                            <FaMinus />
                          </Button>
                          <span className="quantity">{item.quantity}</span>
                          <Button variant="light" onClick={() => handleIncrease(item.id)} className="ms-2">
                            <FaPlus />
                          </Button>
                        </div>
                        <br />
                        <Card.Text>
                          <span><b>Total Price: Rs. {item.product_details?.price * item.quantity}</b></span> 
                        </Card.Text>
                        <Button variant="danger" onClick={() => handleDelete(item.id)} className="mt-3">
                          <FaTrashAlt /> Delete
                        </Button>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              )) : (
              <div className="text-center">Your cart is empty.</div>
            )}
          </Col>

          <Col md={4} sm={12}>
            <Card className="border-0 shadow p-3 mb-4 bg-white rounded">
              <Card.Body>
                <h4>Order Summary</h4>
                <div className="d-flex justify-content-between">
                  <span>Subtotal</span>
                  <span>Rs. {calculateSubtotal()}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Discount</span>
                  <span>- Rs. {discount.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span><strong>Total</strong></span>
                  <span><strong>Rs. {calculateTotal()}</strong></span>
                </div>
                <Button variant="primary" className="mt-3 w-100" onClick={checkout}>Proceed to Checkout</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
