import { Link } from 'react-router-dom';
import { CONCLUIDO, EM_ABERTO, EM_PREPARO, PRONTO_PARA_RETIRADA, SAIU_PARA_ENTREGA } from '../../../constants/status';
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
                {status === EM_ABERTO && <h4>Confirme o Pedido</h4>}
                {status === EM_PREPARO && <h4>Em Preparo</h4>}
                {status === SAIU_PARA_ENTREGA && <h4>Saiu para entrega</h4>}
                {status === PRONTO_PARA_RETIRADA && <h4>Pronto para a retirada</h4>}
                {status === CONCLUIDO && <h4>Concluído</h4>}
            </Link>
        </C.OpenRequest>
    )
}
