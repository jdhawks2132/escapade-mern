const { Schema, model } = require('mongoose');

const adventureSchema = new Schema(
	{
		liked: { type: Boolean, default: false },
		country: {
			type: String,
			required: true,
		},
		location: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
		activity: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

module.exports = model('Adventure', adventureSchema);
