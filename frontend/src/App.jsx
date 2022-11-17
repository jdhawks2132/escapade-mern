import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import AdventureList from './pages/adventures/AdventureList';
import AdventureDetail from './pages/adventures/AdventureDetail';
import CreateAdventure from './pages/create/CreateAdventure';
import SearchPage from './pages/search/SearchPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

function App() {
	return (
		<>
			<BrowserRouter basename='/'>
				<Navbar />
				<main className='container py-10 px-10 mx-auto'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/adventures' element={<AdventureList />} />
						<Route path='/adventures/:id' element={<AdventureDetail />} />
						<Route path='/create' element={<CreateAdventure />} />
						<Route path='/search' element={<SearchPage />} />
					</Routes>
				</main>
			</BrowserRouter>
		</>
	);
}

export default App;
