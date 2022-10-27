import * as C from './styles'
import { useEffect, useState } from 'react';
import { apiAddress } from './FindAddress';
import { useAppSelector } from '../../../hooks';

type Address = {
    cep: string,
    logradouro: string,
    complemento: string,
    bairro: string,
    localidade: string,
    uf: string,
    erro?: string
};

export const Address = () => {
    const { address, perfil, loading, error } = useAppSelector((state) => state.perfil);  
    
    const [data, setData] = useState({ zip_code: '', street: '', district: '', city: '', state: '', address_number: '' });
    const [disableCep, setDisableCep] = useState(false);

    useEffect(() => {
        if(data.zip_code.length == 8) {
            setDisableCep(true);
            findAddress(data.zip_code);
        }
    }, [data.zip_code]);

    const findAddress = async (cep: string) => {
        let address: Address = await apiAddress.foundAddressByZipCode(cep);

        if(address.erro) {
            alert("Address doesn't exist");
            setData({...data, zip_code: ''});
            setDisableCep(false);
        };

        setData({
            ...data,
            street: address.logradouro,
            state: address.uf,
            city: address.localidade,
            district: address.bairro
        })
    };

    return (
        <C.Address>
            <form action="">
                <div className='input--area'>
                    <label>CEP</label>
                    <input
                        type="text"
                        className='short--input'
                        value={data.zip_code}
                        onChange={e => setData({...data, zip_code: e.target.value})}
                        disabled={disableCep}
                    />
                </div>
                <div className='input--area'>
                    <label>Logradouro</label>
                    <input  
                        type="text"
                        value={data.street}
                        onChange={e => setData({...data, street: e.target.value})}
                        disabled={disableCep}
                    />
                </div>
                <div className='input--area--doble'>
                    <div className='input--container'>
                        <label>Estado</label>
                        <input
                            type="text" 
                            value={data.state}
                            onChange={e => setData({...data, state: e.target.value})}   
                            disabled={disableCep} 
                        />
                    </div>
                    <div className='input--container'>
                        <label>Cidade</label>
                        <input
                            type="text"
                            value={data.city}
                            onChange={e => setData({...data, city: e.target.value})}
                            disabled={disableCep}
                        />
                    </div>
                </div>
                <div className='input--area--doble'>
                    <div className='input--container'>
                        <label>Bairro</label>
                        <input 
                            type="text"
                            value={data.district}
                            onChange={e => setData({...data, district: e.target.value})}
                            disabled={disableCep}
                        />
                    </div>
                </div>
                <div className='input--area'>
                    <label>Número</label>
                    <input
                        type="text" 
                        className='short--input' 
                        value={data.address_number}
                        onChange={e => setData({...data, address_number: e.target.value})}
                    />
                </div>
            </form>
            <section className='address--area'>
                <img src="https://img.icons8.com/ios-filled/50/FA5252/marker.png"/>
                <div>
                    <h3>{perfil.company_name}</h3>
                    <div>{address.street}, {address.number}</div>
                    <div>{address.district}, {address.city}, {address.state}, {address.zip_code}</div>
                </div>
            </section>
        </C.Address>
    )
}
