import React from 'react';
import Bolivia from '../../assets/images/bolivia.jpg';
import SAMap from '../../assets/images/SAMap.png';

const Home = () => {
	return (
		// create a landing page with a Bolivia as a background image, the SAMap super-imposed on top and a title ESCAPADE using tailwind css classes
		<div
			className='bg-cover bg-center h-screen'
			style={{ backgroundImage: `url(${Bolivia})` }}
		>
			<div className='flex flex-col items-center justify-center h-full'>
				<h2 className='text-6xl text-white font-bold mb-11'>
					Adventure Calls...
				</h2>
				<img src={SAMap} alt='South America Map' className='w-1/6' />
			</div>
		</div>
	);
};

export default Home;
