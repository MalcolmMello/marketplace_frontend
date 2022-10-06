import * as C from './styles'
import { Link } from 'react-router-dom'


export const ViewItem = () => {
    return (
        <C.ViewItem>
            <section className='top--area'>
                <h1>Produtos</h1>
                <Link to="add">
                    <button>+ Adicionar Produto</button>
                </Link>
            </section>
            <section className='product--area'>
                <div className='product--menu'>
                    <ul>
                        <li>Foto</li>
                        <li>Nome</li>
                        <li>Preço</li>
                        <li>Categoria</li>
                    </ul>
                </div>
                <div className='product--items'>
                    <ul>
                        
                    </ul>
                </div>
            </section>
        </C.ViewItem>
    )
}