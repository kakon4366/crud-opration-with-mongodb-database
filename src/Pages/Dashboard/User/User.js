import React from "react";

const User = ({ singleUser }) => {
	const { _id, name, user, email, password } = singleUser;

	const handleDeleteUser = (id) => {
		console.log(id);
		const url = `http://localhost:5000/user/${id}`;
		fetch(url, {
			method: "DELETE",
		})
			.then((res) => res.json())
			.then((result) => console.log(result));
	};
	return (
		<tr>
			<td>1</td>
			<td>{name}</td>
			<td>{user}</td>
			<td>{email}</td>
			<td>{password}</td>
			<td>
				<button>edit</button>
				<button onClick={() => handleDeleteUser(_id)}>delete</button>
			</td>
		</tr>
	);
};

export default User;
