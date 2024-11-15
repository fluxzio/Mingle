import { Layout, List } from "antd";
import React from "react";
import Post from "./Post";
const contentStyle: React.CSSProperties = {
	overflow: "auto",
	display: 'flex',
	height: "100%",
	width: '100%',
	boxSizing: "border-box",
	marginLeft: 8,
	padding: 8,
};

const listStyles: React.CSSProperties = {
	display: "flex",
	justifyContent: 'center',
};
const Content: React.FC = () => {
	return (
		<Layout style={contentStyle}>
			<List style={listStyles}>
				<List.Item>
					<Post />
				</List.Item>
				<List.Item>
					<Post />
				</List.Item>
				<List.Item>
					<Post />
				</List.Item>
				<List.Item>
					<Post />
				</List.Item>
				<List.Item>
					<Post />
				</List.Item>
			</List>
		</Layout>
	);
};

export default Content;
