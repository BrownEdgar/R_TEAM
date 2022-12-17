import React from 'react'

export default function Product({product}) {
  return (
    <div>
        <h2>{product.title}</h2>
        <img src={product.image} alt="" />
        
    </div>
  )
}
