import produce from  'immer';
import types from '../shop/types';

const INITIAL_STATE = {
    healthshops: [],
    healthshop:{},
    healthshopMapSelected: null,
    mapCenter:{
        lat: -3.7055694,
        lng: -38.5902534,
    },
    cart: [],
    transaction:{
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
        shipping:{},
        items:[],
        split_rules:[]
    }
}

function shop(state = INITIAL_STATE, action){
    switch(action.type){
        case types.SET_CUSTOMER:{
            return produce(state, (draft) => {
                draft.transaction.customer = action.customer;
            })
        }

        case types.SET_HEALTSHOP:{
            return produce(state, (draft) => {
                draft.healthshops = action.healthshops;
            })
        }

        case types.SET_HEALTH_MAP_SELECTED:{
            return produce(state, (draft) => {
                draft.healthshopMapSelected = action.healthshop;
            });
        }
        case types.SET_MAP_CENTER:{
            return produce(state, (draft) => {
                draft.mapCenter = action.location;
            });
        }
        case types.SET_HEALTHSTORE:{
            return produce(state, (draft) => {
                draft.healthshop = action.healthshop;
            });
        }

        case types.TOGGLE_CART_PRODUCT:{
            return produce(state, (draft) =>{
                const index = draft.cart.findIndex( (p) =>p._id === action.product._id);

                if(index !== -1){
                    draft.cart.splice(index, 1)
                }else{
                    draft.cart.push(action.product)
                }
            })
        }

        case types.SET_TRANSACTION:{
            return produce(state, (draft) => {
                draft.transaction = {...draft.transaction, ...action.transaction}
            })
        }

        default:
            return state;
    }
}

export default shop;