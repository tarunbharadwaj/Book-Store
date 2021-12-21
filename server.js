const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// To register view engine
app.set('view engine', 'ejs');

const urlencodedParser = bodyParser.urlencoded({ extended: false });

const bookRouter = require('./routes/bookRoute');

app.use('/', bookRouter);

app.post('/list', urlencodedParser, (req, res) => {
	res.json(req.body);
});

const port = process.env.PORT || 3900;
app.listen(
	port,
	console.log(`The app is successfully running at port ${port}`)
);
