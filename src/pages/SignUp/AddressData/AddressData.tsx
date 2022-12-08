import * as C from './styles';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import useDebounce from './useDebounce';
import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useAppDispatch } from '../../../hooks';
import { addressData } from '../../../redux/formSlice';
import { useNavigate } from 'react-router-dom';

type Address = {
    display_place?: string,
    display_name: string,
    lat: string,
    lon: string
};

type Props = {
    selectPosition: Address
}

const icon = L.icon({
    iconUrl:"https://img.icons8.com/ios-filled/38/ff175b/marker.png",
    iconSize: [38, 38]
});

const delay = 500;

export const AddressData = () => {
    const [address, setAddress] = useState<Address[]>([]);
    const [currentAddress, setCurrentAddress] = useState<Address>();
    const [autocomplete, setAutocomplete] = useState("");
    const [number, setNumber] = useState("");
    const [search, setSearch] = useState(""); 
    
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    
    const markerRef = useRef<any>(null);

    const deboucedChange = useDebounce(setSearch, delay);

    const handleChange = (e: string) => {
        deboucedChange(e);
        setAutocomplete(e);
    };

    useEffect(() => {
        handleSearch();
    }, [search]);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(getLocation);
    }, []);

    const getLocation = async (e: GeolocationPosition) => {
        const { data } = await axios.get(`https://us1.locationiq.com/v1/reverse?key=${process.env.REACT_APP_LOCATIONIQ_ACESS_TOKEN}&lat=${e.coords.latitude}&lon=${e.coords.longitude}&format=json`);
        setCurrentAddress(data);
        setAutocomplete(data.display_name);
    };

    const handleSearch = async () => {
        const { data } = await axios.get(`https://api.locationiq.com/v1/autocomplete?key=${process.env.REACT_APP_LOCATIONIQ_ACESS_TOKEN}&q=${autocomplete}&countrycodes=br&limit=5`);
        setAddress(data);
    };

    const handleChangeAddress = (e: Address) => {
        setCurrentAddress({
            display_name: e.display_name,
            display_place: e.display_place,
            lat: e.lat,
            lon: e.lon
        });
        setAutocomplete(e.display_name);
        setAddress([]);
    };

    const handleSubmitAllData = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(number == "") {
            return alert("Informe o número do endereço.")
        }
        if(currentAddress && autocomplete != '') {
            dispatch(addressData({
                display_name: currentAddress.display_name,
                latitude: currentAddress.lat,
                longitude: currentAddress.lon
            }));
            navigate("/signup/subscription-data");
        } else {
            alert("Informe o endereço da sua empresa para continuar");
        }
        
    };

    function ResetCenterView(props: Props) {
        const { selectPosition } = props;
        const map = useMap();
      
        useEffect(() => {
          if (selectPosition) {
            map.setView(
              L.latLng(Number(selectPosition.lat), Number(selectPosition.lon)),
              map.getZoom(),
              {
                animate: true
              }
            )
          }
        }, [selectPosition]);
      
        return null;
    };

    return (
        <C.Responsible>
            <section className='container'>
                <h1>Rua da Loja</h1>
                <div className='content'>
                    <div className='map'>
                            {currentAddress &&
                                <MapContainer
                                    center={[Number(currentAddress?.lat), Number(currentAddress?.lon)]}
                                    zoom={30}
                                    style={{width: "100%", height: "100%"}}
                                    
                                >
                                    <TileLayer 
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                        url={`https://{s}-tiles.locationiq.com/v3/streets/r/{z}/{x}/{y}.png?key=${process.env.REACT_APP_LOCATIONIQ_ACESS_TOKEN}`}
                                    />
                                    <Marker 
                                        ref={markerRef} 
                                        eventHandlers={{
                                            dragend: () => {
                                                const marker = markerRef.current
                                                const reverseGeocoding = async (lat: number, long: number) => {
                                                    const { data } = await axios.get(`https://us1.locationiq.com/v1/reverse?key=${process.env.REACT_APP_LOCATIONIQ_ACESS_TOKEN}&lat=${lat}&lon=${long}&format=json`);
                                                    setCurrentAddress(data);
                                                    setAutocomplete(data.display_name);
                                                }
                                                if (marker != null) {   
                                                    const { lat, lng } = marker.getLatLng();
                                                    reverseGeocoding(Number(lat), Number(lng));
                                                }
                                            }
                                        }} 
                                        draggable={true} 
                                        position={[Number(currentAddress.lat), Number(currentAddress.lon)]} 
                                        icon={icon}
                                    >

                                    </Marker>
                                    <ResetCenterView selectPosition={currentAddress} />
                                </MapContainer>
                            }
                    </div>
                    <form className='form' onSubmit={handleSubmitAllData}>
                        <div className='inputs'>
                            <div className="first">
                                <label>Endereço</label>
                                <input 
                                    type="text"
                                    value={autocomplete}
                                    onChange={e => handleChange(e.target.value)}
                                />
                            </div>
                           <div className="second">
                            <label>Número</label>
                                <input 
                                    type="text"
                                    value={number}
                                    onChange={e => setNumber(e.target.value)}
                                />  
                           </div>
                        </div>
                        {address.length > 0 &&
                            <div className='results'>
                                {
                                    address.map(item => (
                                        <div className='result' onClick={() => handleChangeAddress(item)}>
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
                        <div className='button--area'>
                            <button type='submit'>Continuar</button>
                        </div>
                    </form>
                </div>
            </section>
        </C.Responsible>
    )
}
