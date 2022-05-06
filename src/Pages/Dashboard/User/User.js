import React from "react";
import { useNavigate } from "react-router-dom";
import useUsers from "../../../Hooks/useUsers";

const User = ({ singleUser, handlerDeleteControl, index }) => {
	const [users, setUsers] = useUsers();
	const { _id, name, user, email, password } = singleUser;
	const navigate = useNavigate();

	const handleDeleteUser = (id) => {
		if (window.confirm("Are you sure delete this user?")) {
			const url = `http://localhost:5000/user/${id}`;
			fetch(url, {
				method: "DELETE",
			})
				.then((res) => res.json())
				.then((result) => {
					console.log(result);
					const remining = users.filter((user) => user._id !== id);
					setUsers(remining);
				});
		}
	};

	const handleUpdateUser = (id) => {
		navigate("/update-user/" + id);
	};
	return (
		<tr>
			<td>{index + 1}</td>
			<td>{name}</td>
			<td>{user}</td>
			<td>{email}</td>
			<td>{password}</td>
			<td>
				<button
					className="btn btn-primary me-2"
					onClick={() => handleUpdateUser(_id)}
				>
					edit
				</button>
				<button
					className="btn btn-danger"
					onClick={() => {
						handleDeleteUser(_id);
						handlerDeleteControl();
					}}
				>
					delete
				</button>
			</td>
		</tr>
	);
};

export default User;
