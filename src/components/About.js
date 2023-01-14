import React from 'react'
import { Link, useNavigate } from "react-router-dom"

export default function About({ friends }) {
	const navigate = useNavigate()

	const goToHomePage = () => { 
		navigate('/')
	}

	return (
		<div>
			<h1>About page</h1>
			{friends.map((elem, index) => <Link key={index} to={`/about/${index}`}>{elem}</Link>)}

			<button onClick={goToHomePage}>home page</button>
			<Link to="/dsa">home</Link>
		</div>
	)
}
