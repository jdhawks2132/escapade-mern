import { useState, useEffect } from 'react';
import AdventureCard from '../../components/AdventureCard';
import { useFetch } from '../../hooks/useFetch';

const AdventureList = () => {
	const {
		data: adventures,
		isPending,
		error,
	} = useFetch('/api/adventures');

	const adventureList = adventures?.map((adventure) => (
		<AdventureCard key={adventure._id} adventure={adventure} />
	));
	return (
		// use tailwind to style the adventure list - it should be a grid of cards
		<>
			{isPending && <div>Loading...</div>}
			{error && <div>{error}</div>}
			{adventures && (
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
					{adventureList}
				</div>
			)}
		</>
	);
};

export default AdventureList;
