const mongoose = require('mongoose');

const connectDB = async () => {
	try {
		// mongodb connection string
		const con = await mongoose.connect(
			'mongodb+srv://admin:admin12345@cluster0.ggu0g.mongodb.net/F1-Team?retryWrites=true&w=majority'
		);

		console.log(`MongoDB connected : ${con.connection.host}`);
	} catch (err) {
		console.log(`Error: ${err}`);
		process.exit(1);
	}
};

module.exports = connectDB;
