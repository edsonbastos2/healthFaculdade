import { takeLatest, all, call, put, select} from 'redux-saga/effects';
import types from './types';
import api from '../../../services/api';
import {setHealthShop, setHealthStore} from './actions';
import Swal from 'sweetalert2';


export function* requestHealthStore(){

    const response = yield call(api.get, '/healthShop');
    const res = response.data;
    yield put(setHealthShop(res.healthShop));
}
export function* requestHealthShop(payload){

    const response = yield call(api.get, `/healthShop/${payload.id}`);
    const res = response.data;
    yield put(setHealthStore(res.healthShop));
}

export function* makePurchase(){
    const { transaction } = yield select(state => state.shop);
    const response = yield call(api.post, '/', transaction);
    const res = response.data;

    // if(res.error){
    //     Swal.fire({
    //         icon:'error',
    //         title:'Oooopsss....',
    //         text: res.message
    //     })

    //     return false;
    // }

    // Swal.fire({
    //     icon:'success',
    //     title:'Tudo certo',
    //     text: 'Sua compra foi aprovada com sucesso'
    // });
}

export default all([
    takeLatest(types.REQUEST_HEALTH_SHOPS, requestHealthStore),
    takeLatest(types.RESQUEST_HEALTH_SHOP, requestHealthShop),
    // takeLatest(types.MAKE_PURCHASE, makePurchase),
])

