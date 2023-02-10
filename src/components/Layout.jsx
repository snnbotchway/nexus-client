import React from "react";

const Layout = (props) => {
	return (
		<div className="container">
			<Navbar />
			{props.children}
		</div>
	);
};

export default Layout;
