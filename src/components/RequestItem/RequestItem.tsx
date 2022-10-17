import * as C from './styles';
import { EM_ABERTO, EM_PREPARO } from '../../constants/status';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeRequestStatus } from '../../redux/sliceRequests';

interface RequestItem {
    id: string,
    username: string,
    status: string,
    total: number,
    created_at: string,
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

export const RequestItem = ({ id, username, status, total, created_at, address, products }: RequestItem) => {
    const dispatch = useAppDispatch();
    
    const date = `às ${new Date(created_at).getHours()}:${new Date(created_at).getMinutes()}`;
    
    const handleCalcelRequest = () => {

    };

    const handleConfirmRequest = async () => {
        try {
            const result = await dispatch(changeRequestStatus({ status_name: EM_PREPARO, id })).unwrap();
        } catch (error) {
            alert(`${error}`);
        }
    };

    return (
        <C.RequestItem>
            <div className='top--area'>
                {status !== EM_ABERTO ? username : null} Pedido #{id.substring(0,8)} - Feito {date}
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
            </div>
        </C.RequestItem>      
    )
}
