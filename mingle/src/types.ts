export type JWTTokenT = {
	access: string | null;
	refresh: string | null;
};

export type ProtectedRouteT = {
	children: React.ReactNode
}