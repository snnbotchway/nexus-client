import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
	return (
		<div className="container">
			<div className="card" style={{ width: 700 }}>
				<div className="card-body">
					<h5 className="card-title">Welcome to The Auth</h5>
					<p className="card-text">Click to Login.</p>
					<Link to="/login" className="btn btn-primary">
						Login
					</Link>
					&nbsp;&nbsp;&nbsp;&nbsp;
					<p className="mt-3">
						Don't have an account?{" "}
						<Link to="/signup">Register</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Welcome;
