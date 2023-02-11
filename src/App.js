
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Serials from './components/Component';

import './App.css';
import { asyncPost } from './store/features/postsSlice';
import UsersList from './components/UsersList';
import { fillArray } from './store/features/randomSlice';
import ReselectEx from './components/ReselectEx';

function App() {

	const num = useSelector(state => state.randomNumbers);
	console.log(num);
	const dispatch = useDispatch()

	const addNumber = (count) => { 
		dispatch(fillArray({count}))
	 }

	const posts = useSelector(state => state.posts);
	const handleClick = () => { 
		console.log(":aaaa")
		dispatch(asyncPost())
	 }

	return (
		<div className="App">
			<div className="flex">
				<button onClick={handleClick}>add posts</button>
				
			</div>
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
				<button onClick={() => addNumber(10)}>ADD</button>
				<hr />
					<Serials /> 
					<ReselectEx />
					<UsersList />
		</div>
	);
}

export default App;
