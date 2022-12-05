import { Link } from 'react-router-dom';
import * as C from './styles';

export const SignIn = () => {
    return (
        <C.SignIn>
            SignIn
            <Link to="/signup">Não possuo uma conta</Link>
        </C.SignIn>
    )
}
