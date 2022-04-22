import React from "react";

const User = ({ singleUser }) => {
	const { name, user, email, password } = singleUser;
	return (
		<tr>
			<td>1</td>
			<td>{name}</td>
			<td>{user}</td>
			<td>{email}</td>
			<td>{password}</td>
			<td>
				<button>edit</button>
				<button>delete</button>
			</td>
		</tr>
	);
};

export default User;
