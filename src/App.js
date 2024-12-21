
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login';
import Registration from './pages/Registration';
import Home from './pages/Home';
import AddProduct from './components/AddProduct';
import Navbar from './components/Navbar';
import Navbar2 from './components/Navbar2';
import Viewproduct from './components/Viewproduct'
import SingleViewProduct from './components/SingleViewProduct';
import Footer from './components/Footer';
import Shopregistration from './components/Shopregistration';
import Cartbag from './components/Cartbag';
import Wishlist from './components/Wishlist';
import Payment from './pages/Payment';
import EditProfileUser from './pages/EditProfileUser';
import Shop from './components/Shop';
import Userprofile from './components/Userprofile';
import Place_order from './components/Place_order';
import Shopprofile from './pages/Shopprofile';
import Edit_shopprofile from './pages/Edit_shopprofile';
import Shopownproduct from './pages/Shopownproduct';
import Editproduct from './pages/Editproduct';
import Shopaddproduct from './pages/Shopaddproduct';


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
          <Route path='/singleviewproduct/:id' element={<SingleViewProduct/>}/>
          <Route path='/shopregistration' element={<Shopregistration/>}/>
          <Route path='/cart'element={<Cartbag/>}/>
          <Route path='/wishlist'element={<Wishlist/>}/>
          <Route path='/payment'element={<Payment/>}/>
          <Route path='/shop'element={<Shop/>}/>
          <Route path='/userprofile'element={<Userprofile/>}/>
          <Route path='/placeorder'element={<Place_order/>}/>
          <Route path='/editprofile/:id'element={<EditProfileUser/>}/>
          <Route path='/shopprofile'element={<Shopprofile/>}/>
          {/* <Route path='/editshopprofile'element={<Edit_shopprofile/>}/> */}
          <Route path="/editshopprofile/:id" element={<Edit_shopprofile />} />

          <Route path='/shopownproduct'element={<Shopownproduct/>}/>
          <Route path='/editproduct/:id'element={<Editproduct/>}/>
          <Route path='/shopaddproduct'element={<Shopaddproduct/>}/>
          
          

          

          




          
          
        </Routes>
      </BrowserRouter>
    );
  }

export default App;
