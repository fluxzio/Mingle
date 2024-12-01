import { commentI, postI } from "../interfaces";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store/store";
import baseQueryWithReauth from "../utils/baseQuery";

export const postAPI = createApi({
	reducerPath: "postAPI",
	baseQuery: baseQueryWithReauth,
	endpoints: (build) => ({
		fetchAllPosts: build.query<postI[], void>({
			query: () => ({
				url: "/posts/all/",
			}),
		}),
		fetchCommentsByPost: build.query<commentI[], number | null>({
			query: (postID) => ({
				url: `/posts/${postID}/`,
			}),
		}),
	}),
});
