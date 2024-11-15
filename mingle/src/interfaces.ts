import { JWTTokenT } from "./types";

export interface AuthState {
	user_id: number | null;
	username: string | null;
	password: string | null;
	photo: string | null;
	tokens: JWTTokenT | {};
}
