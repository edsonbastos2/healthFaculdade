import { useDispatch, useSelector } from 'react-redux';
import {setHealthMapSelected, setMapCenter} from '../../store/modules/shop/actions';
import logoPadrao from '../../assets/pharmacy.png';
import './style.css';

const Healt = ({health}) => {

    const dispatch = useDispatch();
    const { healthshopMapSelected } = useSelector( state => state.shop);
    const setSelectedHealthShop = () => {


        dispatch(setHealthMapSelected(health._id));
        dispatch(setMapCenter(health.location));
    }

    return(
        <li className={`healt d-inline-block ${healthshopMapSelected === health._id ? 'active' : ''}`}
            onClick={ () => setSelectedHealthShop()}
        >
            <div className="d-inline-block img-store">
                <img src={health.logo || logoPadrao} className="img-fluid" alt=""/> 
            </div>
            <div className="d-inline-block pl-3 align-bottom">
                <b>{health.nome}</b>
                <div className="clientes-infos">
                    <span class="mdi mdi-star"></span>
                    <text>
                        <b>2.8</b>
                    </text>
                    <span class="mdi mdi-cash-usd-outline"></span>
                    <text>$$$</text>
                    <span class="mdi mdi-crosshairs-gps"></span>
                    <text>2,9km</text>
                </div>
                <label className="badge badge-primary">Frete Grátis</label>
            </div>

        </li>
    );
}

export default Healt;