import * as C from './styles'
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../../hooks';
import { CANCELADO_PELA_EMPRESA, CANCELADO_PELO_CLIENTE, CONCLUIDO, EM_ABERTO } from '../../../constants/status';

export const ViewHistoricRequests = () => {
    const { requests, loading, error } = useAppSelector((state) => state.requests);
    const [params, setParams] = useState({ code: '' , date1: '', date2: '', status: '' });

    const filteredRequests = requests.filter((request) => {
        let created_at = new Date(request.created_at);
        let createdDate = `${created_at.getFullYear()}-${created_at.getMonth()+1}-${created_at.getDate()}`;

        return createdDate >= params.date1 && createdDate <= params.date2 && request.request_id.includes(params.code.toLowerCase()) && request.status.status_name.includes(params.status);
    });

    useEffect(() => {console.log(filteredRequests)}, [params])
    
    return (
        <C.Container>
            <section className='filter--area'>
                <div className='input--area'>
                    <label>Código do Pedido</label>
                    <input
                        type="text" 
                        value={params.code}
                        onChange={e => setParams({...params, code: e.target.value})}
                    />
                </div>
                <div className='input--area'>
                    <label>De</label>
                    <input
                        type="date" 
                        value={params.date1}
                        onChange={e => setParams({...params, date1: e.target.value})}
                    />
                </div>
                <div className='input--area'>
                    <label>Até</label>
                    <input
                        type="date" 
                        value={params.date2}
                        onChange={e => setParams({...params, date2: e.target.value})}
                    />
                </div>
                <div className='input--area'>
                    <label>Status</label>
                    <select value={params.status} onChange={e => setParams({...params, status: e.target.value})}>
                        <option value=""></option>
                        <option value={CONCLUIDO}>{CONCLUIDO}</option>
                        <option value={CANCELADO_PELO_CLIENTE}>{CANCELADO_PELO_CLIENTE}</option>
                        <option value={CANCELADO_PELA_EMPRESA}>{CANCELADO_PELA_EMPRESA}</option>
                    </select>
                </div>
            </section>
            <section className='filtered--requests--area'>
                {filteredRequests.length === 0 ? (
                    <div className='no--requests'>Nenhum pedido encontrado</div>
                ) : (
                    <>
                        <div className='filtered--top'>
                            <ul>
                                <li>Status</li>
                                <li>Código</li>
                                <li>Cliente</li>
                                <li>Valor</li>
                            </ul>
                        </div>
                        <div className='filtered--item'>
                            {filteredRequests.map((item => {
                                if(item.status.status_name != EM_ABERTO) {
                                    return (
                                        <ul>
                                            <li>{item.status.status_name}</li>
                                            <li>#{item.request_id.substring(0,8)}</li>
                                            <li>{item.username}</li>
                                            <li>R$ {item.total.toFixed(2).replace('.', ',')}</li>
                                        </ul>
                                    )
                                }
                            }))}
                        </div>
                    </>
                )}
            </section>
        </C.Container>
    )
}
