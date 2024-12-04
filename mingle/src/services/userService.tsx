import { JWTTokenT } from "../types";
import { UserCreationI, UserFriendI, UserLoginI } from "../interfaces";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userAPI = createApi({
	reducerPath: "userAPI",
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/users/api/" }),
	endpoints: (build) => ({
		login: build.mutation<JWTTokenT, UserLoginI>({
			query: (credentials) => ({
				url: "/token/",
				method: "POST",
				body: credentials,
			}),
		}),
		signup: build.mutation<JWTTokenT, UserCreationI>({
			query: (credentials) => ({
				url: "/register/",
				method: "POST",
				body: credentials,
			}),
		}),
	}),
});
