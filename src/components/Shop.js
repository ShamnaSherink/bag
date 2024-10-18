import React, { useEffect, useState } from 'react'
import './shop.css'
import { Navbar } from 'react-bootstrap'
import Navbar2 from './Navbar2'
import axios from 'axios'

export default function Shop() {
const [shop,setShop]=useState([])
console.log("shop",shop);

useEffect(()=>{
  axios.get(`http://127.0.0.1:8000/view_shop_api/`).then((response)=>{
    console.log(response);
    setShop(response.data)
  
    
  }).catch((error) => {
    console.error('', error);
  });
},[])

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
<Navbar2/>




         <div className="shop-container">
         {shop.map((value,index)=>(
          <>
             < header className="shop-header">

             <h1>{value.shop_name}</h1>
             <p>Address: Mukkam, Calicut, India</p>
             <p>Phone: +91 9876543210</p>
           </header>
           <section className="product-section">
             <h2>Our Products</h2>
             <div className="product-grid">
               <div className="product-card">
                 <img src="" alt="" className="product-image" />
                 <p>Product 1</p>
               </div>
               <div className="product-card">
                 <img src="" alt="" className="product-image" />
                 <p>Product 2</p>
               </div>
               <div className="product-card">
                 <img src="" alt="" className="product-image" />
                 <p>Product 3</p>
               </div>
               <div className="product-card">
                 <img src="" alt="" className="product-image" />
                 <p>Product 4</p>
               </div>
             </div>
           </section>
</>
         ))}
      
      </div> 
    </div>
  )
}
