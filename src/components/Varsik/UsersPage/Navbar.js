import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
	return (
		<header>
			<nav>
				<li>
					<Link to="/">
						Register
					</Link>
				</li>
				<li>
					<Link to="/users">
						Users
					</Link>
				</li>
			</nav>
		</header>
	)
}
