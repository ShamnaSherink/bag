import React, { useEffect, useState } from 'react';
import './viewproduct.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar2 from './Navbar2';
import Footer from './Footer';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { getproducts } from '../redux/slice/Productslice';

export default function Viewproduct() {

const  viewproducts=useSelector(state=>state.products.viewproducts)
console.log(viewproducts);

  const dispatch=useDispatch()

  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
console.log(products);

  useEffect(() => {
    dispatch(getproducts())

    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/view_product_api/');
        // setProducts(response.data.data);
      } catch (error) {
        console.error('Error fetching products:', error);
        toast.error('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const singleProduct = (id) => {
    navigate(`/singleviewproduct/${id}`);
  };

  const addWishlist = async (id) => {
    const wishlistData = {
      login_id: JSON.parse(localStorage.getItem('login_id')),
      product_id: id,
    };

    try {
      const response = await axios.post('http://127.0.0.1:8000/add_wishlist_api/', wishlistData);
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response?.data?.message || 'Error adding to wishlist');
    }
  };

  const addCart = async (id) => {
    const cartData = {
      user_id: JSON.parse(localStorage.getItem('login_id')),
      product_id: id,
    };
    console.log(cartData);
    

    try {
      const response = await axios.post('http://127.0.0.1:8000/add_cart_api/', cartData);
      toast.success(response.data.message);
    } catch (error) {
      console.log(error);
      
      toast.error(error.response?.data?.message || 'Error adding to cart');
    }
  };


  return (
    <div>
      <div className="top-navbar d-flex justify-content-between align-items-center px-4">
        <div>Get 1 Product Free With 200.00 $ Order</div>
        <div className="top-links">
          <a href="/" style={{color:'white'}}>Today's Deal</a>
          <a href="/" style={{color:'white'}}>Customer Service</a>
          <a href="/" style={{color:'white'}}>Gift Certificates</a>
        </div>
      </div>
      <Navbar2 />
      <div className="container mt-5">
        <Toaster />
        <h2 className="text-center" style={{color:'black'}}>All Products</h2>

        {loading ? (
          <div className="text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="row">
            {viewproducts.length > 0 ? (
              viewproducts.map((product) => (
                <div key={product.id} className="col-md-3">
                  <div className="card">
                    <img
                      onClick={() => singleProduct(product.id)}
                      src={product.image}
                      className=""
                      alt={product.name || ' '}
                    />
                    <div className="card-body text-center">
                      <h5 className="card-title" style={{ fontSize: '20px' }}>
                        {product.name}
                      </h5>
                      <p className="card-text">Rs. {product.price}</p>
                      <i
                        style={{ fontSize: '20px', cursor: 'pointer' }}
                        className="fa-solid fa-cart-shopping"
                        onClick={() => addCart(product.id)}
                      ></i>
                      <i
                        style={{ marginLeft: '25px', fontSize: '23px', cursor: 'pointer' }}
                        className="fa-regular fa-heart"
                        onClick={() => addWishlist(product.id)}
                      ></i>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center">No products available</div>
            )}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
