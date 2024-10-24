import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

import "./index.css"

const ProtectedRoute = ({ element }) => {
    const sessionToken = Cookies.get('sessionToken'); 

    // If the token does not exist, navigate to the login page
    if (!sessionToken) {
        return <Navigate to="/login" replace />;
    }

    return element; // Render the passed element directly
};

export default ProtectedRoute;
