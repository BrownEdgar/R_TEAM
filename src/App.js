import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { ADD_POST, CHANGE_NAME, CLEAR_DATA } from './components/Gevorg/actionsTypes';


export default function App() {

//   const state = useSelector(state => state)
  const dispatch = useDispatch()

  const handleClick = () => {
	const newPost = {
		userId: 2,
		id: 4,
		title: "lorem ipsum dolor sit amet",
		body: 'lorem ipsumadwadjawdjawjawdawdjaw'
	}
	dispatch({type: ADD_POST, payload: newPost })
  }
//   const handleClick2 = () => {
// 	dispatch({type: CLEAR_DATA })
//   }

  const posts = useSelector(state => state.posts)
  return (
	<div className='App'>
		{/* <h1>Hello {state.name} | date: {state.date.toLocaleTimeString()}</h1>
		<h2>{JSON.stringify(state.data)}</h2> */}
		{
			posts.map(elem => {
				return (
					<div key={elem.id}>
						<h1>{elem.title}</h1>
						<p>{elem.body}</p>
					</div>
				)
			})
		}

		<button onClick={handleClick}>Change Name</button>
		
	</div>
  )
}

// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { ADD_POST } from './store/actionsTypes';

// import './App.css';
// import Component from './components/Component';
// import { addPost, loadAsyncData } from './store/features/postsSlice';

// function App() {

// 	// const state = useSelector(state => state);
// 	const dispatch = useDispatch()


// 	// const handleClick2 = () => {
// 	// 	dispatch({ type: CLEAR_DATA, })
// 	// }
// 	const posts = useSelector(state => state.posts);
// 	console.log(posts)
// 	const handleClick = () => {
// 		dispatch(loadAsyncData())
// 	}
// 	return (
// 		<div className="App">

// 			{posts.map(elem => {
// 				return (
// 					<div key={elem.id}>
// 						<h3>{elem.title}</h3>
// 						<p>{elem.body}</p>
// 						<p>createdAt: {elem?.createdAt?.toLocaleTimeString() || "unknown"}</p>
// 					</div>
// 				)
// 			})}

// 			<button onClick={handleClick}>add post</button>
// 				<hr />
// 				<Component  />
// 		</div>
// 	);
// }

// export default App;
