import * as C from './styles'
import { Link, Outlet } from 'react-router-dom';

export const Perfil = () => {
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
                    <li>
                        <Link to="">Loja</Link>
                    </li>
                    <li>
                        <Link to="perfil">
                            Endereço
                        </Link>
                    </li>
                </ul>
                <Outlet />
            </C.NestedMenu>
        </C.Perfil>   
    );
};