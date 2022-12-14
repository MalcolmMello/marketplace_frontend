import { Navbar } from "./components/Navbar/Navbar";
import { MenuRoutes } from './routes/MenuRoutes';
import { SignUpRoutes } from "./routes/AuthRoutes";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
    process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY as string
);

function App() {
    const token = localStorage.getItem('token');
    
    return (
        <div className="App">
            {token == null ? 
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
