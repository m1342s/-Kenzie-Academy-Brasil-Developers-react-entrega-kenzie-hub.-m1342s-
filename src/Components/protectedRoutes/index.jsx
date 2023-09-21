import { useContext, useEffect } from "react";
import { useNavigate, Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../../Providers/Authprovider";
import { TechProvider } from "../../Providers/TechContext";

export const ProtectedRoutes = () => {
const user=localStorage.getItem("@TOKEN")
console.log(user)
  return !user? <Outlet/> : <Navigate to="/dashboard"/>
};
