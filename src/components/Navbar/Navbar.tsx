import * as C from './styles';
import logo from '../../assets/assinatura_completa.svg'

export const Navbar = () => {
    return (
        <C.Navbar>
            <div className='logo--area'>
                <img src={logo} alt="Windpet Logo" />
            </div>
            <nav className='navegation'>
                <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        Pedidos
                    </li>
                    <li>
                        Seus Produtos
                    </li>
                </ul>
            </nav>
        </C.Navbar>
    );
};

