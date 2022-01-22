const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const connectDB = require('./server/database/connection');

const app = express();

app.use(cors());
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3900');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // // Request headers you wish to allow
    // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // // Set to true if you need the website to include cookies in the requests sent
    // // to the API (e.g. in case you use sessions)
    // res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


dotenv.config({ path: 'config.env' });
const port = process.env.PORT || 3900;

const teamRoute = require('./routes/teamRoute');
// const morgan = require('morgan');

// To register view engine
app.set('view engine', 'ejs');

//Log request
// app.use(morgan('tiny'))

//MongoDb connection
connectDB();

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

app.listen(
	port,
	console.log(`The app is successfully running at port ${port}`)
);
