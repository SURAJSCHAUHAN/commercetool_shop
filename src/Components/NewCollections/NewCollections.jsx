import React, { useContext, useEffect, useState } from 'react'
import './NewCollections.css'
import Item from '../Item/Item'
import { ShopContext } from '../../Context/ShopContext'



const NewCollections = () => {

  const {products}=useContext(ShopContext);

  return (
    <div className='new-collections'>
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className="collections">
            {products.map((item,i)=>{
              if(item.masterData.current.categories[0].id==="12c5edd0-e09a-4719-96f2-8c7a12355eee"){
                return <Item key={item.id} id={item.id} name={item.masterData.current.name['en-US']} image={item.masterData.current.masterVariant.images[0].url} new_price={item.masterData.current.masterVariant.prices[0].value.centAmount} />
              } 
            })}            
        </div>
      
    </div>
  )
}

export default NewCollections
   

