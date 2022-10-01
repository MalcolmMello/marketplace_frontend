import * as C from './styles';

export const Home = () => {
    return (
        <C.Home>
            <C.Header>
                Olá Petshop do Nau, <br/>
                <span>Bem vindo ao Portal do Parceiro!</span>
            </C.Header>
            <C.AnalyticsOverview>
                <h4>Estatísticas</h4>
                <div className='data--area'>
                    <div className='data--item'>
                        <small>Pedidos de Hoje</small>
                        <span><h2>0</h2> <small>pedidos</small></span>
                    </div>
                    <div className='data--item'>
                        <small>Ticket Médio de Hoje</small>
                        <span><h2>R$ 0,00</h2></span>
                    </div>
                    <div className='data--item'>
                        <small>Vendas de Hoje</small>
                        <span><h2>0</h2> <small>vendas</small></span>
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
                            <h2>0</h2>
                        </span>
                    </div>
                    <div className='perf--item'>
                        <div className='title'>
                            <h2>Pedidos</h2>
                            <small>Últimos 7 dias</small>
                        </div>
                        <span>
                            <h2>0</h2>
                        </span>
                    </div>
                    <div className='perf--item'>
                        <div className='title'>
                            <h2>Ticket Médio</h2>
                            <small>Últimos 7 dias</small>
                        </div>
                        <span>
                            <h2>R$ 0,00</h2>
                        </span>
                    </div>
                    <div className='perf--item'>
                        <div className='title'>
                            <h2>Clientes</h2>
                            <small>Últimos 7 dias</small>
                        </div>
                        <span>
                            <h2>0</h2>
                        </span>
                    </div>
                </div>
            </C.SevenDaysPerformance>
        </C.Home>
    )
};