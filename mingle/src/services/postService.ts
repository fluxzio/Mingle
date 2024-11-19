import { postsI } from "../interfaces";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const postAPI = createApi({
	reducerPath: "postAPI",
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/mingle/api/" }),
	endpoints: (build) => ({
		fetchAllPosts: build.query<postsI[], null>({
			query: () => ({
				url: "/posts/all/",
			}),
		}),
	}),
});