import React, { useState } from 'react';
import About from './components/About';
import Blog from './components/Blog';
import Home from './components/Home';


import './App.css';
import { Routes, Route } from 'react-router';
import Error404 from './components/404';
import SpecialPage from './components/SpecialPage';
import { ROUTES } from './components/Routes/Routes';
import Layouts from './components/Layouts';
import PrivateRoutes from './components/PrivateRputes';

function App() {
	const [friends, setfriends] = useState([
		'Rachel Green', 
		'Monica Geller', 
		'Phoebe Buffay', 
		'Joey Tribbiani', 
		'Chandler Bing', 
		'Ross Geller']);
	return (
		<div className="App">

			<Routes>
				<Route path={ROUTES.HOME} element={<Layouts />}>
					<Route index  element={<Home />} />
					<Route path={ROUTES.ABOUT} element={<About friends={friends} />} />
					<Route path={ROUTES.USER_PAGE} element={<SpecialPage friends={friends} />} />
						<Route path={ROUTES.BLOG} element={<Blog />} />
	
					<Route path={ROUTES.ERROR_PAGE} element={<Error404 />} />
				</Route>
			
			</Routes>

		</div>
	);
}

export default App;
