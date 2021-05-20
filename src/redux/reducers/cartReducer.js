import { TOGGLE_CART_HIDDEN } from '../types';
import { ADD_ITEM } from './../types';
const INITIAL_STATE = {
    hidden: true,
    cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden,
            };

        case ADD_ITEM:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload],
            };

        default:
            return state;
    }
};

export default cartReducer;
