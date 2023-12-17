import React,{useContext, useState,useEffect} from 'react'
import './CSS/LoginSignUp.css'
import {Link} from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'
import { useNavigate } from 'react-router-dom'


const LoginSignUp = () => {

  const {AccessToken,setLoggedIn} =useContext(ShopContext);
  
  const navigate=useNavigate();
  
  const [user,setUser]=useState({});
  const [useremail,setUserEmail]=useState('');
  const [userpassword,setUserPassword]=useState('');
  var userDetails;

    const handleEmail=(e)=>{
        setUserEmail(e.target.value);
    }
    const handlePassword=(e)=>{
        setUserPassword(e.target.value);
    }

    const loginCustomer = async () => {
      try {
              var myHeaders = new Headers();
              myHeaders.append("Content-Type", "application/json");
              myHeaders.append("Authorization", `Bearer ${AccessToken}`);
        
              var raw = JSON.stringify({
                "email": useremail,
                "password": userpassword,
              });
        
              var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow',
              };
        
            const response = await fetch("https://api.us-east-2.aws.commercetools.com/practice-1/me/login", requestOptions);
            const result = await response.json();
            
            if (response.ok) {
              console.log("result",result);
              setUser(result);
              window.alert("Login Successfully!");
              setLoggedIn(true);
              navigate('/'); 
            } else {
              console.log(result);
              window.alert("Login Failed!");
              navigate(0);
            }
          } catch (error) {
            console.log(error);
          }
    };
    useEffect(() => {
      if (user !== null) {
        console.log("useDetails is: ", user);
      }
    }, [user]);

  return (
    <div className='login'>
      <div className='login-container'>
        <h1>Login</h1>
        <div className='login-fields'>
            <input type="email" value={useremail} placeholder='Email' onChange={handleEmail}/>
            <input type="password" value={userpassword} placeholder='Password' onChange={handlePassword}/>
        </div>
        <div className='login-agree'>
            <input type="checkbox" name='' id=''/>
            <p>By continuing, I agree to the terma of use & privacy policy.</p>
        </div>
        <button onClick={loginCustomer}>Login</button>
        <p className='login-login'>New User? <span> <Link to='/signup' style={{textDecoration:'none'}}>SignUp here!</Link> </span></p>
      </div>
    </div>
  )
}

export default LoginSignUp;













