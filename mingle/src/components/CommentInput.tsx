import { commentAPI } from "../services/commentService";
import { useAppSelector } from "../store/hooks";
import { SendOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import React, { useEffect, useState } from "react";
import { CommentInputProps } from "../types";

type CommentFieldType = {
	content: string
}

const CommentInput: React.FC<CommentInputProps> = ({refetchComments}) => {
	const [createComment] = commentAPI.useCreateCommentMutation();
	const currentPostID = useAppSelector(
		(state) => state.comments.activePostID
	);

	const onClickSend =  (values: CommentFieldType) => {
		if (currentPostID && values.content) {
			createComment({
				post: currentPostID,
				content: values.content,
			});
			refetchComments()
		}
	};

	return (
		<Form style={{ position: "sticky", bottom: 10 }} onFinish={onClickSend}>
			<Form.Item<CommentFieldType>
				name="content"
				rules={[
					{
						required: true,
						message: "Коментарии не может быть пустым!",
					},
				]}
			>
				<Input
					showCount
					maxLength={2500}
					width={"100%"}
					suffix={
						<Button htmlType="submit" type="text">
							<SendOutlined style={{ cursor: "pointer" }} />
						</Button>
					}
				/>
			</Form.Item>
		</Form>
	);
};

export default CommentInput;
