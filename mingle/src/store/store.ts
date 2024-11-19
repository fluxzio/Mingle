import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import authReducer from "./features/slices/auth"
import commentsReducer from "./features/slices/comments";
import { postAPI } from "../services/postService";
import { setupListeners } from "@reduxjs/toolkit/query";

const reducers = combineReducers({
	auth: authReducer,
	comments: commentsReducer,
	[postAPI.reducerPath]: postAPI.reducer
});

const persistConfig = {
	key: "root",
	storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) => {
		const defaultMiddleware = getDefaultMiddleware({
			serializableCheck: false,
		})
		return defaultMiddleware.concat(postAPI.middleware)
	}
});

export const persistor = persistStore(store)
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store