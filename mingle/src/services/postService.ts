import { commentI, postI } from "../interfaces";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postAPI = createApi({
	reducerPath: "postAPI",
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/mingle/api/" }),
	endpoints: (build) => ({
		fetchAllPosts: build.query<postI[], null>({
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
