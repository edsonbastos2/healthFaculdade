import types from './types';

export function setCustomer(customer){
    return {type: types.SET_CUSTOMER, customer}
}
export function requestHealthStore(){
    return {type: types.REQUEST_HEALTH_SHOPS}
}
export function setHealthShop(healthshops){
    return {type: types.SET_HEALTSHOP, healthshops}
}

export function setHealthMapSelected(healthshop){
    return { type: types.SET_HEALTH_MAP_SELECTED, healthshop}
}
export function setMapCenter(location){
    return { type: types.SET_MAP_CENTER, location}
}

export function requestHealthShop(id){
    return { type: types.RESQUEST_HEALTH_SHOP, id}
}

export function setHealthStore(healthshop){
    return { type: types.SET_HEALTHSTORE, healthshop}
}

export function toggleCardProduct(product){
    return {type: types.TOGGLE_CART_PRODUCT, product}
}

export function setTransaction(transaction){
    return {type: types.SET_TRANSACTION, transaction}
}

// export function makePurchase(){
//     return {type: types.MAKE_PURCHASE}
// }