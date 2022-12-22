import * as C from './styles';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getRequests } from '../../redux/sliceRequests';
import { OpenRequests } from '../../components/Navbar/OpenRequests/OpenRequests';
import { Outlet } from 'react-router-dom';
import { EM_ABERTO, CONCLUIDO, CANCELADO_PELA_EMPRESA, CANCELADO_PELO_CLIENTE } from '../../constants/status';

export const Requests = () => {
    const { token, current_company_id } = useAppSelector((state) => state.responsible); 
    const { requests, loading, error } = useAppSelector((state) => state.requests);
    
    const dispatch = useAppDispatch();

    useEffect(() => {
        if(token && current_company_id) {
            dispatch(getRequests({ token, companyId: current_company_id }));
        }
    }, [dispatch, token, current_company_id]);

    return (
        <C.Requests>
            <section className='open--requests'>
                {requests.map(item => {
                    if(item.status.status_name !== CONCLUIDO && item.status.status_name !== CANCELADO_PELA_EMPRESA && item.status.status_name !== CANCELADO_PELO_CLIENTE) {
                        return (
                            <OpenRequests
                                id={item.request_id}
                                status={item.status.status_name}
                            />
                        )
                    }
                })}
            </section>
            <Outlet />
        </C.Requests>
    )
}
