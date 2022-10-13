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
                                <div>
                                    {item.category_name}
                                </div>
                            </C.NameCategory>
                            <C.ProductArea>
                                {item.products?.map((product) => (
                                    <div className='item'>
                                        <img src={`http://localhost:5000/media/${product.front_cover}.jpg`} alt="" />
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