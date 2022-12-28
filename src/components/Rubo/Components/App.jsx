import React, { useState } from 'react'
import Component from "./Component"

import "./App.scss"

export default function App() {
	const [data,setData] = useState([
		{
			id:1,
			title:"AXONVIP | 1 AUG,2019",
			body:"Aliquam Hendrerit Mi Metus",
			text:"It is with great pleasure that I speak to the I'v experienced with the Cantreall Brothers and the them at...",
			link:"READ MORE"
		},
		{
			id:2,
			title:"AXONVIP | 1 AUG,2019",
			body:"Mauris Vulpaate Cras Amet",
			text:"It is with great pleasure that I speak to the I'v experienced with the Cantreall Brothers and the them at...",
			link:"READ MORE"
		},
		{
			id:3,
			title:"AXONVIP | 1 AUG,2019",
			body:"Suspendisse Nullam Sodales",
			text:"It is with great pleasure that I speak to the I'v experienced with the Cantreall Brothers and the them at...",
			link:"READ MORE"
		},
	])
	const handleDalete = (id) =>{
		const newData = data.filter(elem => elem.id !== id)
		setData(newData)
	}
	return (
		<div className='App'>
			<h1>Our Blog</h1>
			<div className='Container'>
			{
				data.map(elem=>{
					return <Component key={elem.id} obj={elem} handleDalete={handleDalete}/>
				})
			}
			</div>
		</div>
	)
}