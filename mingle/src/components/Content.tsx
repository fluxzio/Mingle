import { Layout, List, Modal, Typography } from "antd";
import React, { useEffect, useState } from "react";
import Post from "./Post";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { toggleCommentSection } from "../store/features/slices/comments";
import CommentSection from "./CommentSection";
import { contentStyle, listStyles } from "../styles/comment";
import Stories from "./Stories";


const Content: React.FC = () => {
	const commentIsOpen = useAppSelector(state => state.comments.isOpenCommentSection)
	const dispath = useAppDispatch();
	const toggleComments = (flag: boolean) => {
		dispath(toggleCommentSection({ flag: flag }));
	};
	return (
		<>
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
				</List>
			</Layout>
			<Modal
				title={<Typography>Комментарии</Typography>}
				open={commentIsOpen}
				onCancel={() => {
					toggleComments(false);
				}}
				footer={false}
			>
				<CommentSection />
			</Modal>
		</>
	);
};

export default Content;
