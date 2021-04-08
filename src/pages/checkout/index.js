import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


import { setTransaction as setStoreTransaction } from '../../store/modules/shop/actions';
import Header from '../../components/header';
import Products from '../../components/products/list';
import './style.css';

const Checkout = () => {
    const dispatch = useDispatch();
    const { cart } = useSelector( state => state.shop);
    const total = cart.reduce((total, product) => {
        return total  + product.preco;
    },0)
    const [transaction, setTransaction] = useState({
        amount: 0,
        card_number: '',
        card_cvv: '',
        card_expiration: '',
        card_holder_name: '',
        card_cpf_cnpj: '',
        customer:{},
        billing:{
            name:'Health LTDA',
            address:{
                country: 'br',
                state:'ce',
                city:'Fortaleza',
                neighborhood:'Barra do ceará',
                street:'Rua Matrix',
                street_number:'9999',
                zipcode:'09714360',
            }
        },
        shipping:{
            name:"",
            address:{
                country: 'br',
                state: '',
                city: '',
                neighborhood: '',
                street: '',
                street_number:'',
                zipcode: ''
            }
        },
        items:[],
        split_rules:[]
    });

    const setShippingValue = (key, value) => {
        setTransaction({
            ...transaction,
            shipping:{
                ...transaction.shipping,
                address:{
                    ...transaction.shipping.address,
                    [key]: value,
                }
            }
        })
    }

    const makePurchase = () => {
        dispatch(setStoreTransaction(transaction))
        // setTimeout(() =>{
        //     dispatch(makePurchase())
        // },100)
    }

    useEffect(()=>{
        setTransaction({
            ...transaction,
            amount: total.toFixed(2).toString().replace('.', ''),
            items: cart.map((product) =>({
                id: product._id,
                nome: product.nome,
                unit_price: product.preco.toFixed(2).toString().replace('.', ''),
                quantity: 0,
                tangible: true,
            }))
        })
    },[total])

    return(
        <div className="h-100">
            <Header hideCard/>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-6">
                        <span className="section-title">Dados de entrega</span>
                        <div className="row mb-4">
                            <div className="col-12">
                                <input 
                                    type="text" 
                                    placeholder="CEP" 
                                    className="form-control form-control-lg"
                                    onChange={(e) => setShippingValue('zipcode', e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="row mb-4">
                            <div className="col-7">
                                <input 
                                    type="text" 
                                    placeholder="Cidade" 
                                    className="form-control form-control-lg"
                                    onChange={(e) => setShippingValue('city', e.target.value)}
                                />
                            </div>
                            <div className="col-5 pl-0">
                                <input 
                                    type="text" 
                                    placeholder="Logradouro" 
                                    className="form-control form-control-lg"
                                    onChange={(e) => setShippingValue('street', e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col-5">
                                <input 
                                    type="text" 
                                    placeholder="Numero" 
                                    className="form-control form-control-lg"
                                    onChange={(e) => setShippingValue('street_number', e.target.value)}
                                />
                            </div>
                            <div className="col-5 pl-0">
                                <input 
                                    type="text" 
                                    placeholder="Bairro" 
                                    className="form-control form-control-lg"
                                    onChange={(e) => setShippingValue('neighborhood', e.target.value)}
                                />
                            </div>
                            <div className="col-2 pl-0">
                                <input 
                                    type="text" 
                                    placeholder="UF" 
                                    className="form-control form-control-lg"
                                    onChange={(e) => setShippingValue('state', e.target.value)}
                                />
                            </div>
                        </div>
                        <span className="section-title">Dados de pagamentos</span>
                        <div className="row mb-3">
                            <div className="col-12">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="Número do Cartão"
                                    onChange={(e) => setTransaction({
                                        ...transaction,
                                        card_number: e.target.value,
                                    })}
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-9">
                                <input 
                                    type="date" 
                                    className="form-control form-control-lg" 
                                    placeholder="Validade"
                                    onChange={(e) => setTransaction({
                                        ...transaction,
                                        card_expiration: e.target.value,
                                    })}
                                />
                            </div>
                            <div className="col-3 pl-0">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="CVV"
                                    onChange={(e) => setTransaction({
                                        ...transaction,
                                        card_cvv: e.target.value,
                                    })}
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-6">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="Nome do titula"
                                    onChange={(e) => setTransaction({
                                        ...transaction,
                                        card_holder_name: e.target.value,
                                    })}
                                />
                            </div>
                            <div className="col-6 pl-0">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="CPF/CNPJ do Titular"
                                    onChange={(e) => setTransaction({
                                        ...transaction,
                                        card_cpf_cnpj: e.target.value,
                                    })}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 d-flex justify-content-between align-items-center">
                                <b>Total</b>
                                <h3>R$ {total.toFixed(2)}</h3>
                            </div>
                            <div className="col-12 mb-5">
                                <button onClick={() => makePurchase()} className="btn btn-block btn-lg btn-primary">Finalizar Compra</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="box col mb-4 box-sidbar">
                            <h5>Minha Sacola({cart.length})</h5>
                            <div className="row products">
                                {cart.map(p => <Products product={p}/>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout;