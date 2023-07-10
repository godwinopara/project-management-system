import logo from "../logo.svg";
const Header = () => {
	return (
		<nav>
			<div className="container">
				<a href="/">
					<div className="d-flex align-items-center">
						<img className="logo" src={logo} alt="logo" />
						<div>Project Mgmt</div>
					</div>
				</a>
			</div>
		</nav>
	);
};

export default Header;
