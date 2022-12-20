import * as C from './styles';
import { useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks';
import { setSubscriptionStatus } from '../../../redux/responsibleSlice';

export const SubscriptionStatus = () => {
    const stripe = useStripe();
    const elements = useElements();
    const dispatch = useAppDispatch();

    const [message, setMessage] = useState<string | null>(null);
    const [link, setLink] = useState('');

    useEffect(() => {
        if (!stripe) {
          return;
        }

        paymentIntent();

    }, [stripe]);

    const paymentIntent = async () => {
        const clientSecret = new URLSearchParams(window.location.search).get(
            "payment_intent_client_secret"
        );
      
        if (!clientSecret) {
            return;
        }
  
        const paymentIntent = await retrievePaymentIntent(clientSecret);
      
        if(paymentIntent) {
            switch (paymentIntent.status) {
                case "succeeded":
                    setMessage("Payment succeeded!");
                    dispatch(setSubscriptionStatus("active"));
                    setLink('/');
                break;
                case "processing":
                    setMessage("Your payment is processing.");
                    setLink('/');
                break;
                case "requires_payment_method":
                    setMessage("Your payment was not successful, please try again.");
                    setLink(`/subscription-data/${clientSecret}`);
                break;
                default:
                    setMessage("Something went wrong.");
                    setLink('/');
                break;
            }
        } else {
            setMessage("Pagamento não encontrado");
        }
    };

    const retrievePaymentIntent = async (clientSecret: string) => {
        if (!stripe) {
            return;
        }
        
        const { paymentIntent } = await stripe.retrievePaymentIntent(clientSecret);

        return paymentIntent;
    }
    
    return (
        <C.SubscriptionStatus>
            {message &&
                <>
                    <div>{message}</div>
                    <Link to={`${link}`}></Link>
                </>
            }
        </C.SubscriptionStatus>
    )
}
