import React from 'react'
import { Outlet } from 'react-router'
import Navbar from './Navbar/Navbar'

export default function Layouts() {
	return (
		<div>
			<Navbar />
			<Outlet />

		</div>
	)
}
