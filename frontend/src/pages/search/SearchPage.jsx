import { useLocation } from 'react-router-dom';
import AdventureCard from '../../components/AdventureCard';
import { useFetch } from '../../hooks/useFetch';

const SearchPage = () => {
	const queryString = useLocation().search;
	const params = new URLSearchParams(queryString);
	const query = params.get('q');
	console.log(query);

	const {
		data: adventures,
		isPending,
		error,
	} = useFetch('/api/search?q=' + query);

	const adventureList = adventures?.map((adventure) => (
		<AdventureCard key={adventure._id} adventure={adventure} />
	));

	return (
		<div>
			{isPending && <div>Loading...</div>}
			{error && <div>{error}</div>}
			{adventures && (
				<>
					<h2 className='text-3xl font-bold mb-8 text-center'>
						Search Results for: {query}
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
						{adventureList}
					</div>
				</>
			)}
		</div>
	);
};

export default SearchPage;
