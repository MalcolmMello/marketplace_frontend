import axios from 'axios';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';

const RequireAuth = () => {
    const state = useAppSelector((state) => state.responsible);
    const navigate = useNavigate();

    const retrieveSubscription = async () => {
        try {
            const { data } = await axios.get('http://localhost:3000/companies/subscription-status', {headers: { 
                'Authorization' : `Bearer ${state.token}`,
            }});

            navigate(`/subscription-data/${data.clientSecret}`);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        state.subscription_status === "active" && state.onboarding === true
            ? <Outlet /> : state.subscription_status === "past_due" || state.subscription_status === "incomplete"
            ? <>{retrieveSubscription()}</> : state.subscription_status !== undefined && state.subscription_status !== "active"
            ? <Navigate to="/subscription-renew" /> : state.token !== null
            ? <Navigate to="/unauthrozied" /> : <Navigate to="/signin" />
            
    );
};

export default RequireAuth;
