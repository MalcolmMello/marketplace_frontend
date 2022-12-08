import { Navbar } from "./components/Navbar/Navbar";
import { MenuRoutes } from './routes/MenuRoutes';
import { useAppSelector } from './hooks';
import { SignUpRoutes } from "./routes/AuthRoutes";

import { CardElement, Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
    process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY as string
);

function App() {
    const { user, token } = useAppSelector((state) => state.auth);
    
    return (
        <div className="App">
            {user == null && token == null? 
                <Elements stripe={stripePromise}>
                    <SignUpRoutes />
                </Elements> 
                    : 
                (
                    <>
                        <Navbar />
                        <MenuRoutes />
                    </>
                )}
        </div>
    );
}

export default App;
