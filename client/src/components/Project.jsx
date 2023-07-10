import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../queries/projectQueries";
import Spinner from "./Spinner";
import ProjectCard from "./ProjectCard";

const Project = () => {
	const { loading, error, data } = useQuery(GET_PROJECTS);

	if (loading) return <Spinner />;
	if (error) return <div>Something Happen {error.message}</div>;

	return (
		<>
			{data.projects.length > 0 ? (
				<div className="row row-cols-1 row-cols-lg-3 mt-5" id="custom-cards">
					{data.projects.map((project) => {
						return <ProjectCard key={project.id} project={project} />;
					})}
				</div>
			) : (
				<p>No Projects</p>
			)}
		</>
	);
};

export default Project;
