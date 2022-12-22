import * as C from './styles';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CheckoutForm } from './Checkout/CheckoutForm';

export const Subscription = () => {
    const [stripePromise, setStripePromise] = useState<any>(null);
    const [clientSecret, setClientSecret] = useState<string | undefined>("");

    const params = useParams();

    useEffect(() => {
        setStripePromise(loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY as string));
        let { clientSecret  } = params;
        setClientSecret(clientSecret);
    }, [])
    
    return (
        <C.Subscription>
            <div className='container'> 
                <h1>Parceiro Windpet</h1>
                <div className='content' >
                        <>
                            { clientSecret && stripePromise && (
                                <Elements stripe={stripePromise} options={{clientSecret}}>
                                    <CheckoutForm />
                                </Elements> 
                            )}
                        </>
                </div>
            </div>
        </C.Subscription>
    )
}
