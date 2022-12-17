import React, { useState } from 'react';
import FirstImage from "../images/photo.jpg"

export default function App() {
	const [imgurl, setImgurl] = useState({
		path:"https://images.unsplash.com/photo-1618477371303-b2a56f422d9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
	})

	const s = {
		"backgroundImage": `url(${imgurl.path})`,
		'width': '350px',
		'height': "350px",
	}

	return (
		<div>
			{/* case 1 */}
			<img src="https://images.unsplash.com/photo-1618477371303-b2a56f422d9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="react" />

			{/* case 2  */}
			<img src={imgurl.path} alt="" />
			<div style={s}></div>

			{/* case 3  */}
			<img src={FirstImage} alt="" />
			
			{/* case 4  */}
			<img src='./images/photo.jpg' alt="" />
		</div>
	)
}
