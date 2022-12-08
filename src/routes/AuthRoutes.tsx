import { SignUp } from '../pages/SignUp/SignUp';
import { Responsible } from '../pages/SignUp/ResponsibleData/Responsible';
import { useRoutes } from 'react-router-dom';
import { CompanyData } from '../pages/SignUp/CompanyData/CompanyData';
import { AddressData } from '../pages/SignUp/AddressData/AddressData';
import { SignIn } from '../pages/SignIn/SignIn';
import { Subscription } from '../pages/SignUp/SubscriptionData/Subscription';


export const SignUpRoutes = () => {
    return useRoutes([
        { path: '/', element: <SignIn /> },
        { path: '/signup', element: <SignUp />, children: [
            {path: '', element: <Responsible />},
            {path: 'company-data', element: <CompanyData />},
            {path: 'address-data', element: <AddressData />},
            {path: 'subscription-data', element: <Subscription /> }
        ]},
        
    ]);
};