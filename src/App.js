import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome";
import Signup from "./components/Signup";
import Login from "./components/Login";

import Layout from "./components/Layout";
// import store from "./store";

import Home from "./components/Home";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route exact path="/" element={<Welcome />} />
						<Route exact path="/home" element={<Home />} />
						<Route path="/login" element={<Login />} />
						<Route path="/signup" element={<Signup />} />
					</Routes>
				</Layout>
			</BrowserRouter>
		</div>
	);
}

export default App;
