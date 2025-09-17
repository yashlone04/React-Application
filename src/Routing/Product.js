import React from 'react'
import { useState } from 'react'
import {ProductsInfo} from './ProductsInfo'
import { Link } from 'react-router-dom'

const Product = () => {
    var [items, setItems] = useState(ProductsInfo)
  return (
    <div>
        {items.map((item)=>{
            // return (<SingleProduct item={item}/>)
            return(
            <div>
                <h3>{item.name}</h3>
                <Link to={`/product/${item.id}`}>View Details</Link>
            </div>
            )
        })}
      
    </div>
  )
}

export default Product
