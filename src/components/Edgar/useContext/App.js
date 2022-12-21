import React, { useState } from 'react'
import Child from './Child'

export const MyContext = React.createContext()

export default function App() {
	const [data, setData] = useState({
		name: 'context',
		size: 25
	})
	return (
		<div>
			<MyContext.Provider value={{
				state: data,
				setData: setData
				}}>

				<Child />

			</MyContext.Provider>
		</div>
	)
}
