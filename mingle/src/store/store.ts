import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import authReducer from "./features/slices/auth";
import commentsReducer from "./features/slices/comments";
import { postAPI } from "../services/postService";
import { setupListeners } from "@reduxjs/toolkit/query";
import { commentAPI } from "../services/commentService";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { userAPI } from "../services/userService";

const reducers = combineReducers({
	auth: authReducer,
	comments: commentsReducer,
	[postAPI.reducerPath]: postAPI.reducer,
	[commentAPI.reducerPath]: commentAPI.reducer,
	[userAPI.reducerPath]: userAPI.reducer,
});
const persistConfig = {
	key: "root",
	storage,
};
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}).concat(
			commentAPI.middleware,
			postAPI.middleware,
			userAPI.middleware
		),
});
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

setupListeners(store.dispatch);
