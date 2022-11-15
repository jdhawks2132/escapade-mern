const express = require('express');
const router = express.Router();
const {
	getAllAdventures,
	getAdventureById,
	createAdventure,
	updateAdventure,
	deleteAdventure,
} = require('../controllers/adventure-controller');

const { validateMongoId } = require('../utils/middleware');

// Get all adventures
router.get('/', getAllAdventures);

// Get one adventure
router.get('/:id', validateMongoId, getAdventureById);

// Create one adventure
router.post('/', createAdventure);

// Update one adventure
router.patch('/:id', validateMongoId, updateAdventure);

// Delete one adventure
router.delete('/:id', validateMongoId, deleteAdventure);

module.exports = router;
