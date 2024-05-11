import { useState, useEffect, useContext } from "react";
import React from "react";
import axios from "axios";
import { baseUrl } from "../config/config";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider(props) {
  const [authUser, setAuthUser] = useState(null);
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const signIn = async (email, password) => {
    try {
      const response = await axios.post(`${baseUrl}/account/login`, {
        email,
        password,
      });
      const user = response.data.user;
      console.log("user response", user);
      setAuthUser(user);
      setisLoggedIn(true);
      return { success: true, user };
    } catch (error) {
      console.log("login failed", error);
    }
  };
  const signOut = () => {
    setAuthUser(null);
    setisLoggedIn(false);
  };

  const value = {
    authUser,
    isLoggedIn,
    signIn,
    signOut,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}
