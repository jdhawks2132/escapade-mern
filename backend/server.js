require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const adventureRoutes = require('./routes/adventure-routes');
const mongoose = require('mongoose');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
	console.log(req.path, req.method);
	next();
});

// Routes
app.use('/api/adventures', adventureRoutes);

mongoose
	.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/escapade')
	.then(() => {
		app.listen(process.env.PORT, () => {
			console.log('connected to db & listening on port 4000!');
		});
	})
	.catch((err) => {
		console.log(err);
	});
