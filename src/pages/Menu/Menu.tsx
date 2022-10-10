import * as C from './styles'
import { Link, Outlet } from 'react-router-dom';

export const Menu = () => {
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
                <Outlet />
            </C.NestedMenu>
        </C.Menu>   
    );
};