import React, { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import './navbar2.css';
import { FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Navbar2() {
  const navigate = useNavigate();

  const [role, setRole] = useState(JSON.parse(localStorage.getItem('role')));
  const [searchVisible, setSearchVisible] = useState(false); 
  const [searchTerm, setSearchTerm] = useState(''); 

  const logout = () => {
    localStorage.clear();
    window.location.reload()
    navigate('/login');

  };

const login=()=>{
  navigate('/login')
}


  const carticon = () => {
    navigate('/cart');
  };

  const goToWishlist = () => {
    navigate('/wishlist'); 
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    
    console.log('Searching for:', searchTerm); 
    setSearchVisible(false);  
  };

  return (
    <div>
      
      <Navbar expand="lg" className="bg-white" variant="light">
        <Container>
          <Navbar.Brand href="/" className="d-flex align-items-center">
            <div style={{ backgroundColor: 'white', padding: '5px 10px', border: '1px solid black' }}>JOOT</div>
            <div style={{ backgroundColor: 'black', padding: '5px 10px', color: 'white' }}>BAG</div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-nav" />
          {role==='user'?(
            <>
          <Navbar.Collapse id="navbar-nav" className="justify-content-center">
          <Nav className="mx-auto">
            <Nav.Link href="/" className="text-dark">Home</Nav.Link>
            <Nav.Link href="/viewproduct" className="text-dark">Products</Nav.Link>
            <Nav.Link href="/shop" className="text-dark">Shops</Nav.Link>
            <Nav.Link href="userprofile" className="text-dark">Profile</Nav.Link>
            <Nav.Link href="/placeorder" className="text-dark">My Orders</Nav.Link>

            <Nav.Link  className="text-dark">
              <button style={{ backgroundColor: 'black', color: 'white', padding: 'px' }} onClick={logout}>Logout</button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
           <div className="d-flex align-items-center">
           <FaSearch className="me-3" size={20} onClick={() => setSearchVisible(!searchVisible)} style={{ cursor: 'pointer' }} />
           {searchVisible && (
             <form onSubmit={handleSearchSubmit} className="d-flex me-3">
               <input
                 type="text"
                 placeholder="Search..."
                 value={searchTerm}
                 onChange={handleSearchChange}
                 className="form-control"
                 style={{ width: '200px' }} 
               />
               <button type="submit" style={{ backgroundColor: 'black', color: 'white', border: 'none', padding: '5px 10px' }}>
                 Search
               </button>
             </form>
           )}
           <FaHeart className="me-3" size={20} onClick={goToWishlist} style={{ cursor: 'pointer' }} />
           <FaShoppingCart size={20} onClick={carticon} />

         </div>
      
     </>
          ):role==='shop'?(
            <>
            <Navbar.Collapse id="navbar-nav" className="justify-content-center">
            <Nav className="mx-auto"> 
              <Nav.Link href="/" className="text-dark">Home</Nav.Link>
              <Nav.Link href="/shopaddproduct" className="text-dark">Products</Nav.Link>
              <Nav.Link href="/shopprofile" className="text-dark">Profile</Nav.Link>
              <Nav.Link href="/addproduct" className="text-dark">Add Product</Nav.Link>
              <Nav.Link href="/shopownproduct" className="text-dark">My Products</Nav.Link>
              <Nav.Link  className="text-dark">
                <button style={{ backgroundColor: 'black', color: 'white', padding: 'px' }} onClick={logout}>Logout</button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
            
           </>

          ):

        (
          <>
           <Navbar.Collapse id="navbar-nav" className="justify-content-center">
          <Nav className="mx-auto">
            <Nav.Link href="/" className="text-dark">Home</Nav.Link>
            <Nav.Link href="/shop" className="text-dark">Shops</Nav.Link>
            <Nav.Link  className="text-dark">
              <button style={{ backgroundColor: 'black', color: 'white', padding: 'px' }} onClick={login}>Login</button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
         
          
          </>
        )

        }


        </Container>
      </Navbar>
    </div>
  );
}
