import * as C from './styles';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

export const AddCategory = () => {
    const [category, setCategory] = useState('');
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();


    };

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