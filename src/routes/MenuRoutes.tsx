import { useRoutes } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Menu } from '../pages/Menu/Menu';
import { Category } from '../pages/Menu/Category/Category';
import { ViewMenu } from '../pages/Menu/ViewMenu/ViewMenu';
import { Item } from '../pages/Menu/Item/Item';
import { ViewCategory } from '../pages/Menu/Category/ViewCategory/ViewCategory';
import { AddCategory } from '../pages/Menu/Category/AddCategory/AddCategory';
import { ViewItem } from '../pages/Menu/Item/ViewItem/ViewItem';
import { AddItem } from '../pages/Menu/Item/AddItem/AddItem';
import { Requests } from '../pages/Requests/Requests';
import { ViewRequest } from '../pages/Requests/ViewRequest/ViewRequest';
import { Perfil } from '../pages/Perfil/Perfil';
import { Shop } from '../pages/Perfil/Shop/Shop';
import { Address } from '../pages/Perfil/Address/Address';


export const MenuRoutes = () => {
    return useRoutes([
        { path: '/', element: <Home /> },
        { path: '/produtos', element: <Menu />, children: [
            { path: '', element: <ViewMenu />},
            { path: 'category', element: <Category />, children: [
                { path: '', element: <ViewCategory /> },
                { path: 'add', element: <AddCategory /> },
                { path: 'add/:id', element: <AddCategory /> }
            ] },
            { path: 'item', element: <Item />, children: [
                { path: '', element: <ViewItem />},
                { path: 'add', element: <AddItem /> },
                { path: 'add/:id', element: <AddItem /> }
            ] }
        ]},
        { path: '/pedidos', element: <Requests />, children: [
            { path: 'view/:id', element: <ViewRequest /> }
        ]},
        { path: '/perfil', element: <Perfil />, children: [
            { path: '', element: <Shop /> },
            { path: 'address', element: <Address /> }
        ] }
    ]);
};