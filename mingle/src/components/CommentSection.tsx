import { useAppDispatch, useAppSelector } from "../store/hooks";
import { Layout, List } from "antd";
import React, { useEffect, useState } from "react";
import { commentSectionStyles } from "../styles/comment";
import Comment from "./Comment";
import { postAPI } from "../services/postService";


const CommentSection: React.FC = () => {
	const currentPostID = useAppSelector(
		(state) => state.comments.activePostID
	);
	const { data: comments, refetch } =
		postAPI.useFetchCommentsByPostQuery(currentPostID);
	const dispath = useAppDispatch();
	useEffect(() => {
		if (currentPostID) {
			refetch();
		}
	}, [currentPostID, refetch]);

	return (
		<Layout style={commentSectionStyles}>
			<List>
				{comments && comments.length > 0
					? comments.map((value) => (
							<Comment key={value.id} {...value} />
					  ))
					: null}
			</List>
		</Layout>
	);
};

export default CommentSection;
