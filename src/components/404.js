import React from 'react'
import { Link } from 'react-router-dom'

export default function Error404() {
	return (
		<div>
			<h3>Page Not found | 404</h3>
			<Link to="/">Go to home page</Link>
		</div>
	)
}
