import * as C from './styles';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { cancelSubscription } from '../../../redux/responsibleSlice';

export const Subscription = () => {
    const { token, responsible_name, subscription_data, loading, error } = useAppSelector((state) => state.responsible);  
    const dispatch = useAppDispatch();
    
    const HandleCancelSubscription = async () => {
        try {
            if(token) {
                const result = await dispatch(cancelSubscription(token)).unwrap();
            }
        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        <C.SubscriptionContainer>
            <div className='container'>
                <h1>Dados do Plano Parceiro Petland</h1>
                <div className='card--area'>
                    <div><strong>Cartão de Crédito</strong></div>
                    <div><strong>{subscription_data.brand?.toUpperCase()}</strong> •••• •••• •••• {subscription_data.payment_method}</div>
                </div>
                <div className='card--area'>
                    <div><strong>Assinado em</strong></div> <div>{subscription_data.period_start}</div>
                </div>
                <div className='card--area'>
                    <button onClick={HandleCancelSubscription}>Cancelar Plano</button>
                </div>
            </div>
        </C.SubscriptionContainer>
    )
}
