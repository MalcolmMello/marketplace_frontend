import * as C from './styles';
import axios from 'axios';
import { useEffect, useState } from 'react';
import useDebounce from './useDebounce'

type Address = {
    display_name: string,
    lat: string,
    lon: string
};

const delay = 500;

export const AddressData = () => {
    const [address, setAddress] = useState<Address[]>([]);
    const [autocomplete, setAutocomplete] = useState("");
    const [search, setSearch] = useState("");

    const deboucedChange = useDebounce(setSearch, delay)

    const handleChange = (e: string) => {
        deboucedChange(e);
        setAutocomplete(e);
    };

    useEffect(() => {
        handleSearch();
    }, [search])

    const handleSearch = async () => {
        const { data } = await axios.get(`https://api.locationiq.com/v1/autocomplete?key=${process.env.REACT_APP_LOCATIONIQ_ACESS_TOKEN}&q=${autocomplete}&countrycodes=br&limit=5`);
        setAddress(data);
    }

    return (
        <C.Responsible>
            <section className='container'>
                <h1>Endereço da Loja</h1>
                <div className='form'>
                    <input 
                        type="text"
                        value={autocomplete}
                        onChange={e => handleChange(e.target.value)}
                    />
                    <div className='button--area'>
                        <button>Continuar</button>
                    </div>
                </div>
            </section>
        </C.Responsible>
    )
}
