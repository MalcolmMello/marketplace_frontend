import { useAppSelector } from '../../../hooks';
import * as C from './styles';

export const ViewMenu = () => {
    const { categories, loading } = useAppSelector((state) => state.categories);
    return (
            <C.CategoryArea>
                {loading ? (
                    <div>Carregando...</div>
                ) : (categories.map((item) => (
                        <>
                            <C.NameCategory>
                                {item.category_name}
                            </C.NameCategory>
                            <C.ProductArea>
                                {item.products?.map((product) => (
                                    <div className='item'>
                                        <img src={product.front_cover} alt="" />
                                        <div className='info'>
                                            <h4>{product.product_name}</h4>
                                            <small>{product.description}</small>
                                        </div>
                                        <div className='price'>
                                            R$ {product.price}
                                        </div>
                                    </div>
                                ))}
                            </C.ProductArea>
                            
                        </>
                    )))}
            </C.CategoryArea>
        );
};