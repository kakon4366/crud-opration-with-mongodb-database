import React from "react";
import useUsers from "../../Hooks/useUsers";
import AddUser from "./AddUser/AddUser";
import UsersTable from "./UsersTable/UsersTable";

const Dashboard = () => {
	const [users] = useUsers();
	console.log("Update user", users);
	return (
		<div className="container">
			<h2 className="text-center">This is dashboard </h2>
			<AddUser></AddUser>
			<p>My users is: {users.length}</p>
			<UsersTable users={users}></UsersTable>
		</div>
	);
};

export default Dashboard;
