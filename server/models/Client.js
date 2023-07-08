const mongoose = require("mongoose");
const { Schema } = mongoose;

const ClientSchema = new Schema({
	id: String,
	name: String,
	email: String,
	phone: String,
});

const Client = mongoose.model("Client", ClientSchema);

module.exports = Client;
