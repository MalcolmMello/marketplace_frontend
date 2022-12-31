import * as C from './styles';
import axios from 'axios';
import useDebounce from './useDebounce';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { editAddress } from '../../../redux/slicePerfil';
import { setLogOut } from '../../../redux/responsibleSlice';


type Address = {
    display_place?: string,
    display_name: string,
    lat: string,
    lon: string
};

const delay = 500;

export const Address = () => {
    const { token, current_company_id } = useAppSelector((state) => state.responsible); 
    const { address, perfil, loading, error } = useAppSelector((state) => state.perfil);  

    const [autocomplete, setAutocomplete] = useState("");
    const [search, setSearch] = useState("");
    const [number, setNumber] = useState("");

    const [newAddress, setAddress] = useState<Address[]>([]);
    const [currentAddress, setCurrentAddress] = useState<Address>();

    const dispatch = useAppDispatch();

    useEffect(() => {
        handleSearch();
    }, [search]);

    const handleSearch = async () => {
        const { data } = await axios.get(`https://api.locationiq.com/v1/autocomplete?key=${process.env.REACT_APP_LOCATIONIQ_ACESS_TOKEN}&q=${autocomplete}&countrycodes=br&limit=5`);
        setAddress(data);
    };

    const deboucedChange = useDebounce(setSearch, delay);

    const handleChange = (e: string) => {
        deboucedChange(e);
        setAutocomplete(e);
    };

    const handleChangeAddress = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            if(token && current_company_id && currentAddress && number.length > 0) {
                const result = await dispatch(editAddress({display_name: currentAddress?.display_name, lat: currentAddress.lat, long: currentAddress.lon, number, token, companyId: current_company_id})).unwrap();
                setAutocomplete("");
                setNumber("");
            } else if(!token && !current_company_id) {
                setLogOut();
            }
        } catch (error) {
            alert(`${error}`);
        };
    };

    const handleChangeAutocomplete = (e: Address) => {
        setCurrentAddress({
            display_name: e.display_name,
            display_place: e.display_place,
            lat: e.lat,
            lon: e.lon
        });
        setAutocomplete(e.display_name);
        setAddress([]);
    };

    return (
        <C.Address>
            <form onSubmit={handleChangeAddress}>
                <div className='input--area'>
                    <div className='street--area'>
                        <label>Rua</label>
                        <input 
                            type="text" 
                            value={autocomplete}
                            onChange={e => handleChange(e.target.value)}
                        />
                    </div>
                    <div className='number--area'>
                        <label>Número</label>
                        <input 
                            type="text" 
                            value={number}
                            onChange={e => setNumber(e.target.value)}
                        />
                    </div>
                </div>
                {newAddress.length > 0 &&
                            <div className='results'>
                                {
                                    newAddress.map(item => (
                                        <div className='result' onClick={() => handleChangeAutocomplete(item)}>
                                            <div className='place'>
                                                {item.display_place}
                                            </div>
                                            <div className='name'>
                                                {item.display_name}
                                            </div>
                                            
                                        </div>
                                    ))
                                }
                            </div>
                        }
                <button type='submit'>Enviar</button>
            </form>
            <section className='address--area'>
                <img src="https://img.icons8.com/ios-filled/50/FA5252/marker.png"/>
                <div className='text'>
                    <h3>{perfil.company_name}</h3>
                    <div>{address.display_name}, {address.number}</div>
                </div>
            </section>
        </C.Address>
    )
}
