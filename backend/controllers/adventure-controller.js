const Adventure = require('../models/Adventure');

// GET all adventures
const getAllAdventures = async (req, res) => {
	try {
		const adventures = await Adventure.find();
		res.status(200).json(adventures);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

// GET one adventure
const getAdventureById = async (req, res) => {
	try {
		const { id } = req.params;
		const adventure = await Adventure.findById(id);
		if (!adventure) {
			return res.status(404).json({ message: 'Adventure not found' });
		}
		res.status(200).json(adventure);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

// POST one adventure
const createAdventure = async (req, res) => {
	const adventure = new Adventure({
		country: req.body.country,
		location: req.body.location,
		image: req.body.image,
		activity: req.body.activity,
		description: req.body.description,
	});
	try {
		const newAdventure = await adventure.save();
		res.status(201).json(newAdventure);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};

// PATCH one adventure
const updateAdventure = async (req, res) => {
	try {
		const { id } = req.params;
		const adventure = await Adventure.findById(id);
		if (!adventure) {
			return res.status(404).json({ message: 'Adventure not found' });
		}
		const updatedAdventure = await Adventure.findByIdAndUpdate(
			id,
			{
				...req.body,
			},
			{ new: true }
		);
		res.status(200).json(updatedAdventure);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

// DELETE one adventure
const deleteAdventure = async (req, res) => {
	try {
		const { id } = req.params;
		const adventure = await Adventure.findById(id);
		if (!adventure) {
			return res.status(404).json({ message: 'Adventure not found' });
		}
		await Adventure.findByIdAndDelete(id);
		res.status(200).json({ message: 'Adventure deleted' });
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

module.exports = {
	getAllAdventures,
	getAdventureById,
	createAdventure,
	updateAdventure,
	deleteAdventure,
};
