import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { requestHealthShop } from '../../store/modules/shop/actions';
import logoPadrao from '../../../src/assets/health-insurance.png';

import Header from '../../components/header';
import Product from '../../components/products/card';
import './style.css';

const HealthShop = ({match}) => {

    const dispatch = useDispatch();

    const { healthshop } = useSelector((state) => state.shop)

    useEffect(() => {
        dispatch(requestHealthShop(match.params.id))
    }, [])
    return(
        <div className="h-100">
            <Header/>
            <div className="container">
                <div className="row">
                    <div className="col-2 card-all">
                        <img src={healthshop.logo || logoPadrao} className="img-fluid" alt=""/>
                        <b>{healthshop.nome}</b>
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
                    <div className="col-10">
                        <h5 className="mb-4">Produtos</h5>
                        <div className="row">
                            {healthshop.produtos?.map((p)=> (
                                <Product product={p}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HealthShop;