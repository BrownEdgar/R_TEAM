import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'
import App from './components/Arpi/React_Rout_homework/App/App';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
	<Router>
		<App />
	</Router>
);