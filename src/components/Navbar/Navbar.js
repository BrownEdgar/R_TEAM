import React from 'react'
import {  NavLink } from 'react-router-dom'
import { ROUTES } from '../Routes/Routes'

import "./Navbar.scss"

export default function Navbar() {
	return (
		<header>
			<nav>
				<li>
					<NavLink to={ROUTES.HOME}>Home</NavLink>
				</li>
				<li>
					<NavLink to={ROUTES.ABOUT}>About</NavLink>
				</li>
				<li>
					<NavLink to={ROUTES.BLOG}>Blog</NavLink>
				</li>
			</nav>
		</header>
	)
}
