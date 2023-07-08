const {
	GraphQLObjectType,
	GraphQLID,
	GraphQLString,
	GraphQLSchema,
	GraphQLList,
} = require("graphql");
const { projects, clients } = require("../data");

// Client Type

const ClientType = new GraphQLObjectType({
	name: "client",
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		email: { type: GraphQLString },
		phone: { type: GraphQLString },
	}),
});

// Project Type

const ProjectType = new GraphQLObjectType({
	name: "project",
	fields: () => ({
		id: { type: GraphQLID },
		clientId: { type: GraphQLString },
		name: { type: GraphQLString },
		description: { type: GraphQLString },
		status: { type: GraphQLString },
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
				return clients.find((client) => client.id === args.id);
			},
		},
		clients: {
			type: new GraphQLList(ClientType),
			resolve(parent, args) {
				return clients;
			},
		},

		projects: {
			type: new GraphQLList(ProjectType),
			resolve() {
				return projects;
			},
		},
	},
});

module.exports = new GraphQLSchema({ query: RootQuery });
