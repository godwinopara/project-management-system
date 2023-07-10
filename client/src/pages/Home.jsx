import AddClientModal from "../components/AddClientModal";
import Client from "../components/Client";
import Project from "../components/Project";

const Home = () => {
	return (
		<>
			<div className="d-flex align-items-center">
				<AddClientModal />
			</div>
			<Project />
			<Client />
		</>
	);
};

export default Home;
