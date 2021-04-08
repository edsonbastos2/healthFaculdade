import GoogleMapReact from 'google-map-react';
import { useSelector } from 'react-redux';
import Marker from '../marker';
import './style.css';

const Map = ( {healthshops}) => {

    const {mapCenter} = useSelector( state => state.shop)
    return(
        <div className="container-map">
            <GoogleMapReact
                bootstrapURLKeys = {{ key: 'AIzaSyCWBxlNpEtAk1yi9lgZ5WeW89b5pdva0Ek'}}
                center={mapCenter}
                defaultZoom={15}
            >
                {healthshops.map( h => <Marker healtshop={h} lat={h.location.lat} lng={h.location.lng}/>)}
            </GoogleMapReact>
        </div>
    )
}

export default Map;