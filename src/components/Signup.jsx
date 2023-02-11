import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import axios from "axios";

const Signup = ({ isAuthenticated }) => {
	const signupWithGoogle = async () => {
		try {
			const res = await axios.get(
				`${process.env.REACT_APP_API_URL}/user/o/google-oauth2/?redirect_uri=${process.env.REACT_APP_CLIENT_URL}/login`,
			);

			window.location.replace(res.data.authorization_url);
		} catch (err) {
			console.log("Error Signing in");
		}
	};

	if (isAuthenticated) {
		return <Navigate to="/home" />;
	}

	return (
		<div className="container mt-4">
			<h1>Sign Up</h1>
			<p>Create into your account now.</p>

			<Google className="btn btn-secondary" onClick={signupWithGoogle}>
				<img src="/images/google.svg" alt="" />
				Continue with Google.
			</Google>
			<p className="mt-3">
				Have an account? <Link to="/login">Sign In</Link>
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

export default connect(mapStateToProps, null)(Signup);
