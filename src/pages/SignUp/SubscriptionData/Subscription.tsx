import * as C from './styles';
import { Elements, useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
    process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY as string
);

export const Subscription = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        getClientSecret();
    }, []);

    const getClientSecret = async () => {
        const { data } = await axios.get('http://localhost:5000/companies/secret');
        setClientSecret(data.clientSecret);
    };

    const createSubscription = async () => {
        
    }

    return (
        <C.Subscription>
            <div className='container'>
                <h1>Parceiro Windpet</h1>
                <div className='content'>
                    {clientSecret !== '' &&
                        <>
                            <div className='card--area'>
                                <Elements stripe={stripePromise} options={{clientSecret: clientSecret}}>
                                    <PaymentElement />
                                </Elements> 
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
                                <button onClick={createSubscription}>
                                    Finalizar cadastro
                                </button>
                            </div>
                        </>
                    }
                </div>
            </div>
        </C.Subscription>
    )
}
