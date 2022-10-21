import * as C from './styles';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../../hooks';
import { RequestItem } from '../../../components/RequestItem/RequestItem';

export const ViewRequest = () => {
    const { requests, loading, error } = useAppSelector((state) => state.requests);    
    const { id } = useParams();
    
    return (
        <C.ViewRequest>
            {requests.map(item => {
                if(item.request_id === id) {
                    return (
                        <RequestItem 
                            id={item.request_id}
                            username={item.username}
                            status={item.status.status_name}
                            total={item.total}
                            created_at={item.created_at}
                            address={item.address}
                            products={item.products}
                            isDelivery={item.isDelivery}
                        />
                    )
                }
            })}
        </C.ViewRequest>
    )
}
