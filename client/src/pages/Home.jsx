import AddClientModal from "../components/AddClientModal";
import AddProjectModal from "../components/AddProjectModal";
import Client from "../components/Client";
import Project from "../components/Project";

const Home = () => {
	return (
		<>
			<div className="d-flex align-items-center">
				<AddClientModal />
				<AddProjectModal />
			</div>
			<Project />
			<Client />
		</>
	);
};

export default Home;
