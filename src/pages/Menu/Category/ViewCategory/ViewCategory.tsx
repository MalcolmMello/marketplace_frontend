import * as C from './styles'
import { Link } from 'react-router-dom';
import { fetchCategories } from '../../../../redux/sliceCategories';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks';

export const ViewCategory = () => {
    const { categories, loading, error } = useAppSelector((state) => state.categories);
    
    return (
        <C.ViewCategory>
            <section className='container'>
                <div className='top--area'>
                    <h1>Categorias</h1>
                    <Link to="add">
                        <button>+ Adicionar Categoria</button>
                    </Link>
                </div>
                <div className='category--area'>
                    <div className='category--menu'>
                        <ul>
                            <li>Nome</li>
                            <li>Nº Produtos</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className='category--items'>
                { loading ? (
                    <div>carregando...</div>
                ) : (categories && categories !== null && categories.map((item) => (
                    <ul key={item.id}>
                        <li>{item.category_name}</li>
                        <li>{item.products !== null ? item.products.length : 0}</li>
                    </ul>
                )))}
            </section>
        </C.ViewCategory>
    )
};