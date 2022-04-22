import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className="my-4">
			<ul className="text-center">
				<Link to="/">Home</Link>
				<Link className="ms-5" to="/dashboard">
					Dashboard
				</Link>
			</ul>
		</div>
	);
};

export default Header;
