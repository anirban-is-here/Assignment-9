import { useContext } from "react"
import toast from "react-hot-toast";
import { useLocation } from "react-router";



const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if(loading) return toast("Wait! data is loading")

        if(!user) {
            return <Navigate></Navigate>
        }
}
}