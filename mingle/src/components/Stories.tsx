import { UserOutlined } from "@ant-design/icons";
import { Avatar, Layout, Space } from "antd";
import React from "react";

const storiesLayoutStyles: React.CSSProperties = {
	width: "100%",
	background: "transparent",
	paddingInline: 72,
	paddingTop: 24,
	boxSizing: 'border-box',
};

const Stories: React.FC = () => {
	return (
		<Layout style={storiesLayoutStyles}>
			<Space>
				<Avatar size={'large'}>
					<UserOutlined  />
				</Avatar>
			</Space>
		</Layout>
	);
};

export default Stories;
