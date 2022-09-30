import { useRoutes } from 'react-router-dom';
import { Home } from '../pages/Home';

export const MenuRoutes = () => {
    return useRoutes([
        { path: '/', element: <Home /> }
    ]);
};