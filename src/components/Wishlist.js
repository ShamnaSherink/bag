import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import Navbar from './Navbar';
import Navbar2 from './Navbar2';
import Footer from './Footer';
import axios from 'axios';
import { FaHeart } from 'react-icons/fa';

export default function Wishlist() {
  const cartProduct = (id) => {
    const data = {
      login_id: JSON.parse(localStorage.getItem('login_id')),
      product_id: id,
    };
    console.log(data);

    axios.post(`http://127.0.0.1:8000/add_cart_api/`, data)
      .then((res) => {
        console.log(res.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [wishlist, setWishlist] = useState([]);
  console.log("wishlist==>", wishlist);

  const addwishlist = (id) => {
    const login_id = JSON.parse(localStorage.getItem('login_id'));
    console.log("loginId==>", login_id);
  };

  useEffect(() => {
    const login_id = JSON.parse(localStorage.getItem('login_id'));
    axios.get(`http://127.0.0.1:8000/view_wishlist_api/${login_id}`)
      .then((response) => {
        console.log(response.data);
        setWishlist(response.data.wishlists);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <Navbar2 />
      <div className="d-flex justify-content-center mt-4">
        {wishlist.map((value, index) => (
          <Card style={{ width: '18rem' }} key={index}>
            <Card.Img variant="top" src={`../../backend/${value.image}`} alt="" />
            <Card.Body>
              <FaHeart
                className="me-3"
                onClick={() => { addwishlist(value.id); }}
                style={{ cursor: 'pointer' }}
              />
              <Card.Title>{value.product_name}</Card.Title>
              <Card.Text></Card.Text>
              <Button variant="danger" onClick={() => { cartProduct(value.id); }}>
                Add To Cart
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
      <Footer />
    </div>
  );
}
