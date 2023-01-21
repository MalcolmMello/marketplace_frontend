import React from 'react';
import * as C from './styles';
import L from "leaflet";
import * as turf from "@turf/turf";
import { useEffect, useRef, useState } from "react";
import { useAppSelector } from '../../hooks';
import { MapContainer, TileLayer, FeatureGroup, Marker } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import { onCreated } from '../../types/DeliverySettingsResponses/onCreated';
import { Layers } from '../../types/DeliverySettingsResponses/Layers';
import { onEdited } from '../../types/DeliverySettingsResponses/onEdited';
import { onDeleted } from '../../types/DeliverySettingsResponses/onDeleted';
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";


const icon = L.icon({
    iconUrl:"https://img.icons8.com/ios-filled/38/ff175b/marker.png",
    iconSize: [38, 38]
});

export const DeliverySettings = () => {
    const { address, perfil, loading, error } = useAppSelector((state) => state.perfil); 
    const [center, setCenter] = useState({ lat: perfil.lat, lng: perfil.long });
    const [mapLayers, setMapLayers] = useState<Layers[]>([]);
    const [canDraw, setCanDraw] = useState<boolean>(false);

    const [shouldMapUpdate, setShouldMapUpdate] = useState("map");

    let companyCoordinates = [perfil.lat, perfil.long];

    useEffect(() => {
        setCenter({ lat: perfil.lat, lng: perfil.long });
    }, [perfil.lat, perfil.long]);

    useEffect(() => {
        if(mapLayers.length === 0) {
            changeCanDraw(true);
        } else if(mapLayers.length === 1) {
            changeCanDraw(false)
        }
    }, [mapLayers]);

    const markerRef = useRef<any>(null);
    const ZOOM_LEVEL = 30;
  
    const _onCreate = (e: onCreated) => {
        const { layerType, layer } = e;

        if (layerType === "polygon") {
            const { _leaflet_id } = layer;
            
            let point = turf.point(companyCoordinates);
            
            let newDeliveryArea: number[][] = [];

            let teste = layer.getLatLngs(); 
            
            teste[0].forEach(e => {
                newDeliveryArea.push([e.lat, e.lng]);
            });

            newDeliveryArea.push(newDeliveryArea[0]);
            
            let poly = turf.polygon([newDeliveryArea]);

            let isInThePolygon = turf.booleanPointInPolygon(point, poly);

            if(isInThePolygon) {
                setMapLayers((layers) => [
                    ...layers,
                    { id: _leaflet_id, latlngs: layer.getLatLngs()[0] },
                ]);
            } else {
                alert("Sua empresa precisa estar dentro da área de atuação");
                setShouldMapUpdate(`${Math.random()}`);

            }
            
            
        }
    };
    
    const changeCanDraw = (status: boolean) => {
        setCanDraw(status);
    };
  
    const _onEdited = (e: onEdited) => {
      const {
        layers: { _layers },
      } = e;
  
      Object.values(_layers).map(({ _leaflet_id, editing }) => {
        setMapLayers((layers) =>
          layers.map((l) =>
            l.id === _leaflet_id
              ? { ...l, latlngs: { ...editing.latlngs[0] } }
              : l
          )
        );
      });
    };
  
    const _onDeleted = (e: onDeleted) => {
        const {
            layers: { _layers },
        } = e;
  
        Object.values(_layers).map(({ _leaflet_id  }) => {
            setMapLayers((layers) => layers.filter((l) => l.id !== _leaflet_id));
        });
    };
  
    return (
        <C.Delivery>
            <div className='map'>
                <MapContainer center={[center.lat, center.lng]} zoom={ZOOM_LEVEL} style={{width: "100%", height: "100%"}}>
                    <FeatureGroup key={shouldMapUpdate}>
                        {canDraw &&
                            <EditControl
                                position="topright"
                                onCreated={_onCreate}
                                onEdited={_onEdited}
                                onDeleted={_onDeleted}
                                
                                draw={{
                                    rectangle: false,
                                    polyline: false,
                                    circle: false,
                                    circlemarker: false,
                                    marker: false,
                                    polygon: true,
                                }}

                            />
                        }
                        { !canDraw &&
                            <EditControl
                            position="topright"
                            onCreated={_onCreate}
                            onEdited={_onEdited}
                            onDeleted={_onDeleted}
                            onDrawStop={(e) => console.log(e)}
                            draw={{
                                rectangle: false,
                                polyline: false,
                                circle: false,
                                circlemarker: false,
                                marker: false,
                                polygon: false,
                            }}
                            edit={{edit: true}}
                        />
                        }
                        
                    </FeatureGroup>
                    <Marker 
                        ref={markerRef}         
                        position={[perfil.lat,perfil.long]} 
                        icon={icon}
                    >

                    </Marker>

                    <TileLayer 
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url={`https://{s}-tiles.locationiq.com/v3/streets/r/{z}/{x}/{y}.png?key=${process.env.REACT_APP_LOCATIONIQ_ACESS_TOKEN}`}
                    />
                
                </MapContainer>
            </div>
        </C.Delivery>
    )
}
