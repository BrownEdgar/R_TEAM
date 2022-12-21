import React, { useState } from 'react'
import List from './List'
import Text from './Text/Text'

export default function App() {
	const [value, setValue] = useState(1)
	const [data, setData] = useState([
		{
			id: 1,
			name: '🍔',
			price: 30,
			amount: 10,
		},
		{
			id: 2,
			name: '🍨',
			price: 20,
			amount: 3,
		},
		{
			id: 3,
			name: '🍿',
			price: 10,
			amount: 5,
		},
		{
			id: 4,
			name: '🍵',
			price: 5,
			amount: 9,
		},
	])

	const total = () => {
		let caxs = 0;
		data.forEach(elem => {
			caxs += (elem.price * elem.amount)
		});
		setValue(caxs)
	}
	const updateData = (id) => {
		const newData = data.map(elem => {
			if (elem.id === id) {
				elem.amount > 0 && (elem.amount -= 1);
				return elem
			}
			return elem
		})
		setData(newData)
	}

	const deletedElem = (id) => {
		const newData1 = data.filter(elem => elem.id !== id)

		setData(newData1)
	}

	return (
		<div>
			<List data={data} deletedElem={deletedElem} />
			<h1>{value}</h1>
			<button onClick={total}>Get total</button>
			<button onClick={() => updateData(3)}>buy</button>
			<Text as={"p"} clName="box" theme="light">
				{/* props.children */}
					Lorem ipsum dolor sit amet.
			</Text> 
			<button>show answer</button>

		</div>
	)
}
