import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div className="container">
			<div className="card" style={{ width: 700 }}>
				<div className="card-body">
					<h5 className="card-title">
						Welcome to The Auth with React & Djoser
					</h5>
					<p className="card-text">
						Thank you for using this authentication system.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Home;
