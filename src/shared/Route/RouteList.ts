import { useRoutes } from 'react-router-dom';
import Login from '../../components/Login/Login';
import { loginPath } from './RoutePath';

interface Route {
    link: string,
    Component: any,
}

export const defaultRoute = '';

const RouteList = () => {


    return [{
        link: loginPath,
        Component: Login
    }];

}

export default RouteList;