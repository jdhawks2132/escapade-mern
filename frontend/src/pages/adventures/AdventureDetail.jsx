import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';

const AdventureDetail = () => {
	let { id } = useParams();

	const {
		data: adventure,
		isPending,
		error,
	} = useFetch(`/api/adventures/${id}`);

	return (
		<>
			{isPending && <div>Loading...</div>}
			{error && <div>{error}</div>}
			{adventure && (
				<div className='container w-4/5 mx-auto'>
					<img
						className='h-80 w-full object-cover'
						src={adventure.image}
						alt={adventure.activity}
					/>
					<div className='bg-white rounded-lg shadow-lg overflow-hidden text-center'>
						<div className='px-4 py-2'>
							<h2 className='text-3xl font-bold text-gray-800 mb-2'>
								{adventure.country}
							</h2>
							<p className='text-gray-600 text-xl mb-2'>
								{adventure.location} | {adventure.activity}
							</p>

							<p className='text-gray-600 mb-6'>{adventure.description}</p>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default AdventureDetail;
