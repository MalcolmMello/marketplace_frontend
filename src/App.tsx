import { Navbar } from "./components/Navbar/Navbar";
import { MenuRoutes } from './routes/MenuRoutes';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useAppDispatch, useAppSelector } from "./hooks";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { setToken } from "./redux/responsibleSlice";

const stripePromise = loadStripe(
    process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY as string
);

function App() {
    const state = useAppSelector((state) => state.responsible); 

    const [status, setStatus] = useState("");
    
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if(!token) {
            return navigate('/signin');
        }

        dispatch(setToken(token));
    }, [localStorage]);

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
