import { Outlet,Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const  PrivateRoutes = () =>{

    const {user} : any = useAuth();
    return user ? <Navigate to="/"/> : <Outlet/>

}

export default PrivateRoutes;