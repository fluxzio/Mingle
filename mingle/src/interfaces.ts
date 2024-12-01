import { JWTTokenT } from "./types";

export interface AuthState {
	isAuth: boolean;
	tokens:
		| JWTTokenT
		| {
				access: null;
				refresh: null;
		  };
}

export interface CommentState {
	isOpenCommentSection: boolean;
	activePostID: number | null;
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
	media: MediaContentI[];
	likes: number;
	is_liked: {
		id: number;
		like_type: string;
	} | null;
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

export interface createCommentRequestT {
	post: {
		id: number;
	};
	user: {
		id: number;
	};
	content: string;
}

export interface UserLoginI {
	username: string;
	password: string;
}

export interface UserCreationI {
	first_name: string;
	last_name: string;
	email: string;
	username: string;
	password: string;
}
