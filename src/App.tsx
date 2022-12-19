import { Navbar } from "./components/Navbar/Navbar";
import { MenuRoutes } from './routes/MenuRoutes';
import { SignUpRoutes } from "./routes/AuthRoutes";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { token } from "./helpers/token";
import { useAppDispatch, useAppSelector } from "./hooks";
import { getPerfilData } from "./redux/slicePerfil";
import { useEffect, useState } from "react";
import { isLogged } from "./helpers/isLogged";
import { useNavigate } from "react-router-dom";
import { SubscriptionRoutes } from './routes/SubscriptionRoutes';

const stripePromise = loadStripe(
    process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY as string
);

function App() {
    const { perfil, loading, error } = useAppSelector((state) => state.perfil); 

    const [status, setStatus] = useState("");
    
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    useEffect(() => {
        if(token !== null && isLogged()) {
            dispatch(getPerfilData());
            /* getSubscriptionStatus(); */
        } else {
            navigate('/');
        }
    }, [dispatch, token]);

    return (
        <div className="App">
            <Elements stripe={stripePromise}>
            {token == null ? 
                
                    <SignUpRoutes />
                
                    : 
                (perfil.subscription_status === "active" ? 
                    <>
                        <Navbar />
                        <MenuRoutes />  
                    </> 
                        : 
                    (
                        <>
                            <SubscriptionRoutes />
                        </>
                    )
                )
            }
            </Elements> 
        </div>
    );
}

export default App;
