import * as C from './styles'
import { useAppSelector } from '../../../../hooks';


export const AddItem = () => {
    const { categories, loading } = useAppSelector((state) => state.categories);

    return (
        <C.AddItem>
            <div className='input--area'>
                <input type="text" placeholder='Nome do Produto' className='product--name'/>
            </div>
            <label htmlFor="test"> 
                <div className='img--container'>
                    Escolha uma imagem
                </div>
                <input type="file" id='test' />
            </label>
            <div className='textarea'>
                <p>Descrição (Opcional)</p>
                <textarea placeholder='Insira a uma Descrição'></textarea>
            </div>
            <div className='category--area'>
                <select name="" id="" className='category'>
                    {categories.map(item => (
                        <option value={item.id}>{item.category_name}</option>
                    ))}
                </select>
            </div>
            <div className='price--area'>
                <p>Preço</p>
                <input type="number" placeholder='R$' className='price'/>
            </div>
        </C.AddItem>
    );
}