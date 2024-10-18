import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import Footer from './Footer';
import Navbar2 from './Navbar2';
import Navbar from './Navbar';
import toast, { Toaster } from 'react-hot-toast';

export default function AddProduct() {
  const [state, setState] = useState({
    name: '',
    description: '',
    price: '',
    quantity: '',
    image: ''
  });
  console.log(state);

  const [errorMessage, setErrorMessage] = useState({});

  const inputChange = (event) => {
    const { name, value, type, files } = event.target;
    if (type === 'file') {
      setState({ ...state, [name]: files[0] });
    } else {
      setState({ ...state, [name]: value });
    }
  };

  const validate = () => {
    const error = {};

    if (state.name === '') {
      error.name = 'Enter product name';
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
    if (!state.image) {
      error.image = 'Upload an image';
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

    const formData = new FormData();
    formData.append('name', state.name);
    formData.append('description', state.description);
    formData.append('price', state.price);
    formData.append('quantity', state.quantity);
    formData.append('image', state.image);

    axios.post('http://127.0.0.1:8000/add_product_api/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((response) => {
        console.log('response==>', response);
        // toast.success(response.data.message)
      })
      .catch((error) => {
        console.log('error==>', error);
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
            <div style={{ borderRadius: '70px', width: '500px', justifyContent: 'center' }} className="card p-4">
              <h3 className="text-center">Add Product</h3>
              <Toaster />
              <Form onSubmit={submit}>
                <Form.Group controlId="formProductName">
                  <Form.Label style={{ color: errorMessage.name ? 'red' : '' }}>
                    {errorMessage.name ? errorMessage.name : 'Product Name'}
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter product name"
                    name="name" // Corrected this line
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

                <Form.Group controlId="formProductImage">
                  <Form.Label style={{ color: errorMessage.image ? 'red' : '' }}>
                    {errorMessage.image ? errorMessage.image : 'Product Image'}
                  </Form.Label>
                  <Form.Control
                    type="file"
                    name="image"
                    onChange={inputChange}
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
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
