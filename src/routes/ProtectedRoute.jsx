import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = true; // Replace with actual authentication logic

    return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;