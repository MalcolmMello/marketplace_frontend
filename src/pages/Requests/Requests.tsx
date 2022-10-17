import * as C from './styles';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getRequests } from '../../redux/sliceRequests';
import { OpenRequests } from '../../components/Navbar/OpenRequests/OpenRequests';
import { Outlet } from 'react-router-dom';
import { EM_ABERTO } from '../../constants/status';

export const Requests = () => {
    const { requests, loading, error } = useAppSelector((state) => state.requests);
    
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getRequests());
    }, [dispatch]);

    return (
        <C.Requests>
            <section className='open--requests'>
                {requests.map(item => {
                    if(item.status.status_name === EM_ABERTO) {
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
