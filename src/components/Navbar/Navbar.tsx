import * as C from './styles';
import logo from '../../assets/assinatura_completa.svg'
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import logodefault from '../../assets/camera.png'
export const Navbar = () => {
    const { perfil, loading, error } = useAppSelector((state) => state.perfil);    
    
    return (
        <C.Navbar>
            <div className='logo--area'>
                <img src={logo} alt="Windpet Logo" />
            </div>
            <div className='perfil--data'>
                <img src={`${perfil.logo != null ? perfil.logo : logodefault}`} alt="company logo" />
                <h3>{perfil.company_name}</h3>
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

