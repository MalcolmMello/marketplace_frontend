import * as C from './styles'
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../../hooks';
import { EM_ABERTO } from '../../../constants/status';

export const ViewHistoricRequests = () => {
    const { requests, loading, error } = useAppSelector((state) => state.requests);
    const [params, setParams] = useState({ code: '' , date1: '', date2: '', status: '' });

    const filteredRequests = requests.filter((request) => {
        let createdDate = new Date(request.created_at).getTime();

        let period1 = new Date(params.date1).getTime();
        let period2 = new Date(params.date1).getTime();

        if(createdDate >= period1 && createdDate <= period2) {
            return request
        }
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
                    <select>
                        <option value=""></option>
                        <option value=""></option>
                    </select>
                </div>
            </section>
            <section className='filtered--requests--area'>
                <div className='filtered--top'>
                    <ul>
                        <li>Status</li>
                        <li>Código</li>
                        <li>Cliente</li>
                        <li>Valor</li>
                    </ul>
                </div>
                <div className='filtered--item'>
                    {requests.map((item => {
                        if(item.status.status_name != EM_ABERTO) {
                            return (
                                <ul>
                                    <li>{item.status.status_name.substring(0, 9)}</li>
                                    <li>#{item.request_id.substring(0,5)}</li>
                                    <li>{item.username}</li>
                                    <li>R$ {item.total.toFixed(2).replace('.', ',')}</li>
                                </ul>
                            )
                        }
                    }))}
                </div>
            </section>
        </C.Container>
    )
}
