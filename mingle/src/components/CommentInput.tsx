import { commentAPI } from "../services/commentService";
import { useAppSelector } from "../store/hooks";
import { SendOutlined } from "@ant-design/icons";
import { Input } from "antd";
import React, { useState } from "react";

const commentInputStyles: React.CSSProperties = {
	bottom: 10,
	position: "sticky",
};

const CommentInput: React.FC = () => {
    const [content,setContent] = useState<string | null>(null)
    const [createComment, ] = commentAPI.useCreateCommentMutation()
    const currentPostID = useAppSelector(
        (state) => state.comments.activePostID
    );
    const onClickSend = () => {
        console.log(currentPostID,content)
        if (currentPostID && content) {
			createComment({
				post: { id: currentPostID },
				user: { id: 1 },
				content: content,
			});
		}

    }
	return (
		<Input
			showCount
			maxLength={2500}
			style={commentInputStyles}
			width={"100%"}
			suffix={<SendOutlined style={{ cursor: "pointer" }} onClick={onClickSend}/>}
		/>
	);
};

export default CommentInput;
