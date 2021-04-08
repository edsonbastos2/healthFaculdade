import './style.css';
import logoPadrao from '../../assets/pharmacy.png';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MarkerIcon from '../../assets/marker.png';
import MarkerSelected from '../../assets/marker1.png';

const Marker = ({healtshop}) => {

    const { healthshopMapSelected } = useSelector( state => state.shop);

    return(
        <Link to={`/healthshop/${healtshop._id}`}>
            <img src={healthshopMapSelected === healtshop._id ? MarkerSelected : MarkerIcon} alt=""/>
            <img src={healtshop.logo || logoPadrao} className="img-marker" alt=""/>
        </Link>
    )
}

export default Marker;