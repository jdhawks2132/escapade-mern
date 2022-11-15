import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';

function App() {
	const [adventures, setAdventures] = useState([]);
	useEffect(() => {
		fetch('/api/adventures')
			.then((res) => res.json())
			.then((adventures) => setAdventures(adventures));
	}, []);

	console.log(adventures);

	return (
		<div className='App'>
			<h1 className='text-3xl font-bold underline'>Hello world!</h1>
		</div>
	);
}

export default App;
