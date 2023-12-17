
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCatagory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignUp from './Pages/LoginSignUp';
import SignUp from './Pages/SignUp';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';
import UserProfile from './Pages/UserProfile';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/mens' element={<ShopCatagory category="efbf1df8-c53c-4fbd-9bc0-13e4c8750e9b" banner={men_banner}/>}/>
          <Route path='/womens' element={<ShopCatagory category="858d8a4e-2a25-4b37-9d94-de11537e3839" banner={women_banner}/>}/>
          <Route path='/kids' element={<ShopCatagory category="64ebb9c2-3598-49bf-8d85-04b1a0cd7696" banner={kid_banner}/>}/>
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignUp/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/user' element={<UserProfile/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App

