import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router'
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProduct from '../Components/RelatedProduct/RelatedProduct';

const Product = () => {
  const {products}=useContext(ShopContext);
  const {productId}=useParams();
  const product =products.find((e)=> e.id === productId);
  
  return (
    <div>
       <Breadcrum product={product}/>
       <ProductDisplay product={product}/>
       <DescriptionBox/>
       <RelatedProduct/>
    </div>
  )
}

export default Product
