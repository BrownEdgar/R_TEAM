import React, {useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


import './App.css';
import { addToDo, toggleError } from './store/features/toDoSlice';


function App() {
	
	const list = useSelector(state => state.toDoList.data)
	const hasError = useSelector(state => state.toDoList.hasError)
	useEffect(() => {
		hasError && setTimeout(() => { dispatch(toggleError()) }, 2000)
	})
	const dispatch = useDispatch()
	const handleSubmit = (e) => {
		e.preventDefault()
		const { value } = e.target[0];
		dispatch(addToDo(value))
		e.target[0].value = ""
	}

	return (
		<div className='App'>
			<div className={`error ${hasError && "active" }`}>
				todo is alredy added to list!
			</div>
			<form onSubmit={handleSubmit}>
				<input type="text" required />
				<input type="submit" />
			</form>

			<hr />
			<ul>
				{
					list.map(elme => {
						return <li key={elme.id}>{elme.text}</li>
					})
				}
			</ul>

		</div>
	)
}

export default App;





