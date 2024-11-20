import { Layout, Modal, Typography } from "antd";
import React from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { toggleCommentSection } from "../store/features/slices/comments";
import CommentSection from "./CommentSection";
import { contentStyle } from "../styles/comment";
import PostsList from "./PostsList";


const Content: React.FC = () => {
	const commentIsOpen = useAppSelector(state => state.comments.isOpenCommentSection)
	const dispath = useAppDispatch();
	const toggleComments = (flag: boolean) => {
		dispath(toggleCommentSection({ flag: flag,postID: null }));
	};
	return (
		<>
			<Layout style={contentStyle}>
				<PostsList />
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
