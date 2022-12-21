import React from 'react'

import "./Text.scss"

export default function Text({ as, clName, theme = "light", children }) {

	const Element = as || "p"
	
	return (
		<div className={`Text ${clName ? clName : ""} Text_${theme}`}>
			{children}
		</div>
	)
}
