import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './Redux_4_homework_Arpi/App';
import { Provider } from 'react-redux';
import store from './Redux_4_homework_Arpi/store/store';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
	<Provider store={store}>
		<App />
	</Provider>
);