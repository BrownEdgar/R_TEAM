import React, { useState, useEffect} from 'react'
import axios from 'axios'

export default function App() {
	const [data, setData] = useState({})

	useEffect(() => {
		const getData = () => { 
			axios.post("/posts", {
				title: 'foo',
				body: 'bar',
				userId: 1,
			})
				.then(res => console.log(res))
				.catch(err => console.log(err))
		}
		getData()
	}, [])

	return (
		<div>
			<h1>Axios example</h1>
			<pre>
				{JSON.stringify(data, null, 1)}
			</pre>
		</div>
	)
}
