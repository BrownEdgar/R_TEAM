import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_POST } from './store/actionsTypes';

import './App.css';
import Component from './components/Component';

function App() {

	// const state = useSelector(state => state);
	const dispatch = useDispatch()


	// const handleClick2 = () => {
	// 	dispatch({ type: CLEAR_DATA, })
	// }
	const posts = useSelector(state => state.posts);
	const handleClick = () => {
		const newPost = {
			id: 4,
			userId: 2,
			title: "Lorem ipsum dolor sit amet.",
			body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo beatae at et."
		}
		dispatch({ type: ADD_POST, payload: newPost })
	}
	return (
		<div className="App">

			{posts.map(elem => {
				return (
					<div key={elem.id}>
						<h3>{elem.title}</h3>
						<p>{elem.body}</p>
					</div>
				)
			})}

			<button onClick={handleClick}>change name</button>
				<hr />
				<Component  />
		</div>
	);
}

export default App;
