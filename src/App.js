
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login';
import Registration from './pages/Registration';
import Home from './pages/Home';
import AddProduct from './components/AddProduct';
import Navbar from './components/Navbar';
import Navbar2 from './components/Navbar2';
import Viewproduct from './components/Viewproduct'
import Viewprofile from './components/Viewprofile';
import SingleViewProduct from './components/SingleViewProduct';
import Footer from './components/Footer';
import Shopregistration from './components/Shopregistration';
import Cartbag from './components/Cartbag';
import Wishlist from './components/Wishlist';


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/user-registration' element={<Registration/>}/>
          <Route path='/navbar' element={<Navbar/>}/>
          <Route path='/navbar2' element={<Navbar2/>}/>
          <Route path='/footer' element={<Footer/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/addproduct' element={<AddProduct/>}/>
          <Route path='/viewproduct' element={<Viewproduct/>}/>
          <Route path='/viewprofile' element={<Viewprofile/>}/>
          <Route path='/singleviewproduct/:id' element={<SingleViewProduct/>}/>
          <Route path='/shopregistration' element={<Shopregistration/>}/>
          <Route path='/cart'element={<Cartbag/>}/>
          <Route path='/wishlist'element={<Wishlist/>}/>
          
          

          

          




          
          
        </Routes>
      </BrowserRouter>
    );
  }

export default App;
