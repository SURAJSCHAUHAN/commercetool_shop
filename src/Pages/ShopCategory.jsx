import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import droppdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'

const ShopCategory = (props) => {
  const {products}=useContext(ShopContext);
 
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-index">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={droppdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {products.map((item,i)=>{
          if(props.category===item.masterData.current.categories[0].id){
            return <Item key={item.id} id={item.id} name={item.masterData.current.name['en-US']} image={item.masterData.current.masterVariant.images[0].url} new_price={item.masterData.current.masterVariant.prices[0].value.centAmount} />
          }else{
            return null;
          }
        })}
      </div>
    </div>
  )
}

export default ShopCategory
