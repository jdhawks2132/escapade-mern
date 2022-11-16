import React from 'react';

const AdventureCard = ({ adventure }) => {
	return (
		// use tailwind to style the adventure card - it should be a card the country, location, image, and activity
		// the card should be a link to the adventure detail page

		<div className='bg-white rounded-lg shadow-lg overflow-hidden'>
			<div className='px-4 py-2'>
				<h2 className='text-2xl font-bold text-gray-800'>
					{adventure.country}
				</h2>
				<p className='text-gray-600'>{adventure.location}</p>
			</div>
			<img
				className='h-48 w-full object-cover'
				src={adventure.image}
				alt={adventure.activity}
			/>
		</div>
	);
};

export default AdventureCard;
