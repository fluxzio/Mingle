import { UserOutlined } from "@ant-design/icons";
import { Avatar, Layout, Space } from "antd";
import React from "react";

const storiesLayoutStyles: React.CSSProperties = {
	width: "100%",
	background: "transparent",
	padding: 16,
	boxSizing: 'border-box',
};

const Stories: React.FC = () => {
	return (
		<Layout style={storiesLayoutStyles}>
			<Space>
				<Avatar>
					<UserOutlined />
				</Avatar>
				<Avatar>
					<UserOutlined />
				</Avatar>
				<Avatar>
					<UserOutlined />
				</Avatar>
				<Avatar>
					<UserOutlined />
				</Avatar>
				<Avatar>
					<UserOutlined />
				</Avatar>
			</Space>
		</Layout>
	);
};

export default Stories;
