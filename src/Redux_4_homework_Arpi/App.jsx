import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncPosts, myOwnPost } from '../Redux_4_homework_Arpi/store/features/postSlice'
import { asyncComments } from '../Redux_4_homework_Arpi/store/features/commentsSlice'
import { asyncAlbums } from './store/features/albumsSlice'
import { asyncPhotos } from './store/photosSlice'
import { asyncTodos, getAllComplitedTodos, getAllTodosList, getAllUnComplitedTodos } from './store/features/todosSlice'
import { asyncUsers } from './store/usersSlice'

import TodoList from './component/TodoList'
import ReselectEx from '../components/ReselectEx'



export default function App() {
	// console.log(posts)
	const allTodo = useSelector(getAllTodosList)
	const complitedTodo = useSelector(getAllComplitedTodos)
	const uncomplitedTodo = useSelector(getAllUnComplitedTodos)

	const [options, setOptions] = useState({
		limit: 10,
		entities: "users"
	})

	const dispatch = useDispatch()

	const handleSubmit = (e) => {
		e.preventDefault()
		const number = {
			count: e.target[1].value
		}

		const value = e.target[0].value
		setOptions({
			...options,
			entities: value,
		})
		if (value === "posts") {
			dispatch(asyncPosts(number))
		} if (value === "comments") {
			dispatch(asyncComments(number))
		} if (value === "albums") {
			dispatch(asyncAlbums(number))
		} if (value === "photos") {
			dispatch(asyncPhotos(number))
		} if (value === "todos") {
			dispatch(asyncTodos(number))
		} if (value === "users") {
			dispatch(asyncUsers(number))
		}
	}
	const handleChage = (e) => {
		const selectOptions = {
			posts: 200,
			comments: 500,
			albums: 100,
			photos: 5000,
			todos: 200,
			users: 10
		}
		const { value } = e.target;
		setOptions({
			...options,
			limit: selectOptions[value]
		})

	}
	return (
		<div>
			<div>
				<form onSubmit={handleSubmit} id="form">
					<select name="" id="" onChange={handleChage}>
						<option value="posts">Posts</option>
						<option value="comments">Comments</option>
						<option value="albums">Albums</option>
						<option value="photos">Photos</option>
						<option value="todos">Todos</option>
						<option value="users">Users</option>
					</select>
					<input type="number" max={options.limit} min={1} />
					<input type="submit" />
				</form>
				
			</div>
	
			<TodoList options={{target: "users", count: 5}} />

			<button onClick={() => dispatch(myOwnPost())}> Click</button>
			<hr />
			<ReselectEx />
		</div>
	)
}


