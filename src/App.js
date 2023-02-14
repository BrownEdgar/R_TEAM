import React, {useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


import './App.css';
import { addToDo, toggleError, deleteToDo } from './store/features/toDoSlice';


function App() {
	const dispatch = useDispatch()
	
	const list = useSelector(state => state.toDoList.data)
	const hasError = useSelector(state => state.toDoList.hasError)
	console.log(list);
	

	useEffect(() => {
		hasError && setTimeout(() => { dispatch(toggleError()) }, 2000)
	})
	
	const handleSubmit = (e) => {
		e.preventDefault()
		const { value } = e.target[0];
		dispatch(addToDo(value))
		e.target[0].value = ""
	}

	const deleteList = (id) => {
		dispatch(deleteToDo({id}));
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
					list.map(elem => {
						return <div key={elem.id}>
							<li>{elem.text}</li>
							<button onClick={() => deleteList(elem.id)}>x</button>
						</div>
					})
				}
			</ul>

		</div>
	)
}

export default App;





