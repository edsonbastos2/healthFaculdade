import logo from '../../assets/logo-moderna1.png';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './style.css';
const Header = ({hideCard}) => {

    const { cart } = useSelector( state => state.shop);

    const openDrawer = () => {
        const event = new CustomEvent('openCart');
        window.dispatchEvent(event)
    }
    return (
        <div className="col-12 header">
            <header className="py-3 text-center">
                <Link to="/">
                    <img src={logo} alt="Logo Padrão"/>
                </Link>

                {
                    !hideCard &&
                    (<button onClick={() => openDrawer()} className="btn btn-secondary cart-button">
                        <span className="mdi mdi-cart"></span> {cart.length} Ítens
                    </button>)
                }
            </header>
        </div>
    );
}

export default Header;