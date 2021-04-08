import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCustomer as setStoreCustomer} from '../../store/modules/shop/actions';
import { Link } from 'react-router-dom';

import Header from '../../components/header';
import illustration from '../../assets/image-medical.svg';

const Cadastro = () => {
    const dispatch = useDispatch();
    const [customer, setCustomer] = useState({
        nome: '',
        email: '',
        telefone: '',
        cpf:'',
        data: ''
    });

    const goToCheckout = () => {
        dispatch(setStoreCustomer(customer))
        // console.log(customer)
    }
    return (
        <div className="container-fluid bg">
            <Header hideCard/>
            <div className="row container-cadastro">
                <div className="col-6 my-auto banner-left">
                    <img src={illustration} className="img-fluid" alt=""/>
                </div>
                <div className="col-6 container-right">
                    <div className="box col-12">
                        <h2 className="text-center mb-3">Falta pouco pra fazer o seu pedido.</h2>
                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg mb-3" 
                                placeholder="Nome completo" onChange={(e) => {setCustomer({...customer, nome: e.target.value})}}/>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control form-control-lg mb-3" 
                                placeholder="E-mail" onChange={(e) => {setCustomer({...customer, email: e.target.value})}}/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg mb-3" 
                                placeholder="Telefone" onChange={(e) => {setCustomer({...customer, telefone: [e.target.value]})}}/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg mb-3" 
                                placeholder="CPF" onChange={(e) => {setCustomer({...customer, cpf: e.target.value})}}/>
                            </div>
                            <div className="form-group">
                                <input type="date" className="form-control form-control-lg mb-3" 
                                placeholder="Data de Nascimento" onChange={(e) => {setCustomer({...customer, data: e.target.value})}}/>
                            </div>
                            <Link to="/checkout" onClick={ () => goToCheckout()} className="btn btn-lg btn-block btn-secondary">Finalizar Pedido</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cadastro;