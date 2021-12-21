exports.getAllBooks = (req, res) => {
	res.render('index');
};

// exports.getBooksList = (req, res) => {
// 	res.send('New books list is added')
// }

// exports.getBooksList = (req, res) => {
// 	res.json(req.body);
// };

exports.aboutPage = (req, res) => {
	res.send('This is about page');
};
