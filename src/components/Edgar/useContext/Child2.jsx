import React, {useContext} from 'react'

import { MyContext } from "./App"

export default function Child2() {
	const data = useContext(MyContext)
	console.log(data)
	return (
		<div>
			<h2>React child 2 in Child component</h2>
			<h2>Context data: {data.state.name}</h2>
			<button onClick={() => data.setData({name:'React',size: 26})}>change name</button>
		</div>
	)
}
