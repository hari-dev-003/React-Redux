const redux = require('redux');
const axios = require('axios');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunk = require('redux-thunk').thunk;




const FETCH_PRODUCT_REQUEST = 'FETCH_PRODUCT_REQUEST';
const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS';
const FETCH_PRODUCT_FAILURE = 'FETCH_PRODUCT_FAILURE';


const initialState={
    loading:false,
    product:[],
    error:false
}

//action creators

const fetchProductRequest = () => {
    return {
        type:FETCH_PRODUCT_REQUEST
    }
}

const fetchProductSuccess = (product) => {
    return {
        type:FETCH_PRODUCT_SUCCESS,
        payload:product
    }
}
const fetchProductFailure = (error) => {
    return {
        type:FETCH_PRODUCT_FAILURE,
        payload:error
    }
}


//Reducers

const reducer = (state=initialState,action) => {
    switch (action.type) {
        case FETCH_PRODUCT_REQUEST:
            return {
                ...state,
                loading:true
            }
        case FETCH_PRODUCT_SUCCESS:
            return {
                loading:false,
                product:action.payload,
                error:''
            }
        case FETCH_PRODUCT_FAILURE:
            return {
                loading:false,
                product:[],
                error:action.payload
            }
        default:
            return state
    }
}

//action creator 

const fetchProduct = () => {
    return (dispatch) => {
        dispatch(fetchProductRequest())
        axios.get('https://fakestoreapi.com/products')
        .then(response => {
            const product = response.data.map(product => product.title)
            dispatch(fetchProductSuccess(product))
        })
        .catch(error => {
            const errorMsg = error.message
            dispatch(fetchProductFailure(errorMsg))
        })
    }
}



//store
const store = createStore(reducer,applyMiddleware(thunk))

store.subscribe(() => {console.log(store.getState())})
store.dispatch(fetchProduct())
store.dispatch(fetchProduct())
store.dispatch(fetchProduct())