import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png';


const Breadcrum = (props) => {
    const {product}=props;
  return (
    <div className='breadcrum'>
      HOME <img src={arrow_icon} alt="" />SHOP<img src={arrow_icon} alt="" />{product.masterData.current.categories[0].typeId} <img src={arrow_icon} alt="" /> {product.masterData.current.name['en-US']}
    </div>
  )
}

export default Breadcrum
