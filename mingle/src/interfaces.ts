import { JWTTokenT } from "./types";

export interface AuthState {
	isAuth: boolean;
	user_id: number | null;
	username: string | null;
	password: string | null;
	photo: string | null;
	tokens: JWTTokenT | {};
}

export interface CommentState {
	isOpenCommentSection: boolean;
	activePostID: number | null
}

export interface UserI {
	id: number;
	username: string;
	photo: string | null;
}

export interface postI {
	id: number;
	content: string;
	created_at: Date;
	user: UserI;
	media: MediaContentI[]
}
export interface MediaContentI {
	id: number;
	content_type: "image" | "video";
	file: string;
	uploaded_at: string;
}
export interface commentI {
	id: number;
	content: string;
	created_at: Date;
	user: UserI;
}


