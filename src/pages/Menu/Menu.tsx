import * as C from './styles'
import { Link, Outlet } from 'react-router-dom';

export const Menu = () => {
    return (
        <C.Menu>
            <C.NestedMenu>
                <ul>
                    <li>
                        <Link to="">Menu</Link>
                    </li>
                    <li>
                        <Link to="category">
                            Categorias
                        </Link>
                    </li>
                    <li>
                        <Link to="item">
                            Produtos
                        </Link>
                    </li>
                </ul>
            </C.NestedMenu>
            <Outlet />
        </C.Menu>   
    );
};