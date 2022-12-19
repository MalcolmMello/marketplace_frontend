import { Navbar } from "./components/Navbar/Navbar";
import { MenuRoutes } from './routes/MenuRoutes';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useAppDispatch, useAppSelector } from "./hooks";
import { getPerfilData } from "./redux/slicePerfil";
import { useEffect, useState } from "react";
import { isLogged } from "./helpers/isLogged";
import { useNavigate } from "react-router-dom";

const stripePromise = loadStripe(
    process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY as string
);

function App() {
    const { perfil, loading, error } = useAppSelector((state) => state.perfil); 

    const [status, setStatus] = useState("");
    
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    return (
        <div className="App">
            <Elements stripe={stripePromise}>
                    <>
                        <Navbar />
                        <MenuRoutes />  
                    </> 
            </Elements> 
        </div>
    );
}

export default App;
