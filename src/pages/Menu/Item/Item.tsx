import * as C from './styles'
import { Outlet } from 'react-router-dom';

export const Item = () => {
    return (
        <C.Item>
            <Outlet />
        </C.Item>
    )
};