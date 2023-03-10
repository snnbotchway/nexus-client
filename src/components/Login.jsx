import React from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import axios from "axios";

const Login = ({ isAuthenticated }) => {
	const loginWithGoogle = async () => {
		try {
			const res = await axios.get(
				`${process.env.REACT_APP_API_URL}/user/o/google-oauth2/?redirect_uri=${process.env.REACT_APP_CLIENT_URL}/home`,
			);
			window.location.replace(res.data.authorization_url);
		} catch (err) {
			console.log("Error logging in");
		}
	};

	if (isAuthenticated) {
		return <Navigate to="/home" />;
	}
	return (
		<div className="container mt-4">
			<h1>Sign In</h1>
			<p>Log into your account now.</p>

			<Google className="btn btn-secondary" onClick={loginWithGoogle}>
				<img src="/images/google.svg" alt="" />
				Continue with Google.
			</Google>
			<p className="mt-3">
				Don't have an account? <Link to="/signup">Register</Link>
			</p>
		</div>
	);
};
const Google = styled.button`
	display: flex;
	justify-content: center;
	background-color: #fff;
	align-items: center;
	height: 46px;
	width: 30%;
	border-radius: 28px;
	box-shadow: inset 0 0 0 1px rgb(0, 0, 0, 60%),
		inset 0 0 0 2px rgb(0, 0, 0, 0%), inset 0 0 0 1px rgb(0, 0, 0, 0);
	vertical-align: middle;
	z-index: 0;
	transition-duration: 167ms;
	font-size: 20px;
	color: rgba(0, 0, 0, 0.6);

	&:hover {
		background-color: rgba(207, 207, 207, 0.25);
		color: rgba(0, 0, 0, 0.75);
	}
`;
const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, null)(Login);
