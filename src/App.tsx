import { Navbar } from "./components/Navbar/Navbar";
import { MenuRoutes } from './routes/MenuRoutes';
import { SignUpRoutes } from "./routes/AuthRoutes";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { token } from "./helpers/token";
import { useAppDispatch, useAppSelector } from "./hooks";
import { getPerfilData } from "./redux/slicePerfil";
import { useEffect } from "react";
import { isLogged } from "./helpers/isLogged";
import { useNavigate } from "react-router-dom";

const stripePromise = loadStripe(
    process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY as string
);

function App() {
    const { perfil, loading, error } = useAppSelector((state) => state.perfil); 
    
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    useEffect(() => {
        if(token !== null && isLogged()) {
            dispatch(getPerfilData());

            getSubscriptionStatus();
        } else {
            navigate('/');
        }
    }, [dispatch, token]);

    const getSubscriptionStatus = async () => {

    }

    return (
        <div className="App">
            {token == null ? 
                <Elements stripe={stripePromise}>
                    <SignUpRoutes />
                </Elements> 
                    : 
                (
                    <>
                        {perfil.subscription_status === "active" &&
                            <>
                                <Navbar />
                                <MenuRoutes />  
                            </>
                        }
                    </>
                )
            }
        </div>
    );
}

export default App;
