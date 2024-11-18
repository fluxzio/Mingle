import Sidebar from "../components/Sidebar";
import Content from "../components/Content";
import { Layout, Space } from "antd";
import React from "react";
import { homeViewStyles, layoutStyle } from "../styles/home";
import Friends from "../components/Friends";
import Stories from "../components/Stories";
import { contentWrapperStyle } from "../styles/comment";

const HomeView: React.FC = () => {
	return (
		<Layout style={homeViewStyles}>
			<Layout style={layoutStyle}>
				<Sidebar />
				<Space direction="vertical" style={contentWrapperStyle}>
					<Stories />
					<Content />
				</Space>
				<Friends />
			</Layout>
		</Layout>
	);
};

export default HomeView;
