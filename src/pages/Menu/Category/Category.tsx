import { Outlet } from 'react-router-dom';
import * as C from './styles'

export const Category = () => {
    return (
        <C.Category>
            <Outlet />
        </C.Category>
    )
};