import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { loginPath } from './RoutePath';

const DiProtectedRoute = ({ children, redirectTo, path }: any) => {
  
    return <>
        {path !== loginPath ? children : <Navigate replace to={redirectTo} />}
    </>
}
export default DiProtectedRoute;