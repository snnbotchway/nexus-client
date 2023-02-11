import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { googleAuthenticate } from "../actions/auth";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import queryString from "querystring-es3";

const Layout = ({ googleAuthenticate, children }) => {
	const location = useLocation();
	useEffect(() => {
		const values = queryString.parse(location.search.slice(1));
		const state = values.state || null;
		const code = values.code || null;
		console.log("State: " + state);
		console.log("Code: " + code);

		if (state && code) {
			googleAuthenticate(state, code);
		}
	}, [location, googleAuthenticate]);

	return (
		<div className="container">
			<Navbar />
			{children}
		</div>
	);
};

export default connect(null, { googleAuthenticate })(Layout);
