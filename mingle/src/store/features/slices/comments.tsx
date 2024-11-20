import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CommentState } from "../../../interfaces";

// Define the initial state using that type
const initialState: CommentState = {
    isOpenCommentSection: false,
	activePostID: null
};

export const commentsSlice = createSlice({
	name: "comments",
	initialState,
	reducers: {
		toggleCommentSection: (
			state,
			action: PayloadAction<{ flag: boolean, postID: number | null }>
		) => {
			state.isOpenCommentSection = action.payload.flag;
			state.activePostID = action.payload.postID;
		},
	},
});

export const { toggleCommentSection } = commentsSlice.actions;

export default commentsSlice.reducer;
