import * as  actions from './Actiontypes'

export const reducer=(state,action)=>{
    switch (action.type){
        case actions.ADD_CLOTHE_TO_CART:
            return {
                ...state,
                cart :[action.payload , ...state.cart]
            };
        case actions.REMOVE_CLOTHE_FROM_CART:
            return {
                ...state,
                cart :state.cart.filter((products)=>products.id !==action.payload)
            };
        case actions.ADD_CLOTHE_TO_FAVOURITE:
            return {
                ...state,
                favourite :[action.payload , ...state.favourite]
            };
            case actions.REMOVE_CLOTHE_FROM_FAVOURITE:
                return {
                    ...state,
                    favourite :state.favourite.filter((products)=>products.id !==action.payload)
                };
        default:
            return state;
    }
}