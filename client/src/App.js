import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Header from "./components/Header";
import Client from "./components/Client";

const cache = new InMemoryCache({
	typePolicies: {
		Query: {
			fields: {
				clients: {
					merge(existing, incoming) {
						return incoming;
					},
				},
				projects: {
					merge(existing, incoming) {
						return incoming;
					},
				},
			},
		},
	},
});

function App() {
	const client = new ApolloClient({
		uri: "http://localhost:5000/graphql",
		cache: cache,
	});

	return (
		<>
			<ApolloProvider client={client}>
				<Header />
				<div className="container">
					<Client />
				</div>
			</ApolloProvider>
		</>
	);
}

export default App;
