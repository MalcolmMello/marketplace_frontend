import * as C from './styles'
import { useAppSelector, useAppDispatch } from '../../../../hooks';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { editProduct, postProduct } from '../../../../redux/sliceCategories';
import { useParams } from 'react-router-dom';

export const AddItem = () => {
    const { token, current_company_id } = useAppSelector((state) => state.responsible); 
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const { categories, loading } = useAppSelector((state) => state.categories);
    
    const fileField = useRef<HTMLInputElement>(null);
    
    const [postData, setPostData] = useState({ product_name: '', description: '', categoryProductId: '', price: '' });
    const [img, setImg] = useState<File>();

    const [existImg, setExistImg] = useState<string | undefined>(undefined);

    useEffect(() => {
        if(id) {
            categories.forEach(item => item.products.forEach(product => {
                if(product.id === id) {
                    if(product.front_cover) {
                        setExistImg(`http://localhost:5000/media/${product.front_cover}.jpg`);
                    }
                    if(product.description && product.categoryProductId && product.price) {
                        setPostData({ product_name: product.product_name, description: product.description, categoryProductId: product.categoryProductId, price: String(product.price) })
                    } else {
                        setPostData({...postData, product_name: product.product_name});
                    }
                    
                }
            }));
        }
    }, [id]);
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
       
        const formData = new FormData()
        formData.append('product_name', postData.product_name);
        formData.append('description', postData.description);
        formData.append('categoryProductId', postData.categoryProductId);
        formData.append('price', postData.price);

        const files = fileField.current?.files;

        if(files) {
            formData.append('front_cover', files[0]);
        };

        if(id) {
            try {
                if(token && current_company_id) {
                    const result = await dispatch(editProduct({ formData, id, token, companyId: current_company_id })).unwrap();
                    navigate('/produtos');
                    setPostData({ product_name: '', description: '', categoryProductId: '', price: '' });
                }
            } catch (error) {
                alert(`${error}`);
            }
        } else {
            try {
                if(token && current_company_id) {
                    const result = await dispatch(postProduct({formData, token, companyId: current_company_id})).unwrap();
                    navigate('/produtos');
                    setPostData({ product_name: '', description: '', categoryProductId: '', price: '' });
                }
            } catch (error) {
                alert(`${error}`);
            }
        }   
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
                {img !== undefined || existImg ? <img src={img != undefined ? URL.createObjectURL(img) : existImg} className="preview--img"/> : (
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
                <textarea value={postData.description} onChange={e => setPostData({...postData, description: e.target.value })} placeholder='Insira a uma Descrição'></textarea>
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
                <input type="number" step="any" placeholder='R$' className='price' value={postData.price} onChange={e => setPostData({...postData, price: e.target.value })}/>
            </div>
        </C.AddItem>
    );
}