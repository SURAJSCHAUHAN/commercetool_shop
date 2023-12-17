import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_null_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const {product}=props;
    const {addToCart}=useContext(ShopContext);

  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            <img src={product.masterData.current.masterVariant.images[0].url} alt="" />
            <img src={product.masterData.current.masterVariant.images[1].url} alt="" />
            <img src={product.masterData.current.masterVariant.images[2].url} alt="" />
            <img src={product.masterData.current.masterVariant.images[3].url} alt="" />
        </div>
        <div className='productdisplay-main-img'>
            <img src={product.masterData.current.masterVariant.images[0].url} alt="" style={{height:"600px",width:"450px"}}/>
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.masterData.current.name['en-US']}</h1>
        <div className="productdisplay-star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_null_icon} alt="" />
            <p>(122)</p>
        </div>
        <div className="productdisplay-prices">
            <div className="productdisplay-new-price">
                ${product.masterData.current.masterVariant.prices[0].value.centAmount}
            </div>
        </div>
        <div className="productdisplay-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem reiciendis praesentium exercitationem sunt vero, consequuntur quisquam fugiat. Explicabo neque totam, nostrum officia, sequi consectetur, voluptatum assumenda reprehenderit deleniti nemo accusamus.
        </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        <p className='productdisplay-category'><span>Category:</span>Women, T-Shirt, Crop Top</p>
        <p className='productdisplay-category'><span>Tags:</span>Modern, Latest</p>
      </div>
    </div>
  )
}

export default ProductDisplay
