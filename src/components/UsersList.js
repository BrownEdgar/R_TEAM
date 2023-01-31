import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncUsers, deleteByUserId } from '../store/features/usersSlice'

export default function UsersList() {
	const users = useSelector(state => state.users)
	const dispatch = useDispatch()
	console.log(users);
	const handleUsers = () => {
		dispatch(asyncUsers())

	}
	const handleDelete = (id) => {
		dispatch(deleteByUserId({id}))
	}
	return (
		<div>
			{
				users.map(elem => {
					return <div key={elem.id}>
						<h2>{elem.name}</h2>
						<p>{elem.email}</p>
						<button onClick={() => handleDelete(elem.id)}>X</button>
					</div>
				})
				
			}
			<div>
				<button onClick={handleUsers}>Get Users</button>
			</div>
		</div>
	)
}
