import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { ProductsInfo } from './ProductsInfo';

const SingleProduct = ({item}) => {
var {productId}=useParams();
var item = ProductsInfo.find((product)=>{
    return product.id === parseInt(productId);
})
  return (
    <div style={{border:"2px solid black",margin:"10px",padding:"10px"}}>
      <h3>Id:{item.id}</h3>
      <h3>Name:{item.name}</h3>
      <img src= {item.image} alt='Img Not Found' width="200px"/>
      <h3>Price:{item.price}</h3>
      <img style={{width:"200px",hight:"150"}} src= {item.image} alt='Img Not Found'/>
  <Link to="/product">Go to Products</Link>
    </div>
  )
}

export default SingleProduct
