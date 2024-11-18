import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CommentState } from "../../../interfaces";

// Define the initial state using that type
const initialState: CommentState = {
    isOpenCommentSection: false,
};

export const commentsSlice = createSlice({
	name: "comments",
	initialState,
	reducers: {
		toggleCommentSection: (
			state,
			action: PayloadAction<{ flag: boolean }>
		) => {
			state.isOpenCommentSection = action.payload.flag;
		},
	},
});

export const { toggleCommentSection } = commentsSlice.actions;

export default commentsSlice.reducer;
