import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateAdventure = () => {
	const [formData, setFormData] = useState({});

	const navigate = useNavigate();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));

		console.log(formData);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await fetch('/api/adventures', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});
		} catch (error) {
			console.log(error);
		}

		setFormData({});
		navigate('/adventures');
	};

	return (
		<div className='container w-3/4 mx-auto'>
			<form onSubmit={handleSubmit}>
				<div className='mb-6'>
					<label className='block mb-2 text-sm font-medium text-gray-900'>
						Country
					</label>
					<input
						type='text'
						id='country'
						name='country'
						value={formData.country}
						onChange={handleChange}
						className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
						placeholder='Enter a country'
						required
					/>
				</div>
				<div className='mb-6'>
					<label className='block mb-2 text-sm font-medium text-gray-900'>
						Location
					</label>
					<input
						type='text'
						id='location'
						name='location'
						value={formData.location}
						onChange={handleChange}
						className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
						placeholder='Enter a location'
						required
					/>
				</div>
				<div className='mb-6'>
					<label className='block mb-2 text-sm font-medium text-gray-900'>
						Image
					</label>
					<input
						type='text'
						id='image'
						name='image'
						value={formData.image}
						onChange={handleChange}
						className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
						placeholder='Enter a image url'
						required
					/>
				</div>
				<div className='mb-6'>
					<label className='block mb-2 text-sm font-medium text-gray-900'>
						Activity
					</label>
					<input
						type='text'
						id='activity'
						name='activity'
						value={formData.activity}
						onChange={handleChange}
						className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
						placeholder='Enter a activity name'
						required
					/>
				</div>
				<div className='mb-6'>
					<label className='block mb-2 text-sm font-medium text-gray-900'>
						Description
					</label>
					<textarea
						id='description'
						name='description'
						value={formData.description}
						onChange={handleChange}
						rows='3'
						className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
						placeholder='Enter a description'
						required
					></textarea>
				</div>

				<button
					type='submit'
					className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default CreateAdventure;
