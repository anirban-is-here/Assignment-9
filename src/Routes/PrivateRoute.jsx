
import toast from "react-hot-toast";
import { Navigate, useLocation } from "react-router";
import { useAuth } from "../contexts/AuthContext";



const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if(loading) return toast("Wait! data is loading")

        if(!user) {
            return <Navigate to="/login" state = {{ from: location }} replace/>
        }

        return children;
};

export default PrivateRoute;
