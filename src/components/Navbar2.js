import React, { useState } from 'react'
import { Navbar, Nav, Container, DropdownButton } from 'react-bootstrap';
import './navbar2.css';
import { NavDropdown } from 'react-bootstrap';
import { FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';



export default function Navbar2() {
  const navigate=useNavigate()

const [role,setRole]=useState(JSON.parse(localStorage.getItem('role')))
console.log(role);

const logout=() =>{
  localStorage.clear()
  navigate('/')
  
}
 const carticon=()=>{
  navigate('/cart')
 }


  return (
    <div>

{
  role=='user' ?

  <Navbar expand="lg" className="bg-white" variant="light">
  <Container>
    <Navbar.Brand href="#home" className="d-flex align-items-center">
      <div style={{ backgroundColor: 'white', padding: '5px 10px', border: '1px solid black' }}>JOOT</div>
      <div style={{ backgroundColor: 'black', padding: '5px 10px', color: 'white' }}>BAG</div>
    </Navbar.Brand>

    <Navbar.Toggle aria-controls="navbar-nav" />

    <Navbar.Collapse id="navbar-nav" className="justify-content-center">
      <Nav className="mx-auto">
        <Nav.Link href="/home" className="text-dark">Home</Nav.Link>
        
        <Nav.Link  href="/viewproduct " className="text-dark">Products</Nav.Link>
        <Nav.Link href="#Shop" className="text-dark">Shops</Nav.Link>
        <Nav.Link href="/viewprofile" className="text-dark">Profile</Nav.Link>
        <Nav.Link  href="#LOGOUT" className="text-dark"><button style={{backgroundColor:'black',color:'white',padding:'px'}} onClick={logout}>Logout</button></Nav.Link>
      </Nav>
    </Navbar.Collapse>

    <div className="d-flex align-items-center">
      <FaSearch className="me-3" size={20} />
      <FaHeart className="me-3" size={20} />
      <FaShoppingCart size={20} href='/Cart'  onClick={carticon} />
    </div>
  </Container>
</Navbar>

: role=='shop' ?

<Navbar expand="lg" className="bg-white" variant="light">
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <div style={{ backgroundColor: 'white', padding: '5px 10px', border: '1px solid black' }}>JOOT</div>
            <div style={{ backgroundColor: 'black', padding: '5px 10px', color: 'white' }}>BAG</div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-nav" />

          <Navbar.Collapse id="navbar-nav" className="justify-content-center">
            <Nav className="mx-auto">
                <Nav.Link href="/home" className="text-dark">Home</Nav.Link>
                <NavDropdown title="Products" id="shop-dropdown" className="text-dark">
                                <NavDropdown.Item href="/addproduct">Add Products</NavDropdown.Item>
                                <NavDropdown.Item href="/viewproduct">View Products</NavDropdown.Item>
                            </NavDropdown>
              <Nav.Link href="#" className="text-dark">Orders</Nav.Link>
              <Nav.Link href="#LOGOUT" className="text-dark"><button style={{ backgroundColor: 'black', color: 'white', padding: 'px' }}  onClick={logout}>Logout  </button></Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <div className="d-flex align-items-center">
            <FaSearch className="me-3" size={20} />
            <FaHeart className="me-3" size={20} />
            <FaShoppingCart size={20} />
          </div>
        </Container>
      </Navbar>

      :

      <Navbar expand="lg" className="bg-white" variant="light">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <div style={{ backgroundColor: 'white', padding: '5px 10px', border: '1px solid black' }}>JOOT</div>
          <div style={{ backgroundColor: 'black', padding: '5px 10px', color: 'white' }}>BAG</div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav" className="justify-content-center">
          <Nav className="mx-auto">
              <Nav.Link href="/home" className="text-dark">Home</Nav.Link>
              <NavDropdown title="Register" id="shop-dropdown" className="text-dark">
                                <NavDropdown.Item href="/user-registration">User Registration</NavDropdown.Item>
                                <NavDropdown.Item href="/shopregistration">Shop Registration</NavDropdown.Item>
                            </NavDropdown>
            <Nav.Link href="/login" className="text-dark"><button style={{ backgroundColor: 'black', color: 'white', padding: 'px' }}>Login</button></Nav.Link>
            {/* <Nav.Link href="" className="text-dark"><button style={{ backgroundColor: 'black', color: 'white', padding: 'px' }}>Register</button></Nav.Link> */}
          </Nav>
        </Navbar.Collapse>

        <div className="d-flex align-items-center">
          <FaSearch className="me-3" size={20} />
          <FaHeart className="me-3" size={20} />
          <FaShoppingCart size={20} />
        </div>
      </Container>
    </Navbar>
}
     



      


    
    </div>
  )
}


