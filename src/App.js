
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {changePost, deleteData, loadAsyncData } from './store/features/postsSlice';
import Component from './components/Component';


import './App.css';

function App() {

	// const state = useSelector(state => state);
	const dispatch = useDispatch()


	const posts = useSelector(state => state.posts);
	console.log(posts)
	const handleClick = () => {
		dispatch(loadAsyncData())
	}
	// const deletePostById = (id) => { 
	// 	dispatch(deleteData(id))
	// }
	// const handleSubmit = (e) => { 
	// 	e.preventDefault();
	// 	const data = {
	// 		id: e.target[1].value,
	// 		title: e.target[0].value,
	// 	}
	// 	dispatch(changePost(data))
	// }
	return (
		<div className="App">
			<div className="flex">
				<button onClick={handleClick}>add posts</button>
				{/* <button onClick={() => deletePostById(1)}>delete post</button> */}
			</div>

			{/* <form onSubmit={handleSubmit}>
				<input type="text" id="title" required/>
				<input type="number" name="postid" id="postid" min={1} max={50}/>
				<input type="submit"  value="change post title"/>
			</form> */}

				<div className="flex_container">
				{posts.map(elem => {
					return (
						<div key={elem.id}>
							<span>{elem.id}</span>
							<h3>{elem.title}</h3>
							<p>{elem.body}</p>
							<p>createdAt: {elem?.createdAt?.toLocaleTimeString() || "unknown"}</p>
						</div>
					)
				})}
				</div>
				<hr />

		</div>
	);
}

export default App;
