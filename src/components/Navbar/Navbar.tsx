import * as C from './styles';
import logo from '../../assets/assinatura_completa.svg'
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <C.Navbar>
            <div className='logo--area'>
                <img src={logo} alt="Windpet Logo" />
            </div>
            <nav className='navegation'>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="produtos">Seus Produtos</Link>
                    </li>
                    <li>
                        <Link to="pedidos">Pedidos</Link>
                    </li>
                    <li>
                        <Link to="perfil">Perfil</Link>
                    </li>
                </ul>
            </nav>
        </C.Navbar>
    );
};

