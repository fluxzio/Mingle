import { useAppDispatch, useAppSelector } from "../store/hooks";
import { Empty, Layout, List } from "antd";
import React, { useEffect } from "react";
import { commentSectionStyles } from "../styles/comment";
import Comment from "./Comment";
import { postAPI } from "../services/postService";
import CommentInput from "./CommentInput";



const commentListSectionStyles: React.CSSProperties = {
	overflow: 'auto',

} 
const CommentSection: React.FC = () => {
	const currentPostID = useAppSelector(
		(state) => state.comments.activePostID
	);
	const { data: comments, refetch } =
		postAPI.useFetchCommentsByPostQuery(currentPostID);

	const dispath = useAppDispatch();
	useEffect(() => {
		if (currentPostID != null) {
			refetch();
		}
	}, [refetch]);

	return (
		<Layout style={commentSectionStyles}>
			<List style={commentListSectionStyles}>
				{comments && comments.length > 0
					? comments.map((value) => (
							<Comment key={value.id} {...value} />
					  ))
					: <Empty description={'Нет комментариев'}/>}
			</List>
			<CommentInput />
		</Layout>
	);
};

export default CommentSection;
