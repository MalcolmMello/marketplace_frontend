import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../../hooks';

const RequireSubscription = () => {
    const state = useAppSelector((state) => state.responsible);

    return (
        state.token === null 
        ? <Navigate to="/signin" /> : state.subscription_status === "active" 
        ? <Navigate to="/" /> : <Outlet />
    );
};

/*

state.token !== null && state.subscription_status !== "active"
        ? <Outlet /> : state.token === null
        ? <Navigate to="/signin"/> : state.subscription_status === "active" 
        ? <Navigate to="/" /> : <Outlet />
*/

export default RequireSubscription;
