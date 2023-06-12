import { useContext } from "react";
import useInstructor from "../hooks/useInstructor/useInstructor";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router";


const InstructorRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const [isInstructor, isLoading] = useInstructor();
    const location = useLocation();

    if(loading || isLoading){
        return <progress className="progress w-56"></progress>
    }

    if (user && isInstructor) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default InstructorRoute;