import * as C from './styles';
import { CardElement, Elements, useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
    process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY as string
);

export const Subscription = () => {
    const stripe = useStripe();
    const element = useElements();
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        getClientSecret();
    }, []);

    const getClientSecret = async () => {
        const { data } = await axios.get('http://localhost:5000/companies/secret');
        setClientSecret(data.clientSecret);
    }; 
    return (
        <C.Subscription>
            <div className='container'>
                <div className='card--area'>
                {clientSecret !== '' &&
                    <Elements stripe={stripePromise} options={{clientSecret: clientSecret}}>
                        <PaymentElement />
                    </Elements> 
                }
                </div>
                <div>
                    <div>

                    </div>
                    <button>

                    </button>
                </div>
            </div>
        </C.Subscription>
    )
}
