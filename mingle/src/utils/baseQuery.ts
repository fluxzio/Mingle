import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store/store";
import { setAccessToken, clearAll } from "../store/features/slices/auth";
import { message } from "antd";
import { Navigate, useNavigate } from "react-router-dom";

const baseQuery = fetchBaseQuery({
	baseUrl: "http://localhost:8000/mingle/api/", // Default base URL
	prepareHeaders: (headers, { getState }) => {
		const token = (getState() as RootState).auth.tokens.access;

		if (token) {
			headers.set("Authorization", `Bearer ${token}`);
		}

		return headers;
	},
});

const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
	let result = await baseQuery(args, api, extraOptions);
	if (result.error?.status === 401) {
		const refreshToken = (api.getState() as RootState).auth.tokens.refresh;

		if (refreshToken) {

			const refreshBaseQuery = fetchBaseQuery({
				baseUrl: "http://localhost:8000/users/api/", 
			});

			const refreshResult = await refreshBaseQuery(
				{
					url: "/token/refresh/",
					method: "POST",
					body: { refresh: refreshToken },
				},
				api,
				extraOptions
			);
			
			if (refreshResult.data) {
				const { access }: { access: string } = refreshResult.data as {
					access: string;
				};
				api.dispatch(setAccessToken({ access }));
				result = await baseQuery(args, api, extraOptions);
			} else {
				api.dispatch(clearAll());
				message.error(
					"Срок вашей сессии истек. Пожалуйста, войдите снова."
				);
			}
		} else {
			api.dispatch(clearAll());
		}
	}

	return result;
};

export default baseQueryWithReauth;
