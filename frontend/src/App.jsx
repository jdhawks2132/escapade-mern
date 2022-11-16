import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import AdventureList from './pages/adventures/AdventureList';
import AdventureDetail from './pages/adventures/AdventureDetail';
import CreateAdventure from './pages/create/CreateAdventure';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
	const [adventures, setAdventures] = useState([]);
	useEffect(() => {
		fetch('/api/adventures')
			.then((res) => res.json())
			.then((adventures) => setAdventures(adventures));
	}, []);

	console.log(adventures);

	return (
		<>
			<BrowserRouter>
				<Navbar />
				<main className='container py-10 px-20 mx-auto'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/adventures' element={<AdventureList />} />
						<Route
							path='/adventures/:adventureId'
							element={<AdventureDetail />}
						/>
						<Route path='/create' element={<CreateAdventure />} />
					</Routes>
				</main>
			</BrowserRouter>
		</>
	);
}

export default App;
