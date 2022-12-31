import * as C from './styles';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CheckoutForm } from './Checkout/CheckoutForm';
import { setLogOut } from '../../../redux/responsibleSlice';
import axios from 'axios';
import { useAppSelector } from '../../../hooks';

export const SubscriptionData = () => {
    const state = useAppSelector((state) => state.responsible);
    
    const [stripePromise, setStripePromise] = useState<any>(null);
    const [clientSecret, setClientSecret] = useState<string | undefined>("");

    const params = useParams();

    useEffect(() => {
        setStripePromise(loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY as string));
        const secret = retrieveSubscription();
    }, []);

    const retrieveSubscription = async () => {
        try {
            const { data, status } = await axios.get('http://localhost:5000/companies/subscription-status', {headers: { 
                'Authorization' : `Bearer ${state.token}`,
            }});

            if(status === 403 || status === 401) {
                return setLogOut();
            }

            setClientSecret(data.clientSecret);
        } catch (error) {
            console.log(error);
        }
    };
    
    return (
        <C.Subscription>
            <div className='container'> 
                <h1>Parceiro Petland</h1>
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
