import * as C from './styles';
import React, { useEffect, useState } from 'react';
import { cleanError, editCategory, postCategory } from '../../../../redux/sliceCategories';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { useParams } from 'react-router-dom';

export const AddCategory = () => {
    const { token, current_company_id } = useAppSelector((state) => state.responsible);  
    const { categories, loading, error } = useAppSelector((state) => state.categories);
    const dispatch = useAppDispatch();
    const { id } = useParams();
    const [category, setCategory] = useState('');
    
    
    useEffect(() => {
        if(id) {
            categories.forEach(item => {
                if(item.id === id) { setCategory(item.category_name) };
            });
        }
    }, [id]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(id) {
            try {
                if(token && current_company_id) {
                    const result = await dispatch(editCategory({ id, new_category_name: category, token, companyId: current_company_id })).unwrap();
                    cleanForm();
                }
                
            } catch (error) {
                console.log(error)
                alert(`${error}`)
                cleanForm();
            };            
        } else {
            try {
                if(token && current_company_id) {
                    const result = await dispatch(postCategory({category, token, companyId: current_company_id})).unwrap();
                    cleanForm();
                }
                
            } catch (error) {
                alert(`${error}`)
                cleanForm();
            };
        }
    };

    const cleanForm = () => {
        setCategory('');
        dispatch(cleanError(null));
    }

    return (
        <C.AddCategory onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder='Nome da Categoria' 
                    maxLength={30} 
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />
                <button type='submit'>
                    Salvar
                </button>
        </C.AddCategory>
    )
};

