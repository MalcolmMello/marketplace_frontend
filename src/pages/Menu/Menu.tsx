import * as C from './styles'
import { Link, Outlet, useLocation } from 'react-router-dom';

export const Menu = () => {
    const { pathname } = useLocation();
    
    return (
        <C.Menu>
            <section className='title'>
                <div>
                    <h1>Seus Produtos</h1>
                    <p>Gerencie o que está a venda</p>
                </div>
                <div>
                    <button>
                        Ver página da loja
                    </button>
                </div>
            </section>
            <C.NestedMenu>
                <ul className='menu'>
                    <li className={`${pathname === '/produtos' ? 'active' : ''}`}>
                        <Link to="">Menu</Link>
                    </li>
                    <li className={`${pathname === '/produtos/category' ? 'active' : ''}`}>
                        <Link to="category">
                            Categorias
                        </Link>
                    </li>
                    <li className={`${pathname === '/produtos/item' ? 'active' : ''}`}>
                        <Link to="item">
                            Produtos
                        </Link>
                    </li>
                </ul>
                <Outlet />
            </C.NestedMenu>
        </C.Menu>   
    );
};