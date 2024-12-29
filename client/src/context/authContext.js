import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContexProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser && storedUser !== "null" ? JSON.parse(storedUser) : null;
  });

  const login = async (inputs) => {
    const res = await axios.post("https://ecomagua.org/api/auth/login", inputs);
    setCurrentUser(res.data);
  };

  const logout = async () => {
    await axios.post("https://ecomagua.org/api/auth/logout");
    setCurrentUser(null);
  };

  // Speichere currentUser in localStorage oder lösche es
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("user", JSON.stringify(currentUser));
    } else {
      localStorage.removeItem("user"); // Entferne den Eintrag bei Logout
    }
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
