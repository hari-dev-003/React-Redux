import {createStore,applyMiddleware} from 'redux';
import pizzaReducer from '../features/pizza/pizza.reducer';
import rootReducer from './rootReducer';
import logger from 'redux-logger';


const store = createStore(rootReducer,applyMiddleware(logger));

export default store;