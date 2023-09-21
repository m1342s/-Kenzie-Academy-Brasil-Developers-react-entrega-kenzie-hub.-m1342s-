import { Routes, Route, Outlet } from "react-router-dom";
import { Login } from "../Pages/Login";
import { Register } from "../Pages/Register";
import { Dashboard } from "../Pages/Dashboard";
import { AuthProvider, UserContext } from "../Providers/Authprovider";
import { useContext } from "react";
import { TechProvider } from "../Providers/TechContext";
import { ProtectedRoutes } from "../Components/protectedRoutes";

export const AllRoutes = () => {
  // const { user }= useContext(UserContext)
  return (
    <Routes>
      <Route
        path="/dashboard"
        element={
          <TechProvider>
            <Dashboard />
         </TechProvider>
        }
      />
      <Route element={<ProtectedRoutes />}>
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<Login />} />
      </Route>
    </Routes>
  );
};
