import { useRoutes } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Menu } from '../pages/Menu/Menu';

export const MenuRoutes = () => {
    return useRoutes([
        { path: '/', element: <Home /> },
        { path: '/produtos', element: <Menu /> }
    ]);
};