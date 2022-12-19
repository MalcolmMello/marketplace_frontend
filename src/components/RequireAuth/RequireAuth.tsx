import { useLocation, Navigation, Outlet } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthProvider';

const RequireAuth = () => {
    const { state, dispatch } =  useAuth();
    const location = useLocation();

    return (
        state.subscription_status === "active" && state.onboarding === true
            ? <>Rota principal</> : state.onboarding === false
            ? <>Processo Onboarding</> : state.subscription_status === "past_due"
            ? <>Rota para pagamento com erro</> : state.subscription_status !== undefined
            ? <>Rota novo pagamento</> : state.token 
            ? <>Não Autorizado</> : <>Página de Login</>
    );
};

export default RequireAuth;
