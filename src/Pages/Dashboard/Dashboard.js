import React, { useEffect, useState } from "react";

const Dashboard = () => {
	const [users, setUser] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5000/users")
			.then((res) => res.json())
			.then((data) => setUser(data));
	}, []);

	return (
		<div>
			<h2>This is dashboard </h2>
			<p>My users is: {users.length}</p>
		</div>
	);
};

export default Dashboard;
