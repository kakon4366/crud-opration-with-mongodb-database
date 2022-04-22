import React from "react";
import { Table } from "react-bootstrap";
import User from "../User/User";

const UsersTable = ({ users }) => {
	return (
		<div>
			<Table striped bordered hover size="sm">
				<thead>
					<tr>
						<th>#</th>
						<th>Full Name</th>
						<th>user</th>
						<th>Email Address</th>
						<th>Password</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user) => (
						<User singleUser={user} key={user._id}></User>
					))}
				</tbody>
			</Table>
		</div>
	);
};

export default UsersTable;
