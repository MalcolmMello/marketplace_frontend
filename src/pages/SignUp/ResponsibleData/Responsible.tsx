import * as C from './styles'
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z, string } from 'zod';
import { cpf } from 'cpf-cnpj-validator';
import { useAppDispatch } from '../../../hooks';
import { responsibleData } from '../../../redux/formSlice';

interface IFormInputs {
    responsible_name: string,
    rg: string,
    cpf: string,
    email: string,
    phone_number: string,
    password: string,
    repeat_password: string
};

const schema = z.object({
    responsible_name: string({ required_error: "O nome é obrigatório" }).min(3, { message: "O nome deve ter no mínimo 3 caracteres" }),
    rg: string().min(8, { message: "Digite um rg válido" }),
    cpf: string().refine((e) => cpf.isValid(e), {message: "Digite um cpf válido"}),
    email: string().email({message: "Email inválido"}),
    phone_number: string().min(11, { message: "Digite um número válido" }).max(15, { message: "Número deve conter no máximos 15 caracteres" }),
    password: string().regex(new RegExp('^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8}$'), { message: "Senha deve conter no 1 letra maiúsula, 1 letra minúscula, 1 caracter especial e 1 número" }),
    repeat_password: string(),
}).refine((data) => data.password == data.repeat_password, {
    message: "Senha e senha de confirmação devem ser iguais",
    path: ["repeat_password"],
  });

export const Responsible = () => {
    const dispatch = useAppDispatch();
    
    const { register, handleSubmit, formState: {errors} } = useForm<IFormInputs>({
        resolver: zodResolver(schema)
    });

    const onSubmit = (data: IFormInputs) => handleNextStep(data);

    const handleNextStep = (data: IFormInputs) => {
        dispatch(responsibleData(data));
        navigate('/signup/company-data');
    }
    
    const navigate = useNavigate();
    return (
        <C.Responsible>
            <section className='container'>
                <h1>Dados do Responsável pela Loja</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='input--area'>
                        <label>Nome Completo</label>
                        <input {...register("responsible_name")} />
                        <div className='error--message'>{errors.responsible_name?.message}</div>
                    </div>
                    <div className='two--inputs'>
                        <div className='input--area'>
                            <label>RG</label>
                            <input {...register("rg")} />
                            <div className='error--message'>{errors.rg?.message}</div>
                        </div>
                        <div className='input--area'> 
                            <label>CPF</label>
                            <input {...register("cpf")} />
                            <div className='error--message'>{errors.cpf?.message}</div>
                        </div>
                    </div>
                    <div className='two--inputs'>
                        <div className='input--area'>
                            <label>Email</label>
                            <input {...register("email")} />
                            <div className='error--message'>{errors.email?.message}</div>
                        </div>
                        <div className='input--area'>
                            <label>Número de Telefone</label>
                            <input {...register("phone_number")} />
                            <div className='error--message'>{errors.phone_number?.message}</div>
                        </div>
                    </div>
                    <div className='password--area'>
                        <div className='input--area'>
                            <label>Senha</label>
                            <input {...register("password")} />
                            <div className='error--message'>{errors.password?.message}</div>
                        </div>
                        <div className='input--area repeat'>
                            <label>Repita a senha</label>
                            <input {...register("repeat_password")} />
                            <div className='error--message '>{errors.repeat_password?.message}</div>
                        </div>
                    </div>
                    <div className='button--area'>
                        <button type='submit'>Continuar</button>
                    </div>
                </form>
            </section>
        </C.Responsible>
    )
}
