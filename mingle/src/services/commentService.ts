import { commentI, createCommentRequestT } from "../interfaces";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const commentAPI = createApi({
	reducerPath: "commentAPI",
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/mingle/api/" }),
	endpoints: (build) => ({
		createComment: build.mutation<commentI, createCommentRequestT>({
			query: (data) => ({
				url: "/comment/send/",
				method: "POST",
				body: {...data}
			}),
		}),
	}),
});
