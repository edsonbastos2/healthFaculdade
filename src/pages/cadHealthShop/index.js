import { useState } from 'react';
import Header from '../../components/header';
import illustration from '../../assets/undraw_Building_re_xfcm.svg';

const CardHealthShop = () =>{

    const [nome, setNome] = useState('')
    const [logo, setLogo] = useState('')
    const [categoria, setCategoria] = useState('')
    const [lat, setLat] = useState('')
    const [lng, setLng] = useState('')

    function registrationHandle(e){
        e.preventDefault()
        console.log(nome,logo,categoria,lat,lng)
    }
   
    return(
        <div className="container-fluid bg">
            <Header/>
            <div className="row container-cadastro mt-5">
                <div className="col-6 my-auto banner-left">
                        <img src={illustration} className="img-fluid" alt=""/>
                </div>
                
                <div className="col-6 container-right">
                    <div className="box col-12">
                        <form>
                            <div className="form-group">
                                <input type="text" 
                                    className="form-control form-control-lg mb-3" 
                                    placeholder="Nome da loja" required value={nome} onChange={e => setNome(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <input type="text" 
                                    className="form-control form-control-lg mb-3" 
                                    placeholder="Logo url" required name="logo" value={logo} onChange={e=>setLogo(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <input type="text" 
                                    className="form-control form-control-lg mb-3" 
                                    placeholder="Categoria" required name="categoria" value={categoria} 
                                    onChange={e=>setCategoria(e.target.value)}/>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <div className="form-group">
                                        <input type="number" 
                                            className="form-control form-control-lg mb-3" 
                                            placeholder="Lat" required name="lat" value={lat} onChange={e=>setLat(e.target.value)}/>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                            <input type="number" 
                                                className="form-control form-control-lg mb-3" 
                                                placeholder="Lng" required name="lng" value={lng} onChange={e=>setLng(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <button onClick={registrationHandle} className="btn btn-primary">Cadastrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardHealthShop;