import { useContext } from "react";
import { AuthContext } from "../authContext/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <h2 className="flex items-center mx-auto text-4xl gap-5">Loading <span className="loading loading-bars loading-lg "></span></h2>
        
    }
    if (user) {
        return children
    }
    return  <Navigate to='/login' state={{ from: location }} replace />

};

export default PrivateRoute;