import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const UpdateUser = () => {
	const { id } = useParams();
	const { register, handleSubmit } = useForm();

	const onSubmit = (data, e) => {
		const url = `http://localhost:5000/user/${id}`;
		fetch(url, {
			method: "PUT",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((result) => {
				console.log(result);
				alert("Update success!");
				e.target.reset();
			});
	};
	return (
		<div className="container">
			<h2 className="text-center">Update User</h2>
			<div className="w-50 mx-auto">
				<form
					className="d-flex flex-column"
					onSubmit={handleSubmit(onSubmit)}
				>
					<input
						className="mb-3 p-2"
						placeholder="Full Name"
						{...register("name", { required: true })}
					/>
					<input
						className="mb-3 p-2"
						placeholder="user"
						{...register("user", { required: true })}
					/>
					<input
						className="mb-3 p-2"
						placeholder="E-mail Address"
						{...register("email", { required: true })}
					/>
					<input
						className="mb-3 p-2"
						placeholder="Password"
						{...register("password", { required: true })}
					/>
					<input
						className="mb-3 py-1 btn btn-primary"
						type="submit"
						value="Update User"
					/>
				</form>
			</div>
		</div>
	);
};

export default UpdateUser;
