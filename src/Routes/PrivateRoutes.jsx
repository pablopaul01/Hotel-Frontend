import React from 'react';
import { Navigate, Outlet } from 'react-router';
// import jwt_decode from 'jwt-decode';

// const useAuthDecode = () => {
//     const token = localStorage.getItem("token");
//     const decode = jwt_decode(token);
//     console.log(decode);
// }

const PrivateRoutes = () => {
    // useAuth();
    const isAuth = localStorage.getItem("token");
    return isAuth ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoutes;