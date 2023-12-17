import React, { useContext } from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import userprofile from '../Assets/userprofile.png'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {

  const {getTotalCartItem,isloggedin} =useContext(ShopContext);

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className='nav-menu'>
        <li className='hr'><Link to="/" style={{textDecoration:'none'}}>Shop</Link></li>
        <li className='hr'><Link to="/mens" style={{textDecoration:'none'}}>Men</Link></li>
        <li className='hr'><Link to="/womens" style={{textDecoration:'none'}}>Women</Link></li>
        <li className='hr'><Link to="/kids" style={{textDecoration:'none'}}>Kids</Link></li>
      </ul>
      {/* <div className='nav-login-cart'>
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt=""/></Link>
            <div className='nav-cart-count'>{getTotalCartItem()}</div>
      </div> */}
      {(isloggedin)?
        <div className='nav-login-cart'>
          <Link to='/'><button>Logout</button></Link>
          <Link to='/cart'><img src={cart_icon} alt=""/></Link>
          <div className='nav-cart-count'>{getTotalCartItem()}</div>
          <Link to='/user'><img src={userprofile} alt="" style={{height:"50px",width:"50px"}}/></Link>
        </div>:
        <div className='nav-login-cart'>
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt=""/></Link>
            <div className='nav-cart-count'>{getTotalCartItem()}</div>
        </div>
        
      }
    </div>
  )
}

export default Navbar

