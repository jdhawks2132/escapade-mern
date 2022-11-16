import { useState, useEffect } from 'react';
import AdventureCard from '../../components/AdventureCard';

const AdventureList = () => {
	const [adventures, setAdventures] = useState([]);
	useEffect(() => {
		fetch('/api/adventures')
			.then((res) => res.json())
			.then((adventures) => setAdventures(adventures));
	}, []);

	const adventureList = adventures.map((adventure) => (
		<AdventureCard key={adventure._id} adventure={adventure} />
	));
	return (
		// use tailwind to style the adventure list - it should be a grid of cards
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
			{adventureList}
		</div>
	);
};

export default AdventureList;
