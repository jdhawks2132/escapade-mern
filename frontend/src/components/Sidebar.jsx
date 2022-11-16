import React from 'react';

const Sidebar = () => {
	return (
		// use tailwind to style this component - sidebar will be on the left for desktop and on the bottom for mobile
		// sidebar contains a ul of the following countries: Argentina, Bolivia, Brazil, Chile, Colombia, and Peru
		// when a country is clicked, the sidebar should close and the adventures for that country should be displayed

		<div className='bg-indigo-800 w-1/6 h-screen float-left invisible md:visible'>
			<ul className='text-white py-6 cursor-pointer'>
				<li className='ml-6 mb-2 text-xl'>Argentina</li>
				<li className='ml-6 mb-2 text-xl'>Bolivia</li>
				<li className='ml-6 mb-2 text-xl'>Brazil</li>
				<li className='ml-6 mb-2 text-xl'>Chile</li>
				<li className='ml-6 mb-2 text-xl'>Colombia</li>
				<li className='ml-6 mb-2 text-xl'>Peru</li>
			</ul>
		</div>
	);
};

export default Sidebar;
