import React from 'react'
import { useReducer } from 'react'
import { ADD_TODO, blogReducer, initialState } from './BlogReducer'
import { getData } from './helpers/getApi'



export default function Blog() {
	const [value, dispatch] = useReducer(blogReducer, initialState)

	const handleClick = async () => { 
		const response = await getData("todos", 10);
		console.log(response)
		dispatch({ type: ADD_TODO, payload: response })
	 }

	return (
		<div>
			<h1>TODO page</h1>

			<pre>
				{JSON.stringify(value.data.todos, null, 1)}
			</pre>
			<button onClick={handleClick}>get todo</button>
		</div>
	)
}
