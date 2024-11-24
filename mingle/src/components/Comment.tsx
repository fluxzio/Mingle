import {
	CommentOutlined,
	DislikeOutlined,
	LikeOutlined,
	UserOutlined,
} from "@ant-design/icons";
import { commentCardStyles } from "../styles/comment";
import { Avatar, Button, Layout, List, Space, Typography,Image } from "antd";
import React from "react";
import { commentToolStyles } from "../styles/post";
import { commentI } from "../interfaces";
import { GetFormattedTime } from "../utils/time";

const Comment: React.FC<commentI> = ({ user, content, created_at }) => {
	const [expanded, setExpanded] = React.useState(false);
	const [rows, setRows] = React.useState(2);
	return (
		<List.Item>
			<Space style={commentCardStyles} direction="vertical">
				<Space style={{ alignItems: "center" }}>
					<Avatar
						size={36}
						shape="square"
						icon={user.photo ? <Image src={user.photo} width={'100%'} height={'100%'}  /> : <UserOutlined />}
					></Avatar>
					<Space
						direction="vertical"
						style={{ rowGap: 0, boxSizing: "border-box" }}
					>
						<Typography>{user.username}</Typography>
						<Typography.Text
							type="secondary"
							style={{ fontSize: 12 }}
						>
							{GetFormattedTime(created_at)}
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
					{content}
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
		</List.Item>
	);
};

export default Comment;
