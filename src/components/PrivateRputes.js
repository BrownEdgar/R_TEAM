import React, { useState } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { ROUTES } from './Routes/Routes'

const PrivateRoutes = () => {
	const [isLogin] = useState(!!window.localStorage.getItem("login"))

	return (
		isLogin ? <Outlet /> : <Navigate to={ROUTES.HOME} />
	)
}

export default PrivateRoutes