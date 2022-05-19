import { createContext, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [token, setTokenAuth] = useState(null);

    const setToken = (tk) => {
        sessionStorage.setItem("Token", tk);
        setTokenAuth(tk);
    }

    useState(() => {
        setTokenAuth(sessionStorage.getItem("Token"))
    }, []);

    return (
        <AuthContext.Provider value={{
            token, setToken
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;




