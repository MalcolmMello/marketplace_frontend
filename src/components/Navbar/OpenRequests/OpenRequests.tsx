import { Link } from 'react-router-dom';
import * as C from './styles';

interface OpenRequest {
    id: string,
    status: string
}

export const OpenRequests = ({ id, status }: OpenRequest) => {
    return (
        <C.OpenRequest>
            <Link to={`view/${id}`}>
                <div className='top--area'>
                    <div className='request--id'>
                        #{id.substring(0,7)}...
                    </div>
                    <div className='request--status'>
                        {status}
                    </div>
                </div>
                {status === 'Pendente' ? <h4>Confirme o Pedido</h4> : ''}
            </Link>
        </C.OpenRequest>
    )
}
