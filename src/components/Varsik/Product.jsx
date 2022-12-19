import React from 'react'

import "./Product.scss"

export default function Product({product, handleDelete}) {
  return (
    <div className='Product'>
      <span
				role="button"
				className='Product-Delete'
				onClick={() => handleDelete(product.id)}
			>x</span>
      <h2>{product.title}</h2>
      <p className='Product-description'>{product.description}</p>
      <p className='Product-ReadMore'>READ MORE</p>
    </div>
  )
}
