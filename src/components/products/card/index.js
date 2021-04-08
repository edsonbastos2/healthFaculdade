import { useDispatch, useSelector} from 'react-redux';
// import logoPadrao from '../../assets/pharmacy.png';
import { toggleCardProduct } from '../../../store/modules/shop/actions';
import './style.css';

const Product = ({product}) => {

    const dispatch = useDispatch();
    const { cart } = useSelector( (state) => state.shop);
    const added = cart.findIndex( (p) => p._id === product._id) !== -1;
    return(
        <div className="product col-3">
            <img src={product.capa} className="img-fluid align-center" alt=""/>
            <h4>
                <label className="badge badge-primary">R$ {product.preco.toFixed(2)}</label>
            </h4>
            <small>
                <b>{product.nome}</b>
            </small>

            <button onClick={ () => dispatch(toggleCardProduct(product))} className={`btn btn-${added ? 'danger': 'primary'} rounded-circle`}>{added ? '-': '+'}</button>
        </div>
    );
}

export default Product;