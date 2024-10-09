import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import Footer from './Footer';
import Navbar2 from './Navbar2';
import Navbar from './Navbar';
import { FaHeart } from 'react-icons/fa'; // Import heart icon

export default function AddProduct() {
  const [state, setState] = useState({
    productname: '',
    description: '',
    price: '',
    quantity: '',
    // product_image_URL: ''
  });

  const [errorMessage, setErrorMessage] = useState({});
  const [wishlistMessage, setWishlistMessage] = useState('');

  const inputChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const validate = () => {
    const error = {};
    
    if (state.productname === '') {
      error.productname = 'Enter product name';
    }
    if (state.description === '') {
      error.description = 'Enter description';
    }
    if (state.price === '') {
      error.price = 'Enter price';
    }
    if (state.quantity === '') {
      error.quantity = 'Enter quantity';
    }

    setErrorMessage(error);
    return Object.keys(error).length === 0;
  };

  const submit = (event) => {
    event.preventDefault();
    
    if (!validate()) {
      console.log('Validation error');
      return;
    }

    axios.post('http://127.0.0.1:8000/add_product_api/', state)
      .then((response) => {
        console.log('response==>', response);
      })
      .catch((error) => {
        console.log('error==>', error);
      });

    console.log('Form submitted successfully:', state);
  };

  const addToWishlist = () => {
    const wishlistData = {
      productid: state.productname, // Assuming product ID is the same as the product name for demo purposes
      userid: JSON.parse(localStorage.getItem('login_id')) // Replace with actual user ID from local storage
    };

    axios.post('http://127.0.0.1:8000/add_wishlist_api/', wishlistData)
      .then((response) => {
        console.log('Wishlist response==>', response);
        setWishlistMessage('Product added to wishlist successfully!');
      })
      .catch((error) => {
        console.log('Error adding to wishlist==>', error);
        setWishlistMessage('Failed to add to wishlist.');
      });
  };

  return (
    <div>
      {/* NAVBAR */}
      <Navbar />
      {/* Main Navbar */}
      <Navbar2 />

      {/* Add Product Form */}
      <Container fluid className="my-5">
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <div style={{ borderRadius: '70px', width: '500px', justifyContent: 'center' }} className="card p-4">
              <h3 className="text-center">Add Product</h3>

              <Form.Group controlId="formProductName">
                <Form.Label style={{ color: errorMessage.productname ? 'red' : '' }}>
                  {errorMessage.productname ? errorMessage.productname : 'Product Name'}
                </Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter product name" 
                  name="productname" 
                  onChange={inputChange} 
                />
              </Form.Group>

              <Form.Group controlId="formProductDescription">
                <Form.Label style={{ color: errorMessage.description ? 'red' : '' }}>
                  {errorMessage.description ? errorMessage.description : 'Description'}
                </Form.Label>
                <Form.Control 
                  as="textarea" 
                  rows={3} 
                  placeholder="Enter product description" 
                  name="description" 
                  onChange={inputChange} 
                />
              </Form.Group>

              <Form.Group controlId="formProductPrice">
                <Form.Label style={{ color: errorMessage.price ? 'red' : '' }}>
                  {errorMessage.price ? errorMessage.price : 'Price'}
                </Form.Label>
                <Form.Control 
                  type="number" 
                  placeholder="Enter product price" 
                  name="price" 
                  onChange={inputChange} 
                />
              </Form.Group>

              <Form.Group controlId="quantity">
                <Form.Label style={{ color: errorMessage.quantity ? 'red' : '' }}>
                  {errorMessage.quantity ? errorMessage.quantity : 'Quantity'}
                </Form.Label>
                <Form.Control 
                  type="number" 
                  placeholder="Enter quantity" 
                  name="quantity" 
                  onChange={inputChange} 
                />
              </Form.Group>

              <Button variant="primary" type="submit" onClick={submit}>
                Add Product
              </Button>
              <Button variant="outline-danger" onClick={addToWishlist} style={{ marginLeft: '10px' }}>
                <FaHeart /> Add to Wishlist
              </Button>
              {wishlistMessage && <div className="mt-3">{wishlistMessage}</div>}
            </div>
          </Col>
        </Row>
      </Container>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
