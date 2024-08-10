import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  // const navigate = useNavigate();
  const [auth, setAuth] = useState(() => {
    const savedAuth = localStorage.getItem("auth");
    return savedAuth
      ? JSON.parse(savedAuth)
      : { isAuthenticated: false, user: null };
  });
  console.log("provider auth info", auth);
  const [loadig, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(auth));
  }, [auth]);
  const signOut = () => {
    setLoading(false);
    setAuth({
      isAuthenticated: false,
      user: null,
    });
    // navigate("/");
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, signOut, loadig }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
