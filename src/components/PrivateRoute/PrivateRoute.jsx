import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(authContext)
    // console.log("private route user",user)
    const location = useLocation()
    if(loading){
        return <h2>Loading........</h2>
    }
    if(!user){
        return <Navigate state={{from:location.pathname}} to="/login"></Navigate>
    }
    return children;
};

export default PrivateRoute;