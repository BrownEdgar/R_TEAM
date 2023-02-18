import React from 'react'

export default function List({ currentPosts }) {
	return (
		<ul className='List'>
			{currentPosts.map((elem,index) => {
				return <li key={index}>{elem}</li>
			})}
		</ul>
	)
}
