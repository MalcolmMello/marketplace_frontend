import * as C from './styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setSubscriptionStatus } from '../../redux/responsibleSlice';

const baseURL = 'http://localhost:5000';

const priceId = process.env.REACT_APP_STRIPE_ID;

export const SubscriptionRenew = () => {
    const state = useAppSelector((state) => state.responsible);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleRenewSubscription = async () => {
        const body = {
          priceId
        };

        try {
          const { data } = await axios.post(`${baseURL}/companies/subscription-renew`, body, { headers: { 
            'Authorization' : `Bearer ${state.token}`,
          }});

          dispatch(setSubscriptionStatus(data.subscription_status));

          navigate(`/subscription-data/${data.clientSecret}`); 
        } catch (error) {
          console.log(error);
        }
    };

    return (
        <C.SubscriptionRenew>
            <div className='container'>
                <section className='top--area'>
                    <h1>Renove sua parceria com a Petland</h1>
                    <p className='text'>Volte a ter acesso a uma plataforma de gestão de pedidos, estoques e gestão financeira por apenas R$ 100,00.</p>
                </section>
                <section className='bottom--area'>
                    <div className='bottom--area--first'>
                        <h2>Plano Mensal</h2>
                        <div className='price--area'>
                            <div className='price'>
                                <h1>R$ 100</h1>
                                <div className='text'>Por mês</div>
                            </div>
                            <button onClick={handleRenewSubscription}>Concluir Pagamento</button>
                        </div>
                    </div>
                    <div className='bottom--area--second'>
                        <h2>Por que nós?</h2>
                        <div className='text'>
                            Você pode ter acesso novamente uma plataforma personalizada
                            para gerenciar pedidos, movimentação financeira e os produtos que colocar a venda com facilidade.
                            Além de aumentar o seu número de vendas expondo seu Petshop em um aplicativo focado no mercado Pet.
                        </div>
                    </div>
                </section>
            </div>
        </C.SubscriptionRenew>
    )
}

