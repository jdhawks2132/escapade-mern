import { Link } from 'react-router-dom';

const AdventureCard = ({ adventure }) => {
	return (
		// use tailwind to style the adventure card - it should be a card the country, location, image, and activity
		// the card should be a link to the adventure detail page

		<div className='bg-white rounded-lg shadow-lg overflow-hidden'>
			<Link to={`/adventures/${adventure._id}`}>
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
			</Link>
		</div>
	);
};

export default AdventureCard;
