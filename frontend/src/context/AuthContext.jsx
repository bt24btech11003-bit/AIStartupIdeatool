import { createContext, useState } from "react";

// Create Context
export const AuthContext = createContext();

// Create Provider
export function AuthProvider({ children }) {

    const [token, setToken] = useState(localStorage.getItem("token") || "" );

    // Login Function
    const login = (jwt) => {

        localStorage.setItem("token", jwt);

        setToken(jwt);

    };

    // Logout Function
    const logout = () => {

        localStorage.removeItem("token");

        setToken("");

    };

    return (

        <AuthContext.Provider
            value={{
                token,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>

    );

}