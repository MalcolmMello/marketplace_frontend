import * as C from './styles';
import { CANCELADO_PELA_EMPRESA, EM_ABERTO, EM_PREPARO, PRONTO_PARA_RETIRADA, SAIU_PARA_ENTREGA } from '../../constants/status';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeRequestStatus } from '../../redux/sliceRequests';

interface RequestItem {
    id: string,
    username: string,
    status: string,
    total: number,
    created_at: string,
    isDelivery: boolean,
    address: {
        id: string,
        state: string,
        city: string,
        district: string,
        street: string,
        zip_code: string,
        number: string
    },
    products: {
        id: string,
        product_name: string,
        description: string,
        front_cover: string,
        price: number,
        length: number
    }[]
};

export const RequestItem = ({ id, username, status, total, created_at, address, products, isDelivery }: RequestItem) => {
    const dispatch = useAppDispatch();
    
    const date = `às ${new Date(created_at).getHours()}:${new Date(created_at).getMinutes()}`;
    
    const handleCalcelRequest = async () => {
        try {
            const result = await dispatch(changeRequestStatus({ status_name: CANCELADO_PELA_EMPRESA, id })).unwrap();
        } catch (error) {
            alert(`${error}`);
        };
    };

    const handleConfirmRequest = async () => {
        try {
            const result = await dispatch(changeRequestStatus({ status_name: EM_PREPARO, id })).unwrap();
        } catch (error) {
            alert(`${error}`);
        };
    };

    const handleSendRequest = async () => {
        try {
            const result = await dispatch(changeRequestStatus({ status_name: SAIU_PARA_ENTREGA, id })).unwrap();
        } catch (error) {
            alert(`${error}`);
        };
    };

    const handleReadyRequest = async () => {
        try {
            const result = await dispatch(changeRequestStatus({ status_name: PRONTO_PARA_RETIRADA, id })).unwrap();
        } catch (error) {
            alert(`${error}`);
        };
    };

    return (
        <C.RequestItem>
            <div className='top--area'>
                <div className='top--area1'>{status !== EM_ABERTO ? username : null} Pedido #{id.substring(0,8)} - Feito {date}</div> <div className='top--area2'>{isDelivery ? 'Entrega Própria' : 'Retirada do Cliente'}</div>
            </div>
            <div className='address'>
               {address.street}, {address.number}, {address.city} - {address.district} - {address.state} - CEP {address.zip_code}
            </div>
            <div className='request--data'>
                <div className='status'><h4>{status}</h4></div>
                {products.map(item => (
                    <div className='item'>
                        <ul>
                            <li>{item.length}x</li>
                            <li className='product--name'>{item.product_name}</li>
                            <li className='price'>R${item.price.toFixed(2).replace('.', ',')}</li>
                        </ul>
                    </div>
                ))}
                <div className='total'>
                    <div className='title'>Total</div>
                    <div>R$ {total.toFixed(2).replace('.', ',')}</div>
                </div>
            </div>
            <div className='bottom--area'>
                {status === EM_ABERTO && 
                    <div className='button--area'>
                        <button className='cancel' onClick={handleCalcelRequest}>Cancelar</button>
                        <button className='confirm' onClick={handleConfirmRequest}>Confirmar Pedido</button>
                    </div>
                }
                {status === EM_PREPARO &&
                    <div className='button--area'>
                        <button className='send' onClick={handleSendRequest}>Despachar</button>
                    </div>
                }
                {status === PRONTO_PARA_RETIRADA &&
                    <div className='button--area'>
                        <button className='ready' onClick={handleReadyRequest}>Pronto para retirada</button>
                    </div>
                }
            </div>
        </C.RequestItem>      
    )
}
