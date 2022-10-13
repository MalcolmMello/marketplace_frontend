import * as C from './styles'
import { useAppSelector, useAppDispatch } from '../../../../hooks';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postProduct } from '../../../../redux/sliceCategories';

export const AddItem = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { categories, loading } = useAppSelector((state) => state.categories);
    
    const fileField = useRef<HTMLInputElement>(null);
    
    const [postData, setPostData] = useState({ product_name: '', description: '', categoryProductId: '', price: '' });
    const [img, setImg] = useState<File>();
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
       
        const formData = new FormData()
        formData.append('product_name', postData.product_name);
        formData.append('description', postData.description);
        formData.append('categoryProductId', postData.categoryProductId);
        formData.append('price', postData.price);

        console.log(postData.categoryProductId)
        const files = fileField.current?.files;

        if(files) {
            formData.append('front_cover', files[0]);
        };

        const result = await dispatch(postProduct(formData)).unwrap();
        
        if(result instanceof Error) {
            alert(`${result.message}`); 
        };

        navigate('/produtos');
        setPostData({ product_name: '', description: '', categoryProductId: '', price: '' });
    };

    return (
        <C.AddItem onSubmit={handleSubmit}>
            <div className='input--area'>
                <input 
                    type="text"
                    placeholder='Nome do Produto'
                    className='product--name'
                    value={postData.product_name}
                    onChange={e => setPostData({...postData, product_name: e.target.value })}
                />
                <button type='submit'>Adicionar Produto</button>
            </div>
            <label htmlFor="test"> 
                {img !== undefined ? <img src={URL.createObjectURL(img)} className="preview--img"/> : (
                    <div className='img--container'>
                        Escolha uma imagem
                    </div>
                )}
                <input 
                    type="file" 
                    id= "test"
                    ref={fileField} 
                    onChange={e => e.target.files ? setImg(e.target.files[0]) : ''}
                />
            </label>
            <div className='textarea'>
                <p>Descrição (Opcional)</p>
                <textarea onChange={e => setPostData({...postData, description: e.target.value })} placeholder='Insira a uma Descrição'></textarea>
            </div>
            <div className='category--area'>
                <select name="" id="" className='category' value={postData.categoryProductId} onChange={e => setPostData({...postData, categoryProductId: e.target.value })}>
                    <option value=""></option>
                    {categories.map(item => (
                        <option value={item.id}>{item.category_name}</option>
                    ))}
                </select>
            </div>
            <div className='price--area'>
                <p>Preço</p>
                <input type="number" step="any" placeholder='R$' className='price' onChange={e => setPostData({...postData, price: e.target.value })}/>
            </div>
        </C.AddItem>
    );
}