import { Link } from 'react-router-dom';
import * as C from './styles'

export const ViewCategory = () => {
    return (
        <C.ViewCategory>
            <section className='top--area'>
                <h1>Categorias</h1>
                <Link to="add">
                    <button>+ Adicionar Categoria</button>
                </Link>
            </section>
            <section className='category--area'>
                <div className='category--menu'>
                    <ul>
                        <li>Nome</li>
                        <li>Nº Produtos</li>
                    </ul>
                </div>
                <div className='category--items'>
                    <ul>
                        <li>Ração</li>
                        <li>0</li>
                    </ul>
                </div>
            </section>
        </C.ViewCategory>
    )
};