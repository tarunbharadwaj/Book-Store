const express = require('express');
const app = express();

const bookRouter = require('./routes/books');

app.use('/', bookRouter);

const port = process.env.PORT || 3900;
app.listen(
	port,
	consolie.log(`The app is successfully running at port ${port}`)
);
