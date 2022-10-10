import * as C from './styles';
import React, { useState } from 'react';
import { cleanError, postCategory } from '../../../../redux/sliceCategories';
import { useAppDispatch, useAppSelector } from '../../../../hooks';

export const AddCategory = () => {
    const dispatch = useAppDispatch();
    const [category, setCategory] = useState('');
    const { categories, loading } = useAppSelector((state) => state.categories);
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const result = await dispatch(postCategory(category)).unwrap();
        } catch (error) {
            alert(`${error}`)
            cleanForm();
        };
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

