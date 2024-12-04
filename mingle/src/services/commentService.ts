import baseQueryWithReauth from "../utils/baseQuery";
import { commentI, createCommentRequestT } from "../interfaces";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { postAPI } from "./postService";
import { message } from "antd";


export const commentAPI = createApi({
	reducerPath: "commentAPI",
	baseQuery: baseQueryWithReauth,
	endpoints: (build) => ({
		createComment: build.mutation<commentI, createCommentRequestT>({
			query: (data) => ({
				url: "/comment/send/",
				method: "POST",
				body: { ...data },
			}),
		}),

	}),
});
