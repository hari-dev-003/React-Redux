import { combineReducers } from "redux";
import pizzaReducer from "../features/pizza/pizza.reducer";
import burgerReducer from "../features/burger/burger.reducer";

const rootReducer = combineReducers({
    pizza: pizzaReducer,
    burger: burgerReducer
});

export default rootReducer;