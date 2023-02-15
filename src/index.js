import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './pageInation/App';
import { Provider } from 'react-redux';
import store, { persistor } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';



const container = document.getElementById('root');
const root = createRoot(container);

root.render(
	<Provider store={store}>
		<PersistGate persistor={persistor} loading={<h1>loading...</h1>}>
			<App />
		</PersistGate>
	</Provider>
);