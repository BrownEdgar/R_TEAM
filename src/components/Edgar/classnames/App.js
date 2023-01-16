import React, { useState } from 'react'
import classNames from 'classnames';
export default function App() {
	const [value, setValue] = useState(0)

	return (
		<div className={classNames(`box_${value}`)}>
			<button onClick={() => setValue(value  + 1)}>add class</button>
		</div>
	)
}
