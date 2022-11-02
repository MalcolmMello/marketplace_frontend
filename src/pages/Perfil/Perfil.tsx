import * as C from './styles'
import { Link, Outlet, useLocation } from 'react-router-dom';

export const Perfil = () => {
    const { pathname } = useLocation();
    
    return (
        <C.Perfil>
            <section className='title'>
                <div>
                    <h1>Perfil</h1>
                    <p>Gerencie as informações de seu perfil</p>
                </div>
                <div>
                    <button>
                        Ver página da loja
                    </button>
                </div>
            </section>
            <C.NestedMenu>
                <ul className='menu'>
                    <li className={`${pathname === '/perfil' ? 'active' : ''}`}>
                        <Link to="">Loja</Link>
                    </li>
                    <li className={`${pathname === '/perfil/address' ? 'active' : ''}`}>
                        <Link to="address">
                            Endereço
                        </Link>
                    </li>
                </ul>
                <Outlet />
            </C.NestedMenu>
        </C.Perfil>   
    );
};