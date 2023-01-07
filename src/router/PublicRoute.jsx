import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth";

export const PublicRoute = ({ children }) => {
    const { state } = useContext( AuthContext );
  return ( state.logged )
    ? <Navigate to="/" />
    : children
}
