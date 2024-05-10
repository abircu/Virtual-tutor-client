import react, { useState, useEffect, useContext } from 'react'

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider(props) {
    const [authUser, setAuthUser] = useState(null);
    const [isLoggedIn, setisLoggedIn] = useState(false);
    const value = {
        authUser,
        setAuthUser,
        isLoggedIn,
        setisLoggedIn
    }
    return (
        <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
    )
}