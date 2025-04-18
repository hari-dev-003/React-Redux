import { Order_burger } from "./burger.types";

const initialState = {
    burgerBase: 100,
}
const burgerReducer = (state = initialState, action) => {
    switch (action.type) {
        case Order_burger:
            return {
                ...state,
                burgerBase: state.burgerBase - 1
            }
        default:
            return state;
    }
}
export default burgerReducer;