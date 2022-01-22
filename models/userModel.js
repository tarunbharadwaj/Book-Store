const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	team: {
		type: String,
		required: true
	},
	status: String
});

const TeamDB = mongoose.model('TeamDB', userSchema);

module.exports = TeamDB;
