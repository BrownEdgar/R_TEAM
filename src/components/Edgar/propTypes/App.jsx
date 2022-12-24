import React, { useState } from 'react'
import Component from './Component'

export default function App() {
	const [post, setPost] = useState({
		id:1,
		count: "123",
		skilss: ["html", "css", "js"],
		show:function() {return  this.count; },
		gender: "male",
		deleted: null,
		address: {
			city: "LA",
			street: "Vashington Aw. 23",
			house: 41
		}
	})
	return (
		<div>
			<Component post={post} /> 
		</div>
	)
}
