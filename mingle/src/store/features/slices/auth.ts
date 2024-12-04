import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "../../../interfaces";

// Define the initial state using that type
const initialState: AuthState = {
	user_id: null,
	isAuth: false,
	tokens: {
		access: null,
		refresh: null,
	},
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setAccessToken: (
			state,
			action: PayloadAction<{ access: string | null }>
		) => {
			state.tokens.access = action.payload.access;
		},
		setRefreshToken: (
			state,
			action: PayloadAction<{ refresh: string | null }>
		) => {
			state.tokens.refresh = action.payload.refresh;
		},
		setAuth: (state, action: PayloadAction<{ flag: boolean }>) => {
			state.isAuth = action.payload.flag;
		},
		clearAll(state) {
			state.isAuth = false;
			state.tokens.access = null;
			state.tokens.refresh = null;
			state.user_id = null
		},
	},
});

export const { setAccessToken, setRefreshToken, setAuth, clearAll } =
	authSlice.actions;

export default authSlice.reducer;
