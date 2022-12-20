import * as C from './styles';
import axios from 'axios';
import logo from '../../assets/logopink.svg';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z, string } from 'zod';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormActions, useAuth } from '../../contexts/AuthProvider';

const baseURL = 'http://localhost:5000';

interface IFormInputs {
    email: string,
    password: string,
};

const schema = z.object({
    email: string().email({message: "Email inválido"}),
    password: string().min(1, {message: "Senha inválida"})
});

export const SignIn = () => {
    const [authError, setAuthError] = useState(false);
    const { state, dispatch } =  useAuth();

    
    const { register, handleSubmit, formState: {errors} } = useForm<IFormInputs>({
        resolver: zodResolver(schema)
    });

    const onSubmit = async (login: IFormInputs) => {
        
        try {
            const body = {
                email: login.email,
                password: login.password
            };
            
            const { data } = await axios.post(`${baseURL}`, body);

            dispatch({
                type: FormActions.setToken,
                payload: data.token
            });

            dispatch({
                type: FormActions.setSubsStatus,
                payload: data.subscription_status
            });
        } catch (error) {
            setAuthError(true);
        }
    };

    return (
        <C.SignIn>
            <section className='left--side'>
                <div className='left--container'>
                    <div className='logo--area'>
                        <img src={logo} alt="" /> | <div>Portal do Parceiro</div>
                    </div>
                    <div>
                        <h1>A praticidade que seu Petshop precisa.</h1>
                        <p>Marketplace pet <strong>único no mercado!</strong></p>
                    </div>
                </div>
            </section>
            <section className='right--side'>
                <div className='right--container'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h3>Gerencie o seu petshop</h3>
                        <div className='form--area'>
                            <div className='input--area'>
                                <label>Email</label>
                                <input {...register("email")} placeholder="emaildoparceiro@gmail.com"/>
                                <div className='error--message'>{errors.email?.message}</div>
                            </div>
                            <div className='input--area'>
                                <label>Senha</label>
                                <input {...register("password")} placeholder="••••••••"/>
                                <div className='error--message'>{errors.password?.message}</div>
                            </div>
                            <div className='error--message'>
                                {authError && 'Email ou senha inválidos'}
                            </div>
                        </div>
                        <button>
                            Entrar
                        </button>
                        <p className='signup'>Não possui uma conta? <Link to="/signup">Registre-se agora!</Link></p>
                    </form>
                </div>
            </section>
        </C.SignIn>
    )
}
