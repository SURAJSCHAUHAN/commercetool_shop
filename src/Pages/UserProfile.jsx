import React, { useContext } from 'react'
import './CSS/UserProfile.css'
import ShopCategory from './ShopCategory'
import { ShopContext } from '../Context/ShopContext';

const UserProfile = () => {

  const {user} =useContext(ShopContext);
  console.log("User Page Details",user);

  return (
    <div className='userprofile' >
      <h1>USERPROFILE</h1>
      <div className='userprofile-left'>

      </div>
      {/* <div className='userprofile-right'>
        <p>Name: {user.customer.firstName} {user.customer.lastName} </p>
        <p>Email: {user.customer.email} </p>
        <p>Address: {user.customer.addresses}</p>
        <button>Update Address</button>
      </div> */}
    </div>
  )
}

export default UserProfile
