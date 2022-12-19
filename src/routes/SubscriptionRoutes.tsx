import { useRoutes } from 'react-router-dom';
import { Subscription } from '../pages/SignUp/SubscriptionData/Subscription';
import { SubscriptionStatus } from '../pages/SignUp/SubscriptionStatus/SubscriptionStatus';
import { SubscriptionHome } from '../pages/SubscriptionHome/SubscriptionHome';


export const SubscriptionRoutes = () => {
    return useRoutes([
        { path: '', element: <SubscriptionHome /> },
        { path: 'subscription-data/:clientSecret', element: <Subscription /> },
        { path: 'subscription-status', element: <SubscriptionStatus /> }
    ]);
};