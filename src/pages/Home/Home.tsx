import * as C from './styles';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks';

interface Finances {
    today_requests: number,
    today_average: number,
    today_sales: number,
    last_week_requests: number,
    last_week_average: number,
    last_week_sales: number,
    week_clients: number
}

const baseURL = 'http://localhost:5000';

export const Home = () => {
    const { token, current_company_id, loading, error } = useAppSelector((state) => state.responsible);
    const { perfil } = useAppSelector((state) => state.perfil);
    
    const [finances, setFinances] = useState<Finances>();

    useEffect(() => {
        getFinances();
    }, []);

    const getFinances = async () => {
        const { data } = await axios.get(`${baseURL}/companies/${current_company_id}/today-finances`, { headers: { 
            'Authorization' : `Bearer ${token}`,
        }});

        setFinances(data);
    };


    return (
        <C.Home>
            <C.Header>
                Olá {`${perfil.company_name}`}, <br/>
                <span>Bem vindo ao Portal do Parceiro!</span>
            </C.Header>
            <C.AnalyticsOverview>
                <h4>Estatísticas</h4>
                <div className='data--area'>
                    <div className='data--item'>
                        <small>Pedidos de Hoje</small>
                        <span><h2>{finances?.today_requests}</h2> <small>pedidos</small></span>
                    </div>
                    <div className='data--item'>
                        <small>Ticket Médio de Hoje</small>
                        <span><h2>R$ {finances?.today_average === null ? 0 : finances?.today_average}</h2></span>
                    </div>
                    <div className='data--item'>
                        <small>Vendas de Hoje</small>
                        <span><h2>{finances?.today_sales}</h2> <small>vendas</small></span>
                    </div>
                    <div className='data--item'>
                        <small>Avaliação</small>
                        <span><h2>5,0</h2></span>
                    </div>
                </div>
            </C.AnalyticsOverview>
            <C.SevenDaysPerformance>
                <h4>Dados Gerais</h4>
                <div className='perf--container'>
                    <div className='perf--item'>
                        <div className='title'>
                            <h2>Vendas</h2>
                            <small>Últimos 7 dias</small>
                        </div>
                        <span>
                            <h2>{finances?.last_week_sales}</h2>
                        </span>
                    </div>
                    <div className='perf--item'>
                        <div className='title'>
                            <h2>Pedidos</h2>
                            <small>Últimos 7 dias</small>
                        </div>
                        <span>
                            <h2>{finances?.last_week_requests}</h2>
                        </span>
                    </div>
                    <div className='perf--item'>
                        <div className='title'>
                            <h2>Ticket Médio</h2>
                            <small>Últimos 7 dias</small>
                        </div>
                        <span>
                            <h2>R$ {finances?.last_week_average}</h2>
                        </span>
                    </div>
                    <div className='perf--item'>
                        <div className='title'>
                            <h2>Clientes</h2>
                            <small>Últimos 7 dias</small>
                        </div>
                        <span>
                            <h2>{finances?.week_clients}</h2>
                        </span>
                    </div>
                </div>
            </C.SevenDaysPerformance>
        </C.Home>
    )
};