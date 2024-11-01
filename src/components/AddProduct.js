import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import Footer from './Footer';
import Navbar2 from './Navbar2';
import Navbar from './Navbar';
import toast, { Toaster } from 'react-hot-toast';
import './addproduct.css'; 

export default function AddProduct() {
  const [state, setState] = useState({
    name: '',
    description: '',
    price: '',
    quantity: '',
    image: '',
    login_id: localStorage.getItem('login_id') 
  });

  const [errorMessage, setErrorMessage] = useState({});

  const inputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setState({ ...state, [name]: value });
  };

  const validate = () => {
    const error = {};
    if (state.name === '') error.name = 'Enter product name';
    if (state.description === '') error.description = 'Enter description';
    if (state.price === '') error.price = 'Enter price';
    if (state.quantity === '') error.quantity = 'Enter quantity';
    if (state.image === '') error.image = 'Upload Image';

    setErrorMessage(error);
    return Object.keys(error).length === 0;
  };

  const submit = (event) => {
    event.preventDefault();

    if (!validate()) return;

    const data = new FormData();
    data.append('name', state.name);
    data.append('description', state.description);
    data.append('price', state.price);
    data.append('quantity', state.quantity);
    data.append('image', state.image);
    data.append('login_id', state.login_id);

    console.log('Submitting Data:', Array.from(data.entries())); 

    axios.post('http://127.0.0.1:8000/add_product_api/', data)
      .then((response) => {
        console.log('Response:', response.data); 
        toast.success('Product added successfully!');
        setState({ name: '', description: '', price: '', quantity: '', image: '', login_id: state.login_id }); 
      })
      .catch((error) => {
        console.error('Error:', error.response ? error.response.data : error); 
        toast.error('Failed to add product.');
      });
  };

  return (
    <div>
      <Navbar />
      <Navbar2 />
      <Toaster />
      
      <Container fluid className="my-5">
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <div className="card p-4 custom-card">
              <h3 className="text-center mb-4">Add Product</h3>
              <Form onSubmit={submit}>
                <Form.Group controlId="formProductName">
                  <Form.Label className={errorMessage.name ? 'text-danger' : ''}>
                    {errorMessage.name ? errorMessage.name : 'Product Name'}
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter product name"
                    name="name"
                    onChange={inputChange}
                    className="custom-input"
                  />
                </Form.Group>

                <Form.Group controlId="formProductDescription">
                  <Form.Label className={errorMessage.description ? 'text-danger' : ''}>
                    {errorMessage.description ? errorMessage.description : 'Description'}
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter product description"
                    name="description"
                    onChange={inputChange}
                    className="custom-input"
                  />
                </Form.Group>

                <Form.Group controlId="formProductPrice">
                  <Form.Label className={errorMessage.price ? 'text-danger' : ''}>
                    {errorMessage.price ? errorMessage.price : 'Price'}
                  </Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter product price"
                    name="price"
                    onChange={inputChange}
                    className="custom-input"
                  />
                </Form.Group>

                <Form.Group controlId="quantity">
                  <Form.Label className={errorMessage.quantity ? 'text-danger' : ''}>
                    {errorMessage.quantity ? errorMessage.quantity : 'Quantity'}
                  </Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter quantity"
                    name="quantity"
                    onChange={inputChange}
                    className="custom-input"
                  />
                </Form.Group>

                <Form.Group controlId="formProductImage">
                  <Form.Label className={errorMessage.image ? 'text-danger' : ''}>
                    {errorMessage.image ? errorMessage.image : 'Product Image'}
                  </Form.Label>
                  <Form.Control
                    type="file"
                    name="image"
                    onChange={(event) => setState({ ...state, image: event.target.files[0] })}
                    className="custom-input"
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 mt-3 custom-button">
                  Add Product
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
}
