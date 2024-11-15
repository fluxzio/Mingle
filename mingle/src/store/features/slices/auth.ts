import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "../../../interfaces";


// Define the initial state using that type
const initialState: AuthState = {
	isAuth: false,
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
		setAccessToken: (
			state,
			action: PayloadAction<{ access: string }>
		) => {},
		setRefreshToken: (
			state,
			action: PayloadAction<{ refresh: string }>
		) => {},
		setAuth: (state, action: PayloadAction<{ flag: boolean }>) => {
			
		},
	},
});

export const { } = counterSlice.actions;

export default counterSlice.reducer;
