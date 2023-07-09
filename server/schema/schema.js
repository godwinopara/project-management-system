const {
	GraphQLObjectType,
	GraphQLID,
	GraphQLString,
	GraphQLSchema,
	GraphQLList,
	GraphQLNonNull,
	GraphQLEnumType,
} = require("graphql");

// mongoose Models
const Client = require("../models/Client");
const Project = require("../models/Project");

// Client Type

const ClientType = new GraphQLObjectType({
	name: "Client",
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		email: { type: GraphQLString },
		phone: { type: GraphQLString },
	}),
});

// Project Type

const ProjectType = new GraphQLObjectType({
	name: "Project",
	fields: () => ({
		id: { type: GraphQLID },
		clientId: { type: GraphQLString },
		name: { type: GraphQLString },
		description: { type: GraphQLString },
		status: { type: GraphQLString },
		client: {
			type: ClientType,
			resolve(parent, args) {
				return Client.findById(parent.clientId);
			},
		},
	}),
});

// Root Query

const RootQuery = new GraphQLObjectType({
	name: "RootQueryType",
	fields: {
		client: {
			type: ClientType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				return Client.findById(args.id);
			},
		},
		clients: {
			type: new GraphQLList(ClientType),
			resolve(parent, args) {
				return Client.find({});
			},
		},

		projects: {
			type: new GraphQLList(ProjectType),
			resolve() {
				return Project.find({});
			},
		},

		project: {
			type: ProjectType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				return Project.findById(args.id);
			},
		},
	},
});

// Mutation

const mutation = new GraphQLObjectType({
	name: "Mutation",
	fields: {
		addClient: {
			type: ClientType,
			args: {
				name: { type: GraphQLNonNull(GraphQLString) },
				email: { type: GraphQLNonNull(GraphQLString) },
				phone: { type: GraphQLNonNull(GraphQLString) },
			},
			resolve(parent, args) {
				const client = new Client({
					name: args.name,
					email: args.email,
					phone: args.phone,
				});

				return client.save();
			},
		},
		deleteClient: {
			type: ClientType,
			args: { id: { type: GraphQLNonNull(GraphQLID) } },
			resolve(parent, args) {
				return Client.findByIdAndDelete(args.id);
			},
		},

		// Projects

		addProject: {
			type: ProjectType,
			args: {
				name: { type: GraphQLNonNull(GraphQLString) },
				clientId: { type: GraphQLNonNull(GraphQLID) },
				description: { type: GraphQLNonNull(GraphQLString) },
				status: {
					type: new GraphQLEnumType({
						name: "ProjectStatus",
						values: {
							new: { value: "Not Started" },
							progress: { value: "In Progress" },
							completed: { value: "Completed" },
						},
					}),
					defaultValue: "Not Started",
				},
			},
			resolve(parent, args) {
				const project = new Project({
					name: args.name,
					clientId: args.clientId,
					description: args.description,
					status: args.status,
				});

				return project.save();
			},
		},

		deleteProject: {
			type: ProjectType,
			args: { id: { type: GraphQLNonNull(GraphQLID) } },
			resolve(parent, args) {
				return Project.findByIdAndDelete(args.id);
			},
		},
	},
});

module.exports = new GraphQLSchema({ query: RootQuery, mutation: mutation });
