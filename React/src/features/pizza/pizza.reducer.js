import { ORDER_PIZZA, PARCEL_PIZZA } from "./pizza.types";


const initialState = {
    pizzaBase: 100,
}

const pizzaReducer =(state=initialState,action) => {
    switch (action.type) {
        case ORDER_PIZZA:
            return {
                ...state,
                pizzaBase: state.pizzaBase - 1
            }
        case PARCEL_PIZZA:
            return {
                ...state,
                pizzaBase: state.pizzaBase + 0.5
            }
        default:
            return state;
    }
    }

export default pizzaReducer;
