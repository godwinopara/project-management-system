import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Header from "./components/Header";
import Client from "./components/Client";

function App() {
	const client = new ApolloClient({
		uri: "http://localhost:5000/graphql",
		cache: new InMemoryCache(),
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
