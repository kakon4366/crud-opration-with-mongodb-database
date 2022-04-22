import React, { useEffect, useState } from "react";
import AddUser from "./AddUser/AddUser";
import UsersTable from "./UsersTable/UsersTable";

const Dashboard = () => {
	const [users, setUser] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5000/users")
			.then((res) => res.json())
			.then((data) => setUser(data));
	}, []);

	return (
		<div className="container">
			<h2>This is dashboard </h2>
			<AddUser></AddUser>
			<p>My users is: {users.length}</p>
			<UsersTable users={users}></UsersTable>
		</div>
	);
};

export default Dashboard;
