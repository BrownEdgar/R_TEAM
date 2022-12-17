import React from 'react'

import './Product.scss'

export default function Product({ product, handleDelete }) {
	return (
		<div className='Product'>
			<span
				role="button"
				className='Product-Delete'
				onClick={() => handleDelete(product.id)}
			>X</span>
			<img src={product.image} alt="" />
			<div className="Product-Content">
				<h2 className='Product-Title'>{product.title}</h2>
				<p className='Product-Text'>{product.description}</p>
				<ul className='Product-List'>
					<li>price: {product.price}</li>
					<li>rate: {product.rating.rate}</li>
					<li>category: {product.category}</li>
				</ul>
			</div>
		</div>
	)
}
