exports.getAllTeams = (req, res) => {
	res.render('index');
};

exports.getAddUser = (req, res) => {
	res.render('add_team');
};

exports.getUpdateUser = (req, res) => {
	res.render('update_team');
};

// exports.getBooksList = (req, res) => {
// 	res.send('New books list is added')
// }

// exports.getBooksList = (req, res) => {
// 	res.json(req.body);
// };

// exports.aboutPage = (req, res) => {
// 	res.send('This is about page');
// };
