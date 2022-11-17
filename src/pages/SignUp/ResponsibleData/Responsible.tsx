import * as C from './styles'
import { useNavigate } from 'react-router-dom';

export const Responsible = () => {
    const navigate = useNavigate();
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
                        <div className='input--area repeat'>
                            <label>Repita a senha</label>
                            <input type="text" />
                        </div>
                    </div>
                    <div className='button--area'>
                        <button onClick={() => navigate("/company-data")}>Continuar</button>
                    </div>
                </form>
            </section>
        </C.Responsible>
    )
}
