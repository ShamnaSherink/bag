import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import Navbar from './Navbar';
import Navbar2 from './Navbar2';
import Footer from './Footer';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function Wishlist() {
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    bagWishlist();
  }, []);

  const bagWishlist = () => {
    const login_id = JSON.parse(localStorage.getItem('login_id'));
    axios.get(`http://127.0.0.1:8000/view_wishlist_api/${login_id}`)
      .then((response) => {
        setWishlist(response.data.wishlists);  
      })
      .catch((error) => {
        console.error('Error fetching wishlist:', error);
        toast.error('Failed to load wishlist');
      });
  };

  const cartProduct = (id) => {
    const data = {
      user_id: JSON.parse(localStorage.getItem('login_id')),
      product_id: id,
    };
    axios.post(`http://127.0.0.1:8000/add_cart_api/`, data)
      .then((res) => {
        console.log(res.data.message);
        toast.success(res.data.message);
        bagWishlist();  
        navigate('/cart'); 
      })
      .catch((error) => {
        console.error('Error adding product to cart:', error);
        toast.error('Error adding product to cart');
      });
  };

  return (
    <div>
      <Navbar />
      <Navbar2 />
      <Toaster />
      <div className="container mt-5">
        <h2 style={{color:'black'}} className="text-center">Your Wishlist</h2>

        <div className="row">
          {wishlist.length > 0 ? (
            wishlist.map((value, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <Card style={{ width: '100%' }}>
                  <Card.Img
                    variant="top"
                    src={value.product_details.image}
                    alt={value.product_details.name}
                  />
                  <Card.Body>
                    <Card.Title>{value.product_details.name}</Card.Title>
                    <Card.Text>Rs. {value.product_details.price}</Card.Text>
                    <Button
                      variant="danger"
                      onClick={() => cartProduct(value.product_id)}  
                    >
                      Add To Cart
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            ))
          ) : (
            <div className="text-center">No items in your wishlist</div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
