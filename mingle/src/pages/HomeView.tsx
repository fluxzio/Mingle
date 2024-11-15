import Sidebar from "../components/Sidebar";
import Content from "../components/Content";
import Header from "../components/Header";
import { Layout } from "antd";
import React from "react";
import { homeViewStyles, layoutStyle } from "../styles/home";
import Friends from "../components/Friends";

const HomeView: React.FC = () => {
	return (
		<Layout style={homeViewStyles}>
			<Header />
			<Layout style={layoutStyle}>
				<Sidebar />
				<Content />
				<Friends />
			</Layout>
		</Layout>
	);
};

export default HomeView;
