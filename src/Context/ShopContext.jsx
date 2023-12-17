import React, { createContext, useState, useEffect } from 'react';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index <100; index++) {
      cart[index] = 0;
    }
    return cart;
  }

const AccessToken="zLzKlRzPSdEKJIXYwBSYYgDuBW3bztKv";

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [isloggedin, setLoggedIn] = useState(false);
  const [products, setProducts] = useState([]);
  //const [user,setUser]=useState(null);
  
 



  const getTotalCartItem = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  }

  

  
  const getProducts = () => {
    try {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${AccessToken}`);

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      fetch("https://api.us-east-2.aws.commercetools.com/practice-1/products?limit=50", requestOptions)
        .then(response => response.json())
        .then(result => {
          setProducts(result.results);
        })
          .catch(error => console.log('error', error));
          
        } catch (error) {
            console.log(error);
        }
    }


  useEffect(() => {
    getProducts();
  }, []);

  const contextValue = {products,cartItems, getTotalCartItem,isloggedin,setLoggedIn,AccessToken};

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider;

