import * as C from './styles';
import { useNavigate } from 'react-router-dom';

/* company_name, company_email, company_phone_number, description, cnpj  */

export const CompanyData = () => {
    const navigate = useNavigate();
    return (
        <C.Responsible>
            <section className='container'>
                <h1>Dados do Responsável pela Loja</h1>
                <form>
                    <div className='input--area'>
                        <label>Nome da Empresa</label>
                        <input type="text" />
                    </div>
                    <div className='input--area'> 
                        <label>CNPJ</label>
                        <input type="text" />
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
                    <div className='description--area'>
                        <textarea placeholder='Digite aqui a descrição da empresa...'></textarea>
                    </div>
                    <div className='button--area'>
                        <button onClick={() => navigate("/address-data")}>Continuar</button>
                    </div>
                </form>
            </section>
        </C.Responsible>
    )
}
