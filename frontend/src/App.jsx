import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';

function App() {
	const [adventures, setAdventures] = useState([]);
	useEffect(() => {
		fetch('/api/adventures')
			.then((res) => res.json())
			.then((adventures) => setAdventures(adventures));
	}, []);

	console.log(adventures);

	return (
		<div className='container'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
