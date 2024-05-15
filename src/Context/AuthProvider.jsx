import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    user: null,
  });
  const [loadig, setLoading] = useState(true);
  const signOut = () => {
    setLoading(false);
    setAuth({
      isAuthenticated: false,
      user: null,
    });
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, signOut, loadig }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
