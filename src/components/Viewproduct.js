import React, { useEffect, useState } from 'react';
import './viewproduct.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar2 from './Navbar2';
import Footer from './Footer';

export default function Viewproduct() {
  const navigate = useNavigate();
  const [state, setState] = useState([]);
  console.log(state);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/view_product_api/')
      .then((response) => {
        console.log(response.data);
        setState(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const singleProduct = (id) => {
    navigate(`/singleviewproduct/${id}`);
  };

  const addWishlist = async (id) => {
    const wishlistValue = {
      login_id: JSON.parse(localStorage.getItem('login_id')),
      product_id: id,
    };

    try {
       axios.post('http://127.0.0.1:8000/add_wishlist_api/', wishlistValue).then((response)=>{
        console.log('Wishlist response:', response.data);
      }); 
      
    } catch (error) {
      console.error('Error adding to wishlist:', error);
    }
  };

  const addCart = (id) => {
    console.log('Add to cart:', id);
  };

  return (
    <div>
      <Navbar2 />
      <div className="container mt-5">
        <h2 className="text-center">PRODUCTS</h2>
        <div className="row">
          {state.map((value) => (
            <div key={value.id} className="col-md-3">
              <div className="card">
                <img 
                  onClick={() => singleProduct(value.id)}
                  src={`/backend${value.image}`} 
                  className="card-img-top"
                  alt={value.image ? value.image : "Product Image"}
                />
                <div className="card-body text-center">
                  <h5 
                    className="card-title" 
                    style={{ fontSize: '20px' }} 
                  >
                    {value.productname ? value.productname : "Check-In Luggage"}
                  </h5>
                  <p className="card-text">Rs. {value.price ? value.price : "2,780.00"}</p>
                  <i 
                    style={{ fontSize: '20px' }} 
                    className="fa-solid fa-cart-shopping" 
                    onClick={() => addCart(value.id)}
                  ></i>
                  <i 
                    style={{ marginLeft: '25px', fontSize: '23px' }} 
                    className="fa-regular fa-heart" 
                    onClick={() => addWishlist(value.id)}
                  ></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
