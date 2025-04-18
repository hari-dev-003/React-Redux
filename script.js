/**
 * Redux example for ordering pizzas and burgers from a shop.
 * 
 * This script demonstrates the basic usage of Redux for state management.
 * It includes action types, action creators, reducers, and store setup.
 * The state represents a pizza and burger shop inventory with pizza bases and burger buns.
 */

const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware;
/**
 * Action type for ordering a pizza.
 * @constant {string}
 */
const ORDER_PIZZA = "Order_pizza";

/**
 * Action type for ordering a burger.
 * @constant {string}
 */
const ORDER_BURGER = "Order_burger";

/**
 * Name of the pizza and burger shop.
 * @constant {string}
 */
const SHOP_NAME = "Pizza Hut";

/**
 * Action creator for ordering a pizza.
 * Returns an action object with type and shop name.
 * @function
 * @returns {Object} Action object with type and shop_name properties.
 */
const orderPizza = () => {
    return {
        type: ORDER_PIZZA,
        shop_name: SHOP_NAME,
    }
}

/**
 * Action creator for ordering a burger.
 * Returns an action object with type and shop name.
 * @function
 * @returns {Object} Action object with type and shop_name properties.
 */
const orderBurger = () => {
    return {
        type: ORDER_BURGER,
        shop_name: SHOP_NAME,
    }
}

/**
 * Initial state of the pizza shop inventory.
 * @constant {Object}
 * @property {number} pizzaBase - Number of pizza bases available.
 */
const initialStatePizza = {
    pizzaBase: 100,
}

/**
 * Initial state of the burger shop inventory.
 * @constant {Object}
 * @property {number} burgerBuns - Number of burger buns available.
 */
const initialStateBurger = {
    burgerBuns: 100,
}

/**
 * Reducer function to handle pizza ordering actions.
 * Decrements the pizzaBase count when an ORDER_PIZZA action is dispatched.
 * @function
 * @param {Object} state - Current state of the pizza inventory.
 * @param {Object} action - Action dispatched.
 * @returns {Object} New state after applying the action.
 */
const pizzaReducer = (state = initialStatePizza, action) => {
    switch (action.type) {
        case ORDER_PIZZA:
            return {
                ...state,
                pizzaBase: state.pizzaBase - 1
            }

        default:
            return state;
    }
}

/**
 * Reducer function to handle burger ordering actions.
 * Decrements the burgerBuns count when an ORDER_BURGER action is dispatched.
 * @function
 * @param {Object} state - Current state of the burger inventory.
 * @param {Object} action - Action dispatched.
 * @returns {Object} New state after applying the action.
 */
const burgerReducer = (state = initialStateBurger, action) => {
    switch (action.type) {
        case ORDER_BURGER:
            return {
                ...state,
                burgerBuns: state.burgerBuns - 1
            }
        default:
            return state;
    }
}

/**
 * Combine pizzaReducer and burgerReducer into a root reducer.
 * @constant {Function}
 */
const rootReducer = combineReducers({
    pizza: pizzaReducer,
    burger: burgerReducer
});

/**
 * Create Redux store with the rootReducer.
 * @constant {Object}
 */
const store = createStore(rootReducer, applyMiddleware(logger));

console.log('Initial State', store.getState());

/**
 * Subscribe to store updates and log the updated state.
 * Returns a function to unsubscribe the listener.
 * @function
 * @returns {Function} Unsubscribe function to stop listening to store updates.
 */
const unsubscribe = store.subscribe(() => {
    console.log('Updated State', store.getState());
})

/**
 * Dispatch orderPizza action multiple times to simulate pizza orders.
 */
store.dispatch(orderPizza());
store.dispatch(orderPizza());
store.dispatch(orderPizza());

/**
 * Dispatch orderBurger action multiple times to simulate burger orders.
 */
store.dispatch(orderBurger());
store.dispatch(orderBurger());

/**
 * Unsubscribe the listener to stop logging state updates.
 */
unsubscribe();

/**
 * Dispatching an order after unsubscribe will not trigger the listener.
 */ 