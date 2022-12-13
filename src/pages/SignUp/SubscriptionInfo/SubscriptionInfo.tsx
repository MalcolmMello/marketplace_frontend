import * as C from './styles';

export const SubscriptionInfo = () => {
    return (
        <C.SubscriptionInfo>
            <div className='container'>
                <section className='top--area'>
                    <h1>Torne-se um parceiro Windpet</h1>
                    <p className='text'>Ganhe acesso a uma plataforma de gestão de pedidos, estoques e gestão financeira por apenas R$ 100,00.</p>
                </section>
                <section className='bottom--area'>
                    <div className='bottom--area--first'>
                        <h2>Plano Mensal</h2>
                        <div className='price--area'>
                            <div className='price'>
                                <h1>R$ 100</h1>
                                <div className='text'>Por mês</div>
                            </div>
                            <button>Concluir Cadastro</button>
                        </div>
                    </div>
                    <div className='bottom--area--second'>
                        <h2>Por que nós?</h2>
                        <div className='text'>
                            Tenha acesso a uma plataforma personalizada
                            para gerenciar pedidos, movimentação financeira e os produtos que colocar a venda.
                            Além de aumentar o seu número de vendas expondo seu Petshop em um aplicativo focado no mercado Pet.
                        </div>
                    </div>
                </section>
            </div>
        </C.SubscriptionInfo>
    )
}
