import axios from 'axios';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { setLogOut } from '../../redux/responsibleSlice';

const RequireAuth = () => {
    const state = useAppSelector((state) => state.responsible);
    const navigate = useNavigate();

    const retrieveSubscription = async () => {
        try {
            const { data, status } = await axios.get('http://localhost:5000/companies/subscription-status', {headers: { 
                'Authorization' : `Bearer ${state.token}`,
            }});

            if(status === 403 || status === 401) {
                return setLogOut();
            }

            navigate(`/subscription/data/${data.clientSecret}`);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        state.subscription_status === "active" && state.token !== null
            ? <Outlet /> : state.token === null
            ? <Navigate to="/signin"/> : state.subscription_status === "past_due" || state.subscription_status === "incomplete"
            ? <Navigate to="/subscription/data"/> : state.subscription_status !== undefined
            ? <Navigate to="/subscription" replace /> : <Navigate to="/signin"/>
            
    );
};

export default RequireAuth;
