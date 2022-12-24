import React from 'react'
import CustomHook from './CustomHook'

export default function App() {

	const [data, { maxPopulate, summaryPop, updatePop },setData] = CustomHook([
	{
		id: 1,
		name: "Moskow",
		population: "18.2M",
		country: "Russia"
	},
	{
		id: 2,
		name: "Vancuver",
		population: "9.8M",
		country: "Canada"
	},
	{
		id: 3,
		name: "Deli",
		population: "14.8M",
		country: "India"
	}
])
	return (
		<div>
			<pre>
				{JSON.stringify(data, null,1)}
			</pre>
			<button onClick={maxPopulate}>1</button>
			<button onClick={summaryPop}>2</button>
			<button onClick={updatePop}>3</button>

		</div>
	)
}
