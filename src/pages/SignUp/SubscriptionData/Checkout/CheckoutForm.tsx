import * as C from './styles';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';

export const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const createSubscription = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(stripe == null || elements == null) {
            alert("Stripe ainda não carregou.");
            return;
        };

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: 'http://localhost:3000/subscription/status',
            }
        });

        if(error.message) {
            alert(error.message);
        };
    };

    return (
        <C.CheckoutForm onSubmit={createSubscription}>
            <div className='card--area'>
                <PaymentElement id='payment-element'/>
            </div>
            <div className='description'>
            <div>
                <h1>Plano Mensal</h1>
                <div className='text'>
                    Torne-se um parceiro Petland, tenha acesso a uma plataforma personalizada
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
        </C.CheckoutForm>
    )
}
