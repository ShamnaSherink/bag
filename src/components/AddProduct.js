import React, { useState } from 'react'
import { FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa'; 
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SplitButton from 'react-bootstrap/SplitButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Footer from './Footer';
import Navbar2 from './Navbar2';
import Navbar from './Navbar';



export default function AddProduct() {

  const [state, setState] = useState({
    productname: '',
    description: '',
    price: '',
    quantity:'',
    // product_image_URL: ''
  });
  console.log("state==>",state);
  

  const [errorMessage, setErrorMessage] = useState({});
  

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
    // if (!state.product_image_URL) {
    //   error.product_image_URL = 'Upload product image';
    // }

    setErrorMessage(error);
    return Object.keys(error).length === 0;
  };

  const submit = (event) => {
    event.preventDefault();
    console.log('hello');
    
    if (!validate()) {
      console.log('Validation error');
      return;
    }
    axios.post('http://127.0.0.1:8000/add_product_api/', state).then((response) => {
      console.log('response==>',response);

  }).catch((error) => {
      console.log('error==>',error);

  })

    console.log('Form submitted successfully:', state);
  };

  return (
    <div>

      {/* NAVBAR */}
     <Navbar/>
      {/* Main Navbar */}
      <Navbar2/>

      {/* Add Product Form */}
      <Container fluid className="my-5">
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <div style={{borderRadius:'70px',width:'500px',justifyContent:'center'}} className="card p-4">
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

                <>
      {/* <div >
        <DropdownButton
          as={ButtonGroup} 
          align={{ lg: 'end' }}
          title="Left-aligned but right aligned when large screen"
          id="dropdown-menu-align-responsive-1"
        >
          <Dropdown.Item eventKey="1">Action 1</Dropdown.Item>
          <Dropdown.Item eventKey="2">Action 2</Dropdown.Item>
        </DropdownButton>
      </div> */}
      
   </>


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
                    placeholder="" 
                    name="price" 
                    onChange={inputChange} 
                  />
                </Form.Group>
           
<br></br>
{/* <Form.Group controlId="formProducturl">
                  <Form.Label style={{ color: errorMessage.price ? 'red' : '' }}>{errorMessage.product_image_URL ? errorMessage.product_image_URL : 'Image'}
                  </Form.Label>
                  <Form.Control 
                    type="file" 
                    placeholder="Choose File" 
                    name="product_Image_URL" 
                    onChange={inputChange} 
                  />
                </Form.Group> */}
<br></br>                  
                <Button variant="primary" type="submit" className="" onClick={submit}>
                  Add Product
                  </Button>


            </div>
          </Col>
        </Row>
      </Container>

      {/* FOOTER */}
      <Footer/>
    </div>
  )
}
