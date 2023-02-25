import React, { useState } from 'react';

import './App.css';
import Row from './components/Row/Row';
import requests from './requist';

function App() {
	return (
		<div className="App">
				<h1>netflix</h1>

			<Row title="Action Movies" fetchUrl={requests.fetchActionMovies} islargeRow={true}/>
			<Row islargeRow={true} title="Criminales Movies" fetchUrl={requests.fetchCriminales} />
			<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} islargeRow={true}/>
			<Row title="Documentaries Movies" fetchUrl={requests.fetchDocumentaries} islargeRow={true}/>
			<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} islargeRow={true}/>
			<Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} islargeRow={true}/>
		</div>
	);
}

export default App;
