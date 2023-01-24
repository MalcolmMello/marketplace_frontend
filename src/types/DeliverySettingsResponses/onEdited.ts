export interface onEdited {
    layers: {
        _layers: {
            _leaflet_id: number,
            editing: {
                latlngs: {
                    lat: number,
                    lng: number
                }[][][]
            }
        }[]
    }
}