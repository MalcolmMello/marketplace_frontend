import * as C from './styles';
import L from "leaflet";
import { useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from '../../hooks';
import { MapContainer, TileLayer, Marker, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import { editOperatingRadius } from '../../redux/slicePerfil';


const icon = L.icon({
    iconUrl:"https://img.icons8.com/ios-filled/38/ff175b/marker.png",
    iconSize: [38, 38]
});

export const DeliverySettings = () => {
    const { token, current_company_id } = useAppSelector((state) => state.responsible); 
    const { address, perfil, loading, error } = useAppSelector((state) => state.perfil);
    
    const metersToKilometers = perfil.operatingRadius;

    const dispatch = useAppDispatch();

    const [center, setCenter] = useState({ lat: perfil.lat, lng: perfil.long });
    const [input, setInput] = useState(`${metersToKilometers ?? 0}`);

    const markerRef = useRef<any>(null);
    const ZOOM_LEVEL = 30;

    const handleSetArea = async () => {
        if(input.trim() === "" || Number(input) > 10 || Number(input) <= 0) {
            alert("Digite um raio válido entre 0 e 10km.");
            setInput("");

            return;
        } 

        try {
            if(token && current_company_id) {
                await dispatch(editOperatingRadius({ token, companyId: current_company_id, radius: Number(input) })).unwrap();
                setInput("");
            }
        } catch (error) {
            alert(`Ops, não foi possível alterar a área de entrega${error}`);
        }

        setInput("");
    } 


    return (
        <C.Delivery>
            <div className='map'>
                <div className='modal'>
                    <h3>Raio de Atuação (KM)</h3>
                    <div>
                        <span>Máximo de 10km</span>
                        <input 
                            type="number" 
                            value={input}
                            onChange={e => setInput(e.target.value)} 
                            max={10}                   
                        />
                    </div>
                    <button onClick={handleSetArea}>
                        Definir área
                    </button>
                </div>
                <MapContainer center={[center.lat, center.lng]} zoom={ZOOM_LEVEL} style={{width: "100%", height: "100%"}}>
                    
                    <Marker 
                        ref={markerRef}         
                        position={[perfil.lat,perfil.long]} 
                        icon={icon}
                    >

                    </Marker>

                    <Circle center={[perfil.lat, perfil.long]} radius={perfil.operatingRadius ? perfil.operatingRadius * 1000 : 0} />

                    <TileLayer 
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url={`https://{s}-tiles.locationiq.com/v3/streets/r/{z}/{x}/{y}.png?key=${process.env.REACT_APP_LOCATIONIQ_ACESS_TOKEN}`}
                    />
                
                </MapContainer>
            </div>
        </C.Delivery>
    )
}
