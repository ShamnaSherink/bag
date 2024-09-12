
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login';
import Registration from './pages/Registration';
import Bagnavbar from './components/Bagnavbar';
import Bagnavbar2 from './components/Bagnavbar2';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/user-registration' element={<Registration/>}/>
        <Route path='/nav' element={<Bagnavbar/>}/>
        <Route path='/navbar' element={<Bagnavbar2/>}/>
        <Route path='/' element={<Home/>}/>


        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
