import { gql } from "@apollo/client";

const GET_PROJECTS = gql`
	query GetProjects {
		projects {
			id
			name
			description
			status
			clientId
		}
	}
`;

export { GET_PROJECTS };
