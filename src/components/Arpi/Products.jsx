import React from 'react'


import './Product.scss'

export default function Products({product}) {
  return (
    <div className='Products'>
        <div className='Price'>
            <h4>Price: $ {product.price} </h4>
            <h4>Count:  {product.rating.count}</h4>
        </div>
        <div className="Products-Content">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h3>{product.category}</h3>
        </div>
        <div className='footer'>
            <h5>READ MORE</h5>
            </div>

    </div>
  )
}
