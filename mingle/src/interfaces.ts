import { JWTTokenT } from "./types";

export interface AuthState {
	isAuth: boolean,
	user_id: number | null;
	username: string | null;
	password: string | null;
	photo: string | null;
	tokens: JWTTokenT | {};
}

export interface CommentState {
	isOpenCommentSection: boolean,
}

