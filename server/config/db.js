const mongoose = require("mongoose");
const logger = require("../utils/logger");
require("dotenv").config();

const connectDB = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_URI);
		logger.info("Connected to MongoDB successfully");
	} catch (error) {
		logger.error(`Error connecting to MongoDB ${error.message}`);
	}
};

module.exports = connectDB;
