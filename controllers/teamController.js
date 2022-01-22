const axios = require('axios');
const TeamDB = require('../models/userModel');

exports.getAllTeams = (req, res) => {
	axios
		.get('http://localhost:3900/api/users')
		.then(function (response) {
			console.log(response.data);
			res.render('index', { users: response.data });
		})
		.catch((err) => {
			res.send({ message: `Error: ${err}` });
		});
};

exports.getAddUser = (req, res) => {
	res.render('add_team');
};

exports.getUpdateUser = (req, res) => {
	axios
		.get('http://localhost:3900/api/users/', {
			params: { id: req.query.id }
		})
		.then(function (userData) {
			res.render('update_team', { user: userData.data });
		})
		.catch((err) => {
			res.send(`Error: ${err}`);
		});
};

exports.create = (req, res) => {
	//Validate request
	if (!req.body) {
		res.status(404).send({
			message: 'What are you trying to add is empty'
		});
	}

	//new user
	const newUser = new TeamDB({
		name: req.body.name,
		team: req.body.team,
		status: req.body.status
	});

	//save the data
	newUser
		.save(newUser)
		.then((data) => {
			// res.send(data);
			res.redirect('/');
		})
		.catch((err) => {
			res.status(500).send({
				message: `Error: ${err}`
			});
		});
};

exports.find = (req, res) => {
	if (req.query.id) {
		const id = req.query.id;

		TeamDB.findById(id)
			.then((data) => {
				if (!data) {
					res.status(404).send({
						message: `Not found with the ID ${id}`
					});
				} else {
					res.send(data);
				}
			})
			.catch((err) => {
				res.status(500).send({ message: `Error: ${err}` });
			});
	} else {
		TeamDB.find()
			.then((user) => {
				res.send(user);
			})
			.catch((err) => {
				res.status(500).send({
					message: err
				});
			});
	}
};

exports.update = (req, res) => {
	if (!req.body) {
		return res
			.status(400)
			.send({ message: 'Data to be updated cannot be empty' });
	}

	const id = req.params.id;
	TeamDB.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
		.then((data) => {
			if (!data) {
				res.status(404).send({ message: 'The user is not there' });
			} else {
				res.send(data);
			}
		})
		.catch((err) => {
			res.status(500).send({ message: `${err}`});
		});
};

exports.delete = (req, res) => {
	const id = req.params.id;

	TeamDB.findByIdAndDelete(id)
		.then((data) => {
			if (!data) {
				res.status(404).send({
					message: `Cannot delete with id ${id}.`
				});
			} else {
				res.send({ message: 'User has been deleted successfully' });
			}
		})
		.catch((err) => {
			res.status(500).send({ message: err });
		});
};
