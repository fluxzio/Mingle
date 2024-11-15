import { Typography, Card, Avatar, Space, Button, Image, Layout } from "antd";
import { UserOutlined, ShareAltOutlined } from "@ant-design/icons";
import React from "react";
import cardImg from "../assets/card-img.jpg";

const postStyles: React.CSSProperties = {
	width: 500,
};

const cardHeaderStyles: React.CSSProperties = {
	justifyContent: "space-between",
	width: "100%",
};

const cardImageLayoutStyles: React.CSSProperties = {
	marginTop: 16,
};

const cardImageStyles: React.CSSProperties = {
	width: "100%",
	borderRadius: 4,
};

const Post: React.FC = () => {
	return (
		<Card size="default" style={postStyles}>
			<Layout>
				<Space style={cardHeaderStyles}>
					<Space>
						<Avatar
							shape="square"
							size={36}
							icon={<UserOutlined />}
						/>
						<Space direction="vertical" style={{ rowGap: 0 }}>
							<Typography>Test user</Typography>
							<Typography>10 minutes ago</Typography>
						</Space>
					</Space>
					<Button type="text">
						<ShareAltOutlined />
					</Button>
				</Space>
				<Layout style={cardImageLayoutStyles}>
					<Image style={cardImageStyles} src={cardImg} />
				</Layout>
			</Layout>
		</Card>
	);
};

export default Post;
