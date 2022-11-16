import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleNavbar = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className=' bg-indigo-800 py-4 px-11 w-screen md:flex md:justify-between md:items-center'>
			<div className='flex items-center justify-between'>
				<Link
					to='/'
					className='text-xl font-bold text-white md:text-2xl'
					href='/'
				>
					Escapade
				</Link>

				<div
					onClick={toggleNavbar}
					className='flex md:hidden'
					onKeyUp={toggleNavbar}
				>
					<button
						type='button'
						className='text-white hover:text-gray-400 focus:outline-none focus:text-gray-400'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth='1.5'
							stroke='currentColor'
							className='w-6 h-6'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
							/>
						</svg>
					</button>
				</div>
			</div>
			<div
				className={`flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 items-end ${
					isOpen ? 'flex' : 'hidden'
				}`}
			>
				<Link
					to='/adventures'
					className=' text-center w-28 text-white text-lg border border-solid border-white rounded-md p-2 hover:text-gray-800 hover:bg-slate-100'
				>
					Adventures
				</Link>
				<Link
					to='/create'
					className='text-center w-28 text-white text-lg border border-solid border-white rounded-md p-2 hover:text-gray-800 hover:bg-slate-100'
				>
					Create
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
