import { Navbar } from '../components/Navbar/Navbar';
import { useRoutes } from 'react-router-dom';
import { SignUp } from '../pages/SignUp/SignUp';
import { Responsible } from '../pages/SignUp/ResponsibleData/Responsible';
import { CompanyData } from '../pages/SignUp/CompanyData/CompanyData';
import { AddressData } from '../pages/SignUp/AddressData/AddressData';
import { SignIn } from '../pages/SignIn/SignIn';
import { SubscriptionInfo } from '../pages/SignUp/SubscriptionInfo/SubscriptionInfo';
import { SubscriptionData } from '../pages/SignUp/SubscriptionData/Subscription';
import { SubscriptionStatus } from '../pages/SignUp/SubscriptionStatus/SubscriptionStatus';
import { SubscriptionRenew } from '../pages/SubscriptionRenew/SubscriptionRenew';
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
import { HistoricRequests } from '../pages/HistoricRequests/HistoricRequests';
import { ViewHistoricRequests } from '../pages/HistoricRequests/ViewHistoricRequests/ViewHistoricRequests';
import RequireAuth from '../components/RequireAuth/RequireAuth';
import { Unauthorized } from '../pages/Unauthorized/Unauthorized';
import RequireSubscription from '../components/RequireSubscription/RequireSubscription';
import { Subscription } from '../pages/Perfil/Subscription/Subscription';
import { DeliverySettings } from '../pages/DeliverySettings/DeliverySettings';

export const MenuRoutes = () => {
    return useRoutes([
        /* public routes */
        { path: '/signin', element: <SignIn /> },
        { path: '/signup', element: <SignUp />, children: [
            { path: '', element: <Responsible />},
            { path: 'company-data', element: <CompanyData /> },
            { path: 'address-data', element: <AddressData /> },
            { path: 'subscription-info', element: <SubscriptionInfo /> },
        ]},
        { path: '/unauthrozied', element: <Unauthorized /> },
        /* protected routes */
        { path: '/', element: <RequireAuth />, children: [
            { path: '', element: <Navbar />, children: [
                { path: '', element: <Home /> },
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
                    { path: 'address', element: <Address /> },
                    { path: 'subscription', element: <Subscription /> }
                ]},
                { path: '/historico', element: <HistoricRequests />, children: [
                    { path: '', element: <ViewHistoricRequests /> }
                ]},
                { path: '/entrega-config', element: <DeliverySettings /> }
            ]},
        ]},
        { path: '/subscription', element: <RequireSubscription />, children: [
            { path: '', element: <SubscriptionRenew /> },
            { path: 'data', element: <SubscriptionData /> },
            
        ]},
        { path: '/subscription/status', element: <SubscriptionStatus /> },
        
    ]);
};