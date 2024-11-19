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

export interface UserI {
	id: number;
	username: string;
	photo: string | null;
}

export interface postsI {
	id: number;
	content: string;
	created_at: string;
	user: UserI;
}