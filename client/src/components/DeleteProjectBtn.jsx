import { useMutation, useQuery } from "@apollo/client";
import { DELETE_PROJECT } from "../mutations/projectMutation";
import { GET_PROJECTS } from "../queries/projectQueries";
import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const DeleteProjectBtn = ({ projectId }) => {
	const navigate = useNavigate();

	const { loading, error, data } = useQuery(GET_PROJECTS);

	const [deleteProject] = useMutation(DELETE_PROJECT, {
		variables: { id: projectId },
		onCompleted: () => navigate("/"),
		update(cache, { data: { deleteProject } }) {
			const { projects } = cache.readQuery({ query: GET_PROJECTS });
			cache.writeQuery({
				query: GET_PROJECTS,
				data: { projects: projects.filter((project) => project.id !== deleteProject.id) },
			});
		},
	});

	const handleClickDeleteProject = (event) => {
		event.preventDefault();

		deleteProject(projectId);
	};

	return (
		<div className="d-flex mt-5 ms-auto">
			<button className="btn btn-danger m-2" onClick={handleClickDeleteProject}>
				<FaTrash className="icon" /> Delete
			</button>
		</div>
	);
};

export default DeleteProjectBtn;
