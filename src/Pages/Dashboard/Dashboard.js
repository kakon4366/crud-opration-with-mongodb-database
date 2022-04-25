import React, { useState } from "react";
import useUsers from "../../Hooks/useUsers";
import AddUser from "./AddUser/AddUser";
import UsersTable from "./UsersTable/UsersTable";

const Dashboard = () => {
	const [control, setControl] = useState([]);
	const [users] = useUsers();
	console.log("Update user", users);

	const handleControl = () => {
		setControl(!control);
	};

	return (
		<div className="container">
			<h2 className="text-center">This is dashboard </h2>
			<AddUser handleControl={handleControl}></AddUser>
			<p>My users is: {users.length}</p>
			<UsersTable control={control} users={users}></UsersTable>
		</div>
	);
};

export default Dashboard;
