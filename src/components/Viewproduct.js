import React, { useEffect, useState } from 'react'
import './viewproduct.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/form';
import Button from 'react-bootstrap/Button';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import Navbar2 from './Navbar2';
import Footer from './Footer';

export default function Viewproduct() {
 const navigate = useNavigate()
 
  const[state,setstate]=useState([])
  console.log(state);

  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/view_product_api/',state).then((response)=>{
      console.log('response==>',response);
      setstate(response.data.data)
      
    }).catch((error)=>{
      console.log('error==>,error',error);
      
    })
  },[])

  const singleProduct = (id)=>{

navigate(`/singleviewproduct/${id}`)

  }
  const addwishlist=(id)=>{
  const whishlistvalue={
    userid:JSON.parse(localStorage.getItem('login_id')),
    productid:id

  }
    axios.post('http://127.0.0.1:8000/add_wishlist_api/',whishlistvalue).then((response)=>{
    console.log(response.data.data);
          

    
  }
).catch((error)=>{
  console.log('error==>,error',error);
  
})
}
const addcart=(id)=>{
const cartvalue={
  userid:JSON.parse(localStorage.getItem('login_id')),
  productid:id
}  
  axios.post(`http://127.0.0.1:8000/add_cart_api/`, cartvalue).then((response)=>{
    console.log(response.data.message);
    // setstate(response.data.data)
    
  }
).catch((error)=>{
  console.log(error);
  
})
}
  return (
    <div>

      {/* NAVBAR:- */}
      <div className="top-navbar d-flex justify-content-between align-items-center px-4">
        <div>Get 1 Product Free With 200.00 $ Order</div>
        <div className="top-links   ">
          <a href="/" style={{ color: 'white' }}>Today's Deal</a>
          <a href="/" style={{ color: 'white' }}>Customer Service</a>
          <a href="/" style={{ color: 'white' }}>Gift Certificates</a>
        </div>
      </div>





      {/* NAVBAR 2:- */}


     <Navbar2/>


      {/* // PRODUCTS BAG:- */}
      <div className="container mt-5">
  <h2 className="text-center">PRODUCTS</h2>
  <div className="row">

    {state.map((value, index) => (
       
      <div key={index} className="col-md-3" >
        <div className="card">
          <img onClick={()=>{singleProduct(value.id)}}
            src={'/assets/shop-3.webp'} 
            className="card-img-top"alt={value.product_Image_URL ? value._product_Image_URL : "Product Image"}/>
          <div className="card-body text-center">
            <h5 className="card-title" style={{ fontSize: '20px' }} onClick={()=>{singleProduct(value.id)}}>
              {value.productname ? value.productname : "Check-In Luggage"}
            </h5>
            <p className="card-text">Rs. {value.price ? value.price : "2,780.00"}</p>
            <i style={{fontSize:'20px'}} class="fa-solid fa-cart-shopping"onClick={()=>{addcart(value.id)}}></i>
            <i style={{marginLeft:'25px',fontSize:'23px'}} class="fa-regular fa-heart" onClick={()=>{addwishlist(value.id)}}></i> 

          </div>
          
        </div>
        
      </div>

    ))}
  </div>
  </div>

        
      <br></br>
      <br></br>

      {/* FOOTER:- */}
      <Footer/>
    </div>




  )
}



