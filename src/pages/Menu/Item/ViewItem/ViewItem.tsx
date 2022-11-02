import * as C from './styles';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../../hooks';
import { useState } from 'react';

export const ViewItem = () => {
    const { categories, loading, error } = useAppSelector((state) => state.categories);
    const [isOptionOpen, setIsOptionOpen] = useState('');

    return (
        <C.ViewItem>
            <div className='container'>
                <div className='top--area'>
                    <h1>Produtos Cadastrados</h1>
                    <Link to="add">
                        <button>+ Adicionar Produto</button>
                    </Link>
                </div>
                <div className='product--area'>
                    <div className='product--menu'>
                        <ul>
                            <li>Categoria</li>
                            <li className='name'>Nome do Produto</li>
                            <li>Estoque</li>
                            <li>Status</li>
                            <li>Preço</li>
                            <li className='options'></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='product--items'>
                {categories.map(item => item.products?.map(product => (
                    <ul>
                        <li>{item.category_name}</li>
                        <li className='name'> <img src={`http://localhost:5000/media/${product.front_cover}.jpg`} alt="" /> {product.product_name}</li>
                        <li className='lenght'>0 <br /><span>Unidades</span></li>
                        <li className='status'>Ativo</li>
                        <li>R$ {product.price?.toFixed(2).replace('.', ',')}</li>
                        <li className='options'>
                            <div onMouseLeave={() => setIsOptionOpen('')} className={`${isOptionOpen === product.id ? 'active' : 'choose-option'}`}>
                                <Link to={`add/${product.id}`}>Editar Item</Link>
                                <Link to="">Excluir Item</Link>
                            </div>
                            <div className='options--item' onClick={() => setIsOptionOpen(product.id)}>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </li>
                    </ul>
                )))}
            </div>
        </C.ViewItem>
    )
}