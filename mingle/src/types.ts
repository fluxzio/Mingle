import React, { SetStateAction } from "react";

export type JWTTokenT = {
	access: string | null;
	refresh: string | null;
};

export type commentModalProps = {
	changeLoading?: (flag: boolean) => void,
	loadingState?: boolean
}