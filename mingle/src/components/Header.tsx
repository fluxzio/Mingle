import { Layout } from "antd";
import React from "react";

const headerStyle: React.CSSProperties = {
	height: 64,
	width: "100%",
	boxSizing: "border-box",
};

const Header: React.FC = () => {
	return <Layout style={headerStyle}></Layout>;
};

export default Header;
