import { Navbar } from "./components/Navbar/Navbar";
import { MenuRoutes } from './routes/MenuRoutes';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useAppDispatch, useAppSelector } from "./hooks";
import { useEffect, useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getResponsible, setLogOut, setToken } from "./redux/responsibleSlice";

const stripePromise = loadStripe(
    process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY as string
);

function App() {
    const state = useAppSelector((state) => state.responsible); 
    
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        
        if(!token) {
            setLogOut();
            return navigate('/signin');
        }

        dispatch(setToken(token));
        dispatch(getResponsible(token));
    }, []);

    return (
        <div className="App">
            <Elements stripe={stripePromise}>
                    <>
                        <MenuRoutes />  
                    </> 
            </Elements> 
        </div>
    );
}

export default App;
