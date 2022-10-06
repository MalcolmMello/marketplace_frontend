import { Link } from 'react-router-dom';
import * as C from './styles'

export const AddCategory = () => {
    return (
        <C.AddCategory>
            <input type="text" maxLength={30} />
            <button>Salvar</button>
        </C.AddCategory>
    )
};