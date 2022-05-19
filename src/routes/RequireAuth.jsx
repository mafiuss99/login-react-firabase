import { useContext } from "react"
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext"

const RequireAuth = ({ children })=>{
    const { token } = useContext(AuthContext);
    
    return (
        <>
            {
                !token ? (
                    <Navigate to="/login"/>
                ) : (
                    children
                )
            }
        </>
    )
}

export default RequireAuth;