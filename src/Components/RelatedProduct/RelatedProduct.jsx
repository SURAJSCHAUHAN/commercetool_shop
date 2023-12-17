import React, { useContext } from 'react'
import './RelatedProduct.css'
import Item from '../Item/Item'
import { ShopContext } from '../../Context/ShopContext'

const RelatedProduct = () => {

  const {products}=useContext(ShopContext);

  return (
    <div className='relatedproduct'>
        <h1>Related Products</h1>
        <hr />
        <div className="relatedproduct-items">
        {products.map((item)=>{
            if(item.masterData.current.categories[0].id==="6a3bada3-22b5-4013-a030-997e08789539"){
              return <Item key={item.id} id={item.id} name={item.masterData.current.name['en-US']} image={item.masterData.current.masterVariant.images[0].url} new_price={item.masterData.current.masterVariant.prices[0].value.centAmount} />
            }
            else return null;
        })}
        </div>
      
    </div>
  )
}

export default RelatedProduct
