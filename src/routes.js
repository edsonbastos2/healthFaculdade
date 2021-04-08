import { BrowserRouter as Router, Route} from 'react-router-dom';
import Cadastro from './pages/cadastro';
import CadHealthShop from './pages/cadHealthShop';
import Checkout from './pages/checkout';
import HealthShop from './pages/healthShop';
import Sidebar from './components/sidebar';
import Home from './pages/home';
import './style/global.css';

const Routes = () => {
    return(
        <>
        <Router>
            <Route path="/" exact component={Home}/>
            <Route path="/healthshop/:id" exact component={HealthShop}/>
            <Route path="/checkout" exact component={Checkout}/>
            <Route path="/cadastro" exact component={Cadastro}/>
            <Route path="/cadhealthshop" exact component={CadHealthShop}/>
            <Sidebar/>
        </Router>
        </>
    )
}

export default Routes;