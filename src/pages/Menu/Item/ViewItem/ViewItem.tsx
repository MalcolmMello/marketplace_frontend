import * as C from './styles';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../../hooks';

export const ViewItem = () => {
    const { categories, loading, error } = useAppSelector((state) => state.categories);
    
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
                        </ul>
                    </div>
                </div>
            </div>
            <div className='product--items'>
                {categories.map(item => item.products?.map(product => (
                    <ul>
                        <li>{item.category_name}</li>
                        <li className='name'> <img src={product.front_cover} alt="" /> {product.product_name}</li>
                        <li className='lenght'>0 <br /><span>Unidades</span></li>
                        <li>Ativo</li>
                        <li>R$ {product.price}</li>
                    </ul>
                )))}
            </div>
        </C.ViewItem>
    )
}