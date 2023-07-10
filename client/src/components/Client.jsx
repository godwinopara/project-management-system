import { useQuery, gql } from "@apollo/client";

const GET_CLIENTS = gql`
	query getClients {
		clients {
			id
			name
			email
			phone
		}
	}
`;

const Client = () => {
	const { loading, error, data } = useQuery(GET_CLIENTS);

	if (loading) return <p>Loading......</p>;
	if (error) return <p>Something Happen</p>;

	console.log(data);

	return (
		<>
			{!loading && !error && (
				<div>
					<h1>Client</h1>
				</div>
			)}
		</>
	);
};

export default Client;
