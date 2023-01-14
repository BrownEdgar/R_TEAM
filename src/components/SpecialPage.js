import React from 'react'
import { useParams } from 'react-router'

export default function SpecialPage({friends}) {
	const { id } = useParams()
	const user = friends.find((elem,index) => index === +id )

	if(!user){
		return <h1>User Not found check your ID</h1>
	}

	return (
		<div>
			<h1>SpecialPage N {id}</h1>
			{user}
		</div>
	)
}
