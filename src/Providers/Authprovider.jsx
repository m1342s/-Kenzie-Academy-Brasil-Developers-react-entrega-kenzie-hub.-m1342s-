import { createContext, useEffect, useState } from "react";
import { api } from "../Request/requestAPI";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});
UserContext.Provider;

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  
  const handleLogin = async (data) => {
    try {
      const response = await api.post("/sessions", data);
      localStorage.setItem("@TOKEN", JSON.stringify(response.data.token));
      localStorage.setItem("@USERID", JSON.stringify(response.data.user.id));

      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const getUser = async () => {
    const userID =JSON.parse(localStorage.getItem("@USERID"));

    try {
      const response = await api.get(`/users/${userID}`);
      setUser(response.data);
    } catch (error) {
        console.log(error);
      }}
  const logout = () => {
    localStorage.clear();
  };
  return (
    <UserContext.Provider value={{ user, setUser, logout, handleLogin,getUser }}>
      {children}
    </UserContext.Provider>
  );
};
