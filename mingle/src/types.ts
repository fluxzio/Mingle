import React, { SetStateAction } from "react";

export type JWTTokenT = {
	access: string | null;
	refresh: string | null;
};