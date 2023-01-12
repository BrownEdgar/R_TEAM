// import React, { useTransition,useEffect,useState }from 'react'
// import axios from 'axios';

// export default function App() {
// 	const [data, setData] = useState([])
// 	const [dataFilter, setdataFilter] = useState([])

// 	useEffect(() => {
// 		const getData = () => {
// 			const arr = new Array(10000).fill(null).map((elem, index) => {
// 				return {
// 					id: ++index, userName: `UserName-${index}`
// 				}
// 			});
// 			setData(arr);
// 			setdataFilter(arr)
// 		}
// 		getData()
// 	}, [])

// 	const handleChange = (e) => { 
// 		const {value} = e.target; // ""
// 		const f = data.filter(user => user.userName.includes(value))
// 		setdataFilter(f)
// 	 }

// 	return (
// 		<div>
// 			<form>
// 				<input type="text" onChange={handleChange}/>
// 			</form>
// 				<ul>
// 				{dataFilter.map(elem => {
// 					return <li key={elem.id}>{elem.userName}</li>
// 				})}
// 				</ul>

// 		</div>
// 	)
// }



import React, { useEffect, useState, useTransition } from 'react'

 function Coments({ data }) {
	console.log('data', data)
	return (
		<ul id='list'>
			{data.map(coment => {
				return (
					<li key={coment.id} className="list-item">
						<span className='title'>{coment.name}</span>
						<span>{coment.body}</span>
						<span className='special_number'>{coment.id}</span>
					</li>
				)
			})}
		</ul>
	)
}


const comentsFilter = (coments, search) => coments.filter(item => item.name.concat(item.body).includes(search))

export default function App() {
	const [coments, setComents] = useState([])
	const [search, setSearch] = useState([])
	const [isPending, startTransition] = useTransition() // 1

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/comments?_limit=150`)
			.then(response => response.json())
			.then(setComents)
	}, [])
	const handleSearch = (event) => {
		const { value } = event.target;
		startTransition(() => setSearch(value)) // 2
		setSearch(value)
	}

	return (
		<div className='container'>
			<h1>
				useTransition hook
			</h1>
			<form>
				<input type="text" onChange={handleSearch} />
			</form>
			{isPending && <h1>Pending....</h1>}
			<Coments data={comentsFilter(coments, search)} />
		</div>
	)
}
