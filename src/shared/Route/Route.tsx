import { Route, Routes, Navigate, BrowserRouter, useRoutes } from 'react-router-dom';
import DiProtectedRoute from './ProtectedRoute';
import RouteList from './RouteList';
import Login from '../../components/Login/Login';
import Dashboard from '../../components/Dashboard/Dashboard';
import { loginPath,dashboardPath,purchasePath,salesPath, productPath,subProductPath,toast } from './RoutePath';
import Purchase from '../../components/Purchase/Purchase';
import Sales from '../../components/Sales/Sales';
import Product from '../../components/Product/Product';
import SubProduct from '../../components/SubProduct/SubProduct';
import Toast from '../../shared/toast';
const DiRoutes = () => {

    // const getRoutesList = ():any => {
    //     let routeList = useRoutes([{ path: '/', element: <Login /> }]);
    //     return routeList;
    // }

    return (
        <>
        {
            useRoutes([
                { path: loginPath, element: <Login /> },
                { path: dashboardPath, element: <Dashboard /> },
                { path: purchasePath, element: <Purchase /> },
                { path: salesPath, element: <Sales /> },
                { path: productPath, element: <Product /> },
                { path: subProductPath, element: <SubProduct /> },
                {path: toast, element: <Toast/>},
            { path: '/', element: <Navigate to={loginPath} /> },
            { path: '*', element: <Navigate to={loginPath} /> }
        ])
            
            }
            </>
    )
    // return (
    //     <Routes>
    //         {
    //             [
    //                 RouteList().map(({ link, Component }, idx: number) => {
    //                     return (
    //                         <Route path={link} element={
    //                             <DiProtectedRoute redirectTo={loginPath} path={link}>
    //                                 <Component />
    //                             </DiProtectedRoute>
    //                         }
    //                             key={idx} /> 
    //                     );
    //                 }),
    //                 <Route key={loginPath} path={loginPath} element={<Login />} />, // not found
    //                 <Route key={'/'} path="/" element={<Navigate to={loginPath} />} />, // default
    //                 <Route key={'*'} path="*" element={<Navigate to={loginPath} />} />
    //             ]}
    //     </Routes>
    // )
}

export default DiRoutes;