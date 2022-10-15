import * as C from './styles';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getRequests } from '../../redux/sliceRequests';
import { OpenRequests } from '../../components/Navbar/OpenRequests/OpenRequests';
import { Outlet } from 'react-router-dom';

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
                    if(item.status === "Pendente") {
                        return (
                            <OpenRequests
                                id={item.request_id}
                                status={item.status}
                            />
                        )
                    }
                })}
            </section>
            <Outlet />
        </C.Requests>
    )
}
