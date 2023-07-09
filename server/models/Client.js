const mongoose = require("mongoose");
const { Schema } = mongoose;

const ClientSchema = new Schema({
	name: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	phone: { type: String, required: true, unique: true },
});

const Client = mongoose.model("Client", ClientSchema);

module.exports = Client;
