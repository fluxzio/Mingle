import { commentModalProps } from "../types";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { Layout } from "antd";
import React, { useEffect } from "react";
import { commentSectionStyles } from "../styles/comment";
import Comment from "./Comment";


const CommentSection: React.FC<commentModalProps> = () => {
	const dispath = useAppDispatch();
	return (
		<Layout style={commentSectionStyles}>
			<Comment />
			<Comment />
			<Comment />
		</Layout>
	);
};

export default CommentSection;
