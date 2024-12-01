import { useAppSelector } from "../store/hooks";
import { ProtectedRouteT } from "../types";
import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";




const ProtectedRoute: React.FC<ProtectedRouteT> = ({children}) => {
	const isAuth = useAppSelector((state) => state.auth.isAuth);

	return isAuth ? children : <Navigate to={"/login/"} />;
}; 

export default ProtectedRoute;
