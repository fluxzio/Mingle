import { commentI, postI } from "../interfaces";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store/store";
import baseQueryWithReauth from "../utils/baseQuery";
import { JWTTokenT } from "@/types";

export const postAPI = createApi({
	reducerPath: "postAPI",
	tagTypes: ["Comments"],
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
		likePost: build.mutation<JWTTokenT, number | null>({
			query: (postID) => ({
				url: `/posts/${postID}/like`,
			}),
		}),
	}),
});
