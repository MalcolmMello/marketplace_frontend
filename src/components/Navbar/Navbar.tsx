import * as C from './styles';
import axios from 'axios';
import logo from '../../assets/logowhite.png';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import logodefault from '../../assets/camera.png';
import { useEffect, useState } from 'react';
import { fetchCategories } from '../../redux/sliceCategories';
import { getAddress, getPerfilData } from '../../redux/slicePerfil';

export const Navbar = () => {
    const { perfil, address, error } = useAppSelector((state) => state.perfil);  
    const { token, current_company_id } = useAppSelector((state) => state.responsible); 
    
    const [loading, setLoading] = useState(false);
    
    const location = useLocation();
    const { pathname } = location;  
    const dispatch = useAppDispatch();

    useEffect(() => {
        if(token && current_company_id) {
            setLoading(true);
            getAllData(token, current_company_id);
        }
        
    }, [dispatch, token, current_company_id]);

    const getAllData = async (token: string, current_company_id: string) => {
        await dispatch(getPerfilData({token, companyId: current_company_id})).unwrap();
        await dispatch(fetchCategories({token, companyId: current_company_id})).unwrap();
        await dispatch(getAddress({token, companyId: current_company_id})).unwrap();
        setLoading(false);
    }

    const handleCreateStripeExpress = async () => {
        try {
            const  { logo, cover, onboarding, subscription_status, phone_number, description, ...perfilData} = perfil;
            const body = { ...perfilData, company_phone_number: perfil.phone_number, display_name: address.display_name };
            const { data } = await axios.post(`${process.env.REACT_APP_BASE_URL}/companies/create-stripe-express`, body, { headers: { 
                'Authorization' : `Bearer ${token}`,
            }});    
            window.location.href = data.url;
        } catch (error) {
            console.log(error);
        }
        
    };
    
    return (
        <C.Layout>
            <C.Navbar>
                <div className='logo--area'>
                    <img src={logo} alt="Petland Logo" />
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
                        <li className={`${pathname.includes('/entrega-config') ? 'active' : ''}`}>
                            <Link to="entrega-config">Áreas de Entrega</Link>
                        </li>
                        <li className={`${pathname.includes('/perfil') ? 'active' : ''}`}>
                            <Link to="perfil">Perfil</Link>
                        </li>
                    </ul>
                </nav>
            </C.Navbar>
            {loading ? <>Carregando...</> : perfil.onboarding !== undefined && perfil.onboarding ? 
                <Outlet /> : 
                    <div className='incomplete'>
                        <h1>Essa empresa ainda não pode receber pagamentos.</h1>
                        <button onClick={handleCreateStripeExpress}>Clique aqui para concluir o processo.</button>
                    </div> 
            }
            
        </C.Layout>
    );
};

