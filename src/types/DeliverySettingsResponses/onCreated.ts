export interface onCreated {
    layerType: string,
    layer: {
        _leaflet_id: number,
        getLatLngs(): {
            lat: number, lng: number
        }[][]
    }
}