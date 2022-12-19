import axios from 'axios';
import { useLocation, Navigate, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthProvider';

const RequireAuth = () => {
    const { state, dispatch } =  useAuth();
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
            ? <>{retrieveSubscription()}</> : state.subscription_status !== undefined
            ? <Navigate to="/subscription-renew" /> : state.token 
            ? <>Não Autorizado</> : <Navigate to="/" />
    );
};

export default RequireAuth;
