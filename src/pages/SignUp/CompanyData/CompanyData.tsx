import * as C from './styles';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z, string } from 'zod';
import { cnpj } from 'cpf-cnpj-validator';
import { useAppDispatch } from '../../../hooks';
import { companyData } from '../../../redux/formSlice';

/* company_name, company_email, company_phone_number, description, cnpj  */
interface IFormInputs {
    company_name: string,
    company_email: string,
    company_phone_number: string,
    description: string,
    cnpj: string,
};

const schema = z.object({
    company_name: string({ required_error: "O nome da empresa é obrigatório" }).min(3, { message: "O nome da empresa deve ter no mínimo 3 caracteres" }),
    description: string().max(255, { message: "Máximo de 255 caracteres" }),
    cnpj: string().refine((e) => cnpj.isValid(e), {message: "Digite um cnpj válido"}),
    company_email: string().email({message: "Email inválido"}),
    company_phone_number: string().min(11, { message: "Digite um número válido" }).max(15, { message: "Número deve conter no máximos 15 caracteres" })
});

export const CompanyData = () => {
    const dispatch = useAppDispatch();
    
    const { register, handleSubmit, formState: {errors} } = useForm<IFormInputs>({
        resolver: zodResolver(schema)
    });

    const onSubmit = (data: IFormInputs) => handleNextStep(data);

    const handleNextStep = (data: IFormInputs) => {
        dispatch(companyData(data));
        navigate('/signup/address-data');
    };
    
    const navigate = useNavigate();
    return (
        <C.Responsible>
            <section className='container'>
                <h1>Dados da Loja</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='input--area'>
                        <label>Nome da Empresa (Razão social)</label>
                        <input {...register("company_name")} />
                        <div className='error--message'>{errors.company_name?.message}</div>
                    </div>
                    <div className='input--area'> 
                        <label>CNPJ</label>
                        <input {...register("cnpj")} />
                        <div className='error--message'>{errors.cnpj?.message}</div>
                    </div>
                    <div className='two--inputs'>
                        <div className='input--area'>
                            <label>Email</label>
                            <input {...register("company_email")} />
                            <div className='error--message'>{errors.company_email?.message}</div>
                        </div>
                        <div className='input--area'>
                            <label>Número de Telefone</label>
                            <input {...register("company_phone_number")} />
                            <div className='error--message'>{errors.company_phone_number?.message}</div>
                        </div>
                    </div>
                    <div className='description--area'>
                        <textarea {...register("description")} placeholder='Digite aqui a descrição da empresa...'></textarea>
                        <div className='error--message'>{errors.description?.message}</div>
                    </div>
                    <div className='button--area'>
                        <button type='submit'>Continuar</button>
                    </div>
                </form>
            </section>
        </C.Responsible>
    )
}
