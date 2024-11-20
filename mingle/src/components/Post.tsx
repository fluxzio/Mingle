import { Typography, Card, Avatar, Space, Button, Image, Layout } from "antd";
import {
	UserOutlined,
	ShareAltOutlined,
	LikeOutlined,
	DislikeOutlined,
	CommentOutlined,
	BookOutlined,
} from "@ant-design/icons";
import React from "react";
import cardImg from "../assets/card-img.jpg";
import {
	postStyles,
	cardHeaderStyles,
	cardImageLayoutStyles,
	cardImageStyles,
	toolSectionStyles,
} from "../styles/post";
import { useAppDispatch } from "../store/hooks";
import { toggleCommentSection } from "../store/features/slices/comments";
import { postI } from "@/interfaces";

const Post: React.FC<postI> = ({ user, created_at,id }) => {
	const dispath = useAppDispatch();
	const toggleComments = (flag: boolean) => {
		dispath(toggleCommentSection({ flag: flag, postID: id }));
	};
	return (
		<Card size="small" style={postStyles}>
			<Layout style={{ backgroundColor: "transparent" }}>
				<Space style={cardHeaderStyles}>
					<Space>
						<Avatar
							shape="square"
							size={36}
							icon={<UserOutlined />}
						/>
						<Space direction="vertical" style={{ rowGap: 0 }}>
							<Typography>{user.username}</Typography>
							<Typography>{created_at}</Typography>
						</Space>
					</Space>
					<Button type="text">
						<ShareAltOutlined />
					</Button>
				</Space>
				<Layout style={cardImageLayoutStyles}>
					<Image style={cardImageStyles} src={cardImg} />
				</Layout>
				<Space style={toolSectionStyles}>
					<Space>
						<Button type="text">
							<LikeOutlined />
						</Button>
						<Button type="text">
							<DislikeOutlined />
						</Button>
						<Button
							type="text"
							onClick={() => {
								toggleComments(true);
							}}
						>
							<CommentOutlined />
						</Button>
					</Space>
					<Button type="text">
						<BookOutlined />
					</Button>
				</Space>
			</Layout>
		</Card>
	);
};

export default Post;
