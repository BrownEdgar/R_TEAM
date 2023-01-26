import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_POST } from './store/actionsTypes';

import './App.css';
import Component from './components/Component';
import { addPost, loadAsyncData } from './store/features/postsSlice';

function App() {

	// const state = useSelector(state => state);
	const dispatch = useDispatch()


	// const handleClick2 = () => {
	// 	dispatch({ type: CLEAR_DATA, })
	// }
	const posts = useSelector(state => state.posts);
	console.log(posts)
	const handleClick = () => {
		dispatch(loadAsyncData())
	}
	return (
		<div className="App">

			{posts.map(elem => {
				return (
					<div key={elem.id}>
						<h3>{elem.title}</h3>
						<p>{elem.body}</p>
						<p>createdAt: {elem?.createdAt?.toLocaleTimeString() || "unknown"}</p>
					</div>
				)
			})}

			<button onClick={handleClick}>add post</button>
				<hr />
				<Component  />
		</div>
	);
}

export default App;
