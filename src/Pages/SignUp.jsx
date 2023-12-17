import React, { useContext, useState ,useEffect} from 'react'
import './CSS/LoginSignUp.css'
import {Link} from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'

const SignUp = () => {

  const {AccessToken} = useContext(ShopContext);

    const [userfirstname,setUserFirstName]=useState('');
    const [userlastname,setUserLastName]=useState('');
    const [useremail,setUserEmail]=useState('');
    const [userpassword,setUserPassword]=useState('');
    const[customerId,setCustomerID]=useState(null);
    const [cartId,setCartId]=useState(null);

    const handleFirstName=(e)=>{
        setUserFirstName(e.target.value);
    }
    const handleLastName=(e)=>{
        setUserLastName(e.target.value);
    }
    const handleEmail=(e)=>{
        setUserEmail(e.target.value);
    }
    const handlePassword=(e)=>{
        setUserPassword(e.target.value);
    }

    const createCustomer =()=>{
        try {
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                myHeaders.append("Authorization", `Bearer ${AccessToken}`);

                var raw = JSON.stringify({
                "email": useremail,
                "firstName": userfirstname,
                "lastName": userlastname,
                "password": userpassword
                });

                var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
                };

                fetch("https://api.us-east-2.aws.commercetools.com/practice-1/me/signup", requestOptions)
                  .then(response =>response.json())
                  .then(result => {
                    setCustomerID(result.customer.id);
                    console.log("ResultCustomer: ", result.customer.id);
                  })
                  .catch(error => console.log('error', error));
                  window.alert("Registered Successfully!");
            }catch (error) {
                   console.log(error);         
            }       
    }

    const createCart=()=>{
      try {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Authorization", `Bearer ${AccessToken}`);

            var raw = JSON.stringify({
              "currency": "EUR"
            });

            var requestOptions = {
              method: 'POST',
              headers: myHeaders,
              body: raw,
              redirect: 'follow'
            };

            fetch("https://api.us-east-2.aws.commercetools.com/practice-1/in-store/key=Suraj-Shop/carts", requestOptions)
              .then(response => response.json())
              .then(result => {
                setCartId(result.id);
                console.log("ResultCart: ", result.id);
              })
              .catch(error => console.log('error', error));
          } catch (error) {
            console.log(error);
          }
  }
        useEffect(() => {
                console.log('useCustomer', customerId);
                console.log('useCart', cartId);
              }, [customerId, cartId]);
 
    

  return (
    <div className='login'>
      <div className='login-container'>
        <h1>Create Account</h1>
        <div className='login-fields'>
            <input type="text" value={userfirstname} placeholder='First Name' onChange={handleFirstName} />
            <input type="text" value={userlastname} placeholder='Last Name' onChange={handleLastName} />
            <input type="email" value={useremail} placeholder='Email' onChange={handleEmail}/>
            <input type="password" value={userpassword} placeholder='Password' onChange={handlePassword} />
        </div>
        <div className='login-agree'>
            <input type="checkbox" name='' id=''/>
            <p>By continuing, I agree to the terma of use & privacy policy.</p>
        </div>
        <button onClick={()=>{
          createCustomer();
          createCart();
        }}><Link to='/' style={{textDecoration:'none'}}>Create</Link></button>
        <p className='login-login'>Already hava an Account? <span><Link to='/login' >Login here!</Link></span></p>
        
      </div>
    </div>
  )
}

export default SignUp










// import React, { useContext, useState,useEffect } from 'react'
// import './CSS/LoginSignUp.css'
// import {Link} from 'react-router-dom'
// import { ShopContext } from '../Context/ShopContext'

// const SignUp = () => {

//   const {AccessToken} = useContext(ShopContext);

//     const [userfirstname,setUserFirstName]=useState('');
//     const [userlastname,setUserLastName]=useState('');
//     const [useremail,setUserEmail]=useState('');
//     const [userpassword,setUserPassword]=useState('');
//     const[customerId,setCustomerID]=useState(null);
//     const [cartId,setCartId]=useState(null);

//     const handleFirstName=(e)=>{
//         setUserFirstName(e.target.value);
//     }
//     const handleLastName=(e)=>{
//         setUserLastName(e.target.value);
//     }
//     const handleEmail=(e)=>{
//         setUserEmail(e.target.value);
//     }
//     const handlePassword=(e)=>{
//         setUserPassword(e.target.value);
//     }

//     const createCustomer =()=>{
//         try {
//                 var myHeaders = new Headers();
//                 myHeaders.append("Content-Type", "application/json");
//                 myHeaders.append("Authorization", `Bearer ${AccessToken}`);

//                 var raw = JSON.stringify({
//                 "email": useremail,
//                 "firstName": userfirstname,
//                 "lastName": userlastname,
//                 "password": userpassword
//                 });
//                 var raw1 = JSON.stringify({
//                   "currency": "EUR"
//                 });

//                 var requestOptions = {
//                 method: 'POST',
//                 headers: myHeaders,
//                 body: raw,
//                 redirect: 'follow'
//                 };
//                 var requestOptions1 = {
//                   method: 'POST',
//                   headers: myHeaders,
//                   body: raw1,
//                   redirect: 'follow'
//                 };

//                 fetch('https://api.us-east-2.aws.commercetools.com/practice-1/me/signup', requestOptions)
//                 .then((response) => response.json())
//                 .then((result) => {
//                   setCustomerID(result.customer.id);
//                   console.log('ResultCustomer: ', result.customer.id);
//                 })
//                 .catch((error) => console.log('error', error));
        
//               fetch('https://api.us-east-2.aws.commercetools.com/practice-1/in-store/key=Suraj-Shop/carts', requestOptions1)
//                 .then((response) => response.json())
//                 .then((result) => {
//                   setCartId(result.id);
//                   console.log('ResultCart: ', result.id);
//                 })
//                 .catch((error) => console.log('error', error));
        
//               window.alert('Registered Successfully!');
//             } catch (error) {
//               console.log(error);
//             }
//           };
        
//           useEffect(() => {
//             console.log('useCustomer', customerId);
//             console.log('useCart', cartId);
//           }, [customerId, cartId]);
        

//   return (
//     <div className='login'>
//       <div className='login-container'>
//         <h1>Create Account</h1>
//         <div className='login-fields'>
//             <input type="text" value={userfirstname} placeholder='First Name' onChange={handleFirstName} />
//             <input type="text" value={userlastname} placeholder='Last Name' onChange={handleLastName} />
//             <input type="email" value={useremail} placeholder='Email' onChange={handleEmail}/>
//             <input type="password" value={userpassword} placeholder='Password' onChange={handlePassword} />
//         </div>
//         <div className='login-agree'>
//             <input type="checkbox" name='' id=''/>
//             <p>By continuing, I agree to the terma of use & privacy policy.</p>
//         </div>
//         <button onClick={createCustomer}><Link to='/' style={{textDecoration:'none'}}>Create</Link></button>
//         <p className='login-login'>Already hava an Account? <span><Link to='/login' >Login here!</Link></span></p>
        
//       </div>
//     </div>
//   )
// }

// export default SignUp
