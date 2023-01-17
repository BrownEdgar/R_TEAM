import React, { useState }from 'react'
import { Route, Routes, useNavigate } from 'react-router'
import Layout from './Layout'
import Login from './Login'
import User from './User'

export default function App() {
	const navigate = useNavigate()
	const [data, setData] = useState([])

	const onSubmit = (values, { resetForm }) => {
		setData([...data, values]);
		resetForm()
		navigate("/users")
	}
	return (
		<div>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Login onSubmit={onSubmit}/>} />
					<Route path='/users' element={<User data={data}/>} />
				</Route>
			</Routes>
		</div>
	)
}
