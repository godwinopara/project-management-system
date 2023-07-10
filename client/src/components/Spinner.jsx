const Spinner = () => {
	return (
		<div className="d-flex justify-content-center align-items-center min-vh-100">
			<div className="spinner-border" role="status" style={{ width: "8rem", height: "8rem" }}>
				<span className="visually-hidden">Loading....</span>
			</div>
		</div>
	);
};

export default Spinner;
