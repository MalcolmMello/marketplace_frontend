import * as C from './styles';
import { Elements, useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useParams } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';

export const Subscription = () => {
    const [stripePromise, setStripePromise] = useState<any>(null);
    const [clientSecret, setClientSecret] = useState<string | undefined>("");

    const params = useParams();

    useEffect(() => {
        setStripePromise(loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY as string));
        let { clientSecret  } = params;
        setClientSecret(clientSecret);
    }, [])

    const stripe = useStripe();
    const elements = useElements();
    
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const options = useMemo(() => {
        const { clientSecret } = params;
        return {clientSecret}
    }, [elements]);

    const createSubscription = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(stripe == null || elements == null) {
            alert("Stripe ainda não carregou.");
            return;
        };

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: 'http://localhost:3000/subscription-status',
            }
        });

        if(error.message) {
            setErrorMessage(error.message);
            console.log(errorMessage)
        };
    };
    
    return (
        <C.Subscription>
            <div className='container'> 
                <h1>Parceiro Windpet</h1>
                <form className='content' onSubmit={createSubscription}>
                        <>
                            { clientSecret && stripePromise && (
                                <Elements stripe={stripePromise} options={{clientSecret}}>
                                    <div className='card--area'>
                                            <PaymentElement />
                                    </div>
                                    <div className='description'>
                                        <div>
                                            <h1>Plano Mensal</h1>
                                            <div className='text'>
                                                Torne-se um parceiro Windpet, tenha acesso a uma plataforma personalizada
                                                para gerenciar pedidos, movimentação financeira e os produtos que colocar a venda.
                                                Além de aumentar o seu número de vendas expondo seu Petshop em um aplicativo focado no mercado Pet.
                                            </div>
                                        </div>
                                        <div className='total'>
                                            <h2>Total</h2>
                                            <h2>R$ 100,00</h2>
                                        </div>
                                        <button disabled={!stripe} type="submit">
                                            Finalizar Pagamento
                                        </button>
                                    </div>
                                </Elements> 
                            )}
                        </>
                </form>
            </div>
        </C.Subscription>
    )
}
