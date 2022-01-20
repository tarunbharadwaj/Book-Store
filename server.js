const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const teamRoute = require('./routes/teamRoute');
const path = require('path');
// const dotenv = require('dotenv');
// const morgan = require('morgan');

// To register view engine
app.set('view engine', 'ejs');

//Log request
// app.use(morgan('tiny'))

//parse request to body-parser
// const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.urlencoded({ extended: true }));

//Load Assets
app.use('/css', express.static(path.resolve(__dirname, 'assets/css')));
app.use('/img', express.static(path.resolve(__dirname, 'assets/img')));
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')));

//Route Middlewares
app.use('/', teamRoute);

// app.post('/list', urlencodedParser, (req, res) => {
// 	res.json(req.body);
// });

// dotenv.config({ path: 'config.env' });
const port = process.env.PORT || 3900;
app.listen(
	port,
	console.log(`The app is successfully running at port ${port}`)
);
