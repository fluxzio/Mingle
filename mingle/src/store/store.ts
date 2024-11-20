import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import authReducer from "./features/slices/auth"
import commentsReducer from "./features/slices/comments";
import { postAPI } from "../services/postService";
import { setupListeners } from "@reduxjs/toolkit/query";

const reducers = combineReducers({
	auth: authReducer,
	comments: commentsReducer,
	[postAPI.reducerPath]: postAPI.reducer
});

export const store = configureStore({
	reducer: reducers,
	middleware: (getDefaultMiddleware) => {
		const defaultMiddleware = getDefaultMiddleware({
			serializableCheck: false,
		})
		return defaultMiddleware.concat(postAPI.middleware)
	}
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store