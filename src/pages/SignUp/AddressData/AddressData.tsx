import * as C from './styles';

export const AddressData = () => {
    return (
        <C.Responsible>
            <section className='container'>
                <h1>Dados do Responsável pela Loja</h1>
                <form>
                    <div className='input--area'>
                        <label>Nome Completo</label>
                        <input type="text" />
                    </div>
                    <div className='two--inputs'>
                        <div className='input--area'>
                            <label>RG</label>
                            <input type="text" />
                        </div>
                        <div className='input--area'> 
                            <label>CPF</label>
                            <input type="text" />
                        </div>
                    </div>
                    <div className='two--inputs'>
                        <div className='input--area'>
                            <label>Email</label>
                            <input type="text" />
                        </div>
                        <div className='input--area'>
                            <label>Número de Telefone</label>
                            <input type="text" />
                        </div>
                    </div>
                    <div className='password--area'>
                        <div className='input--area'>
                            <label>Senha</label>
                            <input type="text" />
                        </div>
                        <div className='input--area'>
                            <label>Repita a senha</label>
                            <input type="text" />
                        </div>
                    </div>
                    <div className='button--area'>
                        <button>Continuar</button>
                    </div>
                </form>
            </section>
        </C.Responsible>
    )
}
