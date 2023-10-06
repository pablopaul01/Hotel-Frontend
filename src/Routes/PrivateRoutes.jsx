import React from 'react';
import { Navigate, Outlet } from 'react-router';
// import jwt_decode from 'jwt-decode';

const useAuth = () => {
    const token = localStorage.getItem("token");
    const decode = jwt_decode(token);

}

const PrivateRoutes = () => {
    // useAuth();
    const isAuth = localStorage.getItem("token");
    return isAuth ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoutes;