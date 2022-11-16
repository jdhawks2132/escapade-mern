import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
	const [term, setTerm] = useState('');
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		navigate(`/search?q=${term}`);
	};

	return (
		// use tailwind to style the search bar
		<div className='flex items-center justify-center'>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					className='w-64 h-11 pl-10 pr-4 invisible md:visible rounded-md text-sm focus:outline-none focus:shadow-outline'
					placeholder='Search'
					onChange={(e) => setTerm(e.target.value)}
					value={term}
				/>
			</form>
		</div>
	);
};

export default SearchBar;
