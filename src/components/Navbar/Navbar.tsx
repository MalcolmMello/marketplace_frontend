import * as C from './styles';
import logo from '../../assets/assinatura_completa.svg';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import logodefault from '../../assets/camera.png';
import { useEffect } from 'react';
import { fetchCategories } from '../../redux/sliceCategories';
import { getAddress, getPerfilData } from '../../redux/slicePerfil';

export const Navbar = () => {
    const { perfil, loading, error } = useAppSelector((state) => state.perfil);  
    const { token, current_company_id } = useAppSelector((state) => state.responsible);  
    const location = useLocation();
    const { pathname } = location;  
    const dispatch = useAppDispatch();

    useEffect(() => {
        if(token && current_company_id) {
            dispatch(getPerfilData({token, companyId: current_company_id}));
            dispatch(fetchCategories({token, companyId: current_company_id}));
            dispatch(getAddress({token, companyId: current_company_id}));
        }
        
    }, [dispatch, token, current_company_id]);
    
    return (
        <C.Layout>
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
                        <li className={`${pathname === '/' ? 'active' : ''}`}>
                            <Link to="/">Home</Link>
                        </li>
                        <li className={`${pathname.includes('/produtos') ? 'active' : ''}`}>
                            <Link to="produtos">Seus Produtos</Link>
                        </li>
                        <li className={`${pathname.includes('/pedidos') ? 'active' : ''}`}>
                            <Link to="pedidos">Novos Pedidos</Link>
                        </li>
                        <li className={`${pathname.includes('/historico') ? 'active' : ''}`}>
                            <Link to="historico">Pedidos</Link>
                        </li>
                        <li className={`${pathname.includes('/perfil') ? 'active' : ''}`}>
                            <Link to="perfil">Perfil</Link>
                        </li>
                    </ul>
                </nav>
            </C.Navbar>
            <Outlet />
        </C.Layout>
    );
};

