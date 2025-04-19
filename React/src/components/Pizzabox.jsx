import React from 'react'
import { orderPizza  } from '../features/pizza/pizza.selector'
import { useSelector, useDispatch } from 'react-redux'
const Pizzabox = (props) => {

const count = useSelector((state) => state.pizza.pizzaBase) 
const dispatch = useDispatch()
const OrderPizza = () => {
    dispatch(orderPizza())
}

  return (
    <>
        <div className='container flex flex-col gap-10 m-20 w-[350px] h-[450px] rounded-xl bg-emerald-100 shadow-2xl'>
            <h1 className='heading h-16 text-3xl font-bold bg-gradient-to-r from-blue-600 to-gray-900 m-auto
            bg-clip-text text-transparent'>Pizzabox page</h1>
            <h3 className="state m-auto text-4xl">{count}</h3>
            <button className="btn bg-red-500 rounded-3xl cursor-pointer hover:scale-125 transition-transform duration-300 text-white w-[120px] m-auto h-[46px]"
            onClick={OrderPizza}>Order Pizza</button>
        </div>
       
    </>
  )
}

// const mapStateToProps = (state) => {
//     return {
//         pizzaBase: state.pizza.pizzaBase
//     }
// }



// userSelector(state => state.pizzaBase) // This is a selector that selects the pizzaBase from the state.
// It is a function that takes the state as an argument and returns the pizzaBase property of the state object.


// const mapDispatchToProps = (dispatch) => {
//     return {
//         orderPizza: () => dispatch(orderPizza())
//     }
// }

 // This is a dispatch function that dispatches the orderPizza action to the store.

// userDispatch(dispatch => orderPizza()) // This is a dispatch function that dispatches the orderPizza action to the store.
// It is a function that takes the dispatch function as an argument and returns the orderPizza action creator function.
// It is used to dispatch the action to the store and update the state.


export default Pizzabox;
