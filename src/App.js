import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import UpdateUser from "./Pages/Dashboard/UpdateUser/UpdateUser";
import Home from "./Pages/Home/Home";
import Header from "./Pages/Shared/Header/Header";

function App() {
	return (
		<div className="App">
			<Header></Header>
			<Routes>
				<Route path="/" element={<Home></Home>}></Route>
				<Route path="/home" element={<Home></Home>}></Route>
				<Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
				<Route
					path="/update-user/:id"
					element={<UpdateUser></UpdateUser>}
				></Route>
			</Routes>
		</div>
	);
}

export default App;
