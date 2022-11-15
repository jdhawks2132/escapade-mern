const mongoose = require('mongoose');

const validateMongoId = (req, res, next) => {
	const { id } = req.params;
	if (!mongoose.Types.ObjectId.isValid(id)) {
		res.status(400).json({ message: 'Invalid id format' });
		return;
	} else {
		next();
	}
};

module.exports = {
	validateMongoId,
};
