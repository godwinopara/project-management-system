const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProjectSchema = new Schema({
	clientId: { type: Schema.Types.ObjectId, ref: "Client" },
	name: String,
	description: String,
	status: { type: String, enum: ["Not Started", "In Progress", "Completed"] },
});

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;
