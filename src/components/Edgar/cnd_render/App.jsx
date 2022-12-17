import React, { useState } from 'react'

export default function App() {
	const [isShow, setIsShow] = useState(true);

	const handleClick = () => {
		setIsShow(!isShow)
	}

	return (
		<div>
			{
			isShow 
			?	<h1>Lorem, ipsum dolor.</h1>
			: null
			}
			<button onClick={handleClick}>{isShow  ? "hide" : "show"}</button>
		</div>
	)
}
