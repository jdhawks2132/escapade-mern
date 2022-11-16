import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		// use tailwindcss to style the navbar
		<nav
			className='flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono'
			role='navigation'
		>
			<Link to='/' className='pl-8'>
				Escapade
			</Link>
			<div className='px-4 cursor-pointer md:hidden'>
				<svg
					className='w-6 h-6'
					fill='none'
					stroke='currentColor'
					viewBox='0 0 24 24'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						d='M4 6h16M4 12h16M4 18h16'
					></path>
				</svg>
			</div>
			<div className='pr-8 md:block hidden'>
				<Link to='/adventures' className='p-4'>
					Adventures
				</Link>
				<Link to='/create' className='p-4'>
					Create
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
