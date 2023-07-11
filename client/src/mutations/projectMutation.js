import { gql } from "@apollo/client";

const ADD_PROJECT = gql`
	mutation Add_Project(
		$name: String!
		$description: String!
		$status: ProjectStatus!
		$clientId: ID!
	) {
		addProject(name: $name, description: $description, status: $status, clientId: $clientId) {
			id
			name
			description
			status
			client {
				id
				name
				email
				phone
			}
		}
	}
`;

const DELETE_PROJECT = gql`
	mutation DeleteProject($id: ID!) {
		deleteProject(id: $id) {
			id
			name
			email
			phone
		}
	}
`;

export { ADD_PROJECT, DELETE_PROJECT };
