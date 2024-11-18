import { BookOutlined, CommentOutlined, DislikeOutlined, LikeOutlined, UserOutlined } from "@ant-design/icons";
import { commentCardStyles } from "../styles/comment";
import { Avatar, Button, Layout, Space, Typography } from "antd";
import React from "react";
import { commentToolStyles } from "../styles/post";

const Comment: React.FC = () => {
	const [expanded, setExpanded] = React.useState(false);
	const [rows,setRows] = React.useState(2)
	return (
		<Space style={commentCardStyles} direction="vertical">
			<Space style={{ alignItems: "center" }}>
				<Avatar size={36} shape="square">
					<UserOutlined />
				</Avatar>
				<Space
					direction="vertical"
					style={{ rowGap: 0, boxSizing: "border-box" }}
				>
					<Typography>Пользователь</Typography>
					<Typography.Text type="secondary" style={{ fontSize: 12 }}>
						10 минут назад
					</Typography.Text>
				</Space>
			</Space>
			<Typography.Paragraph
				ellipsis={{
					rows,
					expandable: "collapsible",
					expanded,
					onExpand: (_, info) => setExpanded(info.expanded),
					symbol: expanded ? "Свернуть" : "Развернуть",
				}}
			>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy
				text ever since the 1500s, when an unknown printer took a galley
				of type and scrambled it to make a type specimen book. It has
				survived not only five centuries, but also the leap into
				electronic typesetting, remaining essentially unchanged. It was
				popularised in the 1960s with the release of Letraset sheets
				containing Lorem Ipsum passages, and more recently with desktop
				publishing software like Aldus PageMaker including versions of
				Lorem Ipsum.
			</Typography.Paragraph>
			<Space style={commentToolStyles}>
				<Space>
					<Button type="text">
						<LikeOutlined />
					</Button>
					<Button type="text">
						<DislikeOutlined />
					</Button>
					<Button type="text" onClick={() => {}}>
						<CommentOutlined />
					</Button>
				</Space>
			</Space>
		</Space>
	);
};

export default Comment;

