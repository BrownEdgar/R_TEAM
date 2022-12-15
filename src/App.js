import React, { useState } from 'react';

import './App.css';

function App() {
	const [value, setValue] = useState(1)

	const actions = (action) => {
		switch (action.type) {
			case "minus":
				setValue(value > 0 ? value - (action?.count ?? 1) : value)
				break;
			case "plus":
				setValue(value < 7 ? value + action.count : value)
				break;
			default: return null;
		}
	}

	return (
		<div className="App">
			<h1>Count: {value}</h1>
			<button onClick={() => actions({ type: "minus",  count: 2 })} disabled={value === 0}>minus</button>
			<button onClick={() => actions({ type: "plus", count: 3 })} disabled={value === 7}>add</button>
		</div>
	);
}

export default App;
