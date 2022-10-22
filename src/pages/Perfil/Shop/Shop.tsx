import * as C from './styles';
import { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import logodefault from '../../../assets/camera.png'
import { editPerfil } from '../../../redux/slicePerfil';

export const Shop = () => {
    const { perfil, loading, error } = useAppSelector((state) => state.perfil);  

    const dispatch = useAppDispatch();

    const [newPerfil, setNewPerfil] = useState({ company_name: '', description: '', phone_number: '' });

    const fileFieldCover = useRef<HTMLInputElement>(null);
    const fileFieldLogo = useRef<HTMLInputElement>(null);
    
    const [logo, setLogo] = useState<File>();
    const [existLogo, setExistLogo] = useState<string | undefined>();

    const [cover, setCover] = useState<File>();
    const [existCover, setExistCover] = useState<string | undefined>();

    useEffect(() => {
        if(perfil.logo != null) {
            setExistLogo(perfil.logo)
        };
        if(perfil.cover != null) {
            setExistCover(perfil.cover)
        };
    }, [perfil.logo, perfil.cover]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
       
        const formData = new FormData()
        formData.append('new_name', newPerfil.company_name);
        formData.append('description', newPerfil.description);
        formData.append('phone_number', newPerfil.phone_number);

        const filesCover = fileFieldCover.current?.files;
        const filesLogo = fileFieldLogo.current?.files;

        if(filesCover) {
            formData.append('cover', filesCover[0]);
        };

        if(filesLogo) {
            formData.append('logo', filesLogo[0]);
        };

        try {
            const result = await dispatch(editPerfil(formData)).unwrap();
            setNewPerfil({ company_name: '', description: '', phone_number: '' });
        } catch (error) {
            alert(`${error}`);
        };
    };

    return (
        <C.ShopArea onSubmit={handleSubmit}>
            <div className='pics--area'>
                <label htmlFor="cover">
                    {cover !== undefined || existCover ? <img src={cover != undefined ? URL.createObjectURL(cover) : existCover} className="cover--img"/> : <div className='cover'></div>}
                    <input 
                        type="file"
                        id= "cover"
                        ref={fileFieldCover} 
                        onChange={e => e.target.files ? setCover(e.target.files[0]) : ''}
                    />
                </label>
                <label htmlFor="logo" className='label--logo'>
                    {logo !== undefined || existLogo ? <img src={logo != undefined ? URL.createObjectURL(logo) : existLogo} className="logo--img"/> : <div className='front'></div>}
                    <input 
                        type="file"
                        id= "logo"
                        ref={fileFieldLogo} 
                        onChange={e => e.target.files ? setLogo(e.target.files[0]) : ''}
                    />
                </label>
            </div>
            <div className='company--data'>
                <h1>{perfil.company_name}</h1>
                <div className='data--input'>
                    <p>Nome</p>
                    <input
                        type="text" 
                        placeholder={`${perfil.company_name}`} 
                        value={newPerfil.company_name}
                        onChange={e => setNewPerfil({...newPerfil, company_name: e.target.value})}
                    />
                </div>
                <div className='data--input'>
                    <p>Descrição</p>
                    <textarea 
                        value={newPerfil.description}
                        onChange={e => setNewPerfil({...newPerfil, description: e.target.value})}
                    >

                    </textarea>
                </div>
                <div className='data--input'>
                    <p>Número de Telefone</p>
                    <input
                        type="text" 
                        placeholder={`${perfil.phone_number}`}
                        value={newPerfil.phone_number}
                        onChange={e => setNewPerfil({...newPerfil, phone_number: e.target.value})}
                    />
                </div>
                <button type='submit'>Salvar</button>
            </div>
        </C.ShopArea>
    )
}
