const express = require('express');
const router = express.Router();
const { searchAdventures } = require('../controllers/adventure-controller');

// Search adventures
router.get('/', searchAdventures);

module.exports = router;
