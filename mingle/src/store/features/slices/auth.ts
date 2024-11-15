import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "../../../interfaces";


// Define the initial state using that type
const initialState: AuthState = {
	user_id: null,
	username: null,
	password: null,
	photo: null,
	tokens: {}
};

export const counterSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setAccessToken: (state,action: PayloadAction<{access: string}>) => {

		},
		setRefreshToken: (state,action: PayloadAction<{refresh: string}>) => {

		}

	},
});

export const { } = counterSlice.actions;

export default counterSlice.reducer;
