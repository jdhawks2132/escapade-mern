require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const apiRoutes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
	console.log(req.path, req.method);
	next();
});

// cors for netlify
app.use(
	cors({
		origin: 'https://escapade-mern.netlify.app',
	})
);

// Routes
app.use('/api', apiRoutes);

mongoose
	.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/escapade')
	.then(() => {
		app.listen(port, () => {
			console.log('connected to db & listening on port 4000!');
		});
	})
	.catch((err) => {
		console.log(err);
	});
