import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestHealthStore } from '../../store/modules/shop/actions';


import Header from '../../components/header';
import Healt from '../../components/healt';
import Map from '../../components/map';
import './style.css';

const Home = () => {

    const dispatch = useDispatch()
    const {healthshops} = useSelector( (state) => state.shop)

    useEffect( () =>{
        dispatch(requestHealthStore())
    }, [])
    return(
        <div className="h-100">
            <Header/>
            <div className="container-fluid health-list-container">
                <div className="col-12 px-4 text-center">
                    <h5>Mais próximos de você (5)</h5>
                </div>
                <ul className="col-12 healt-list">
                    {healthshops.map((h) => (
                    <Healt health={h}/>
                    ))}
                </ul>
            </div>
            <Map healthshops={healthshops}/>
        </div>
    )
}

export default Home;