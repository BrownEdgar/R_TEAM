import React, { useEffect,useState } from 'react'

export default function App() {
	const [data, setData] = useState([])

	const handleClick = (e) => {
		const products = [
			{
				id:9456,
				name: "iPhone 14",
				price: "1230$"
			}
		]
		localStorage.setItem("products", JSON.stringify(products))
	}
	useEffect(()=> {
		const getProduct = JSON.parse(localStorage.getItem(`products`))  || []
		setData(getProduct)
	},[])
	return (
		<div>
			<ul>
				{
					data.map(product => {
						return <li key={product.id}>
							<span>{product.name}</span>
							<span>{product.price}</span>
						</li>
					})
				}
			</ul>
			<button onClick={handleClick}>Click Me</button>

		</div>
	)
}
