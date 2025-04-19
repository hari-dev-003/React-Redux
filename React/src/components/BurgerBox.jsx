import React from 'react'
import { orderPizza  } from '../features/pizza/pizza.selector'
import { connect } from 'react-redux'
import { orderBurger } from '../features/burger/burger.selector'
import { useSelector,useDispatch } from 'react-redux'
const BurgerBox = (props) => {
    const burgerCount = useSelector((state) => state.burger.burgerBase)
    const dispatch = useDispatch()
    const OrderBurger = () => {
        dispatch(orderBurger())
    }
  return (
    <>
        <div className='container flex flex-col gap-10 m-20 w-[350px] h-[450px] rounded-xl bg-emerald-100 shadow-2xl'>
            <h1 className='heading h-16 text-3xl font-bold bg-gradient-to-r from-blue-600 to-gray-900 m-auto
            bg-clip-text text-transparent'>BurgerBox page</h1>
            <h3 className="state m-auto text-4xl">{burgerCount}</h3>
            <button className="btn bg-red-500 rounded-3xl cursor-pointer hover:scale-125 transition-transform duration-300 text-white w-[120px] m-auto h-[46px]"
            onClick={OrderBurger}>Order Burger</button>
        </div>
       
    </>
  )
}

// const mapStateToProps = (state) => {
//     return {
//         burgerBase: state.burger.burgerBase
//     }
// }

// userSelector(state => state.pizzaBase) // This is a selector that selects the pizzaBase from the state.
// It is a function that takes the state as an argument and returns the pizzaBase property of the state object.


// const mapDispatchToProps = (dispatch) => {
//     return {
//         orderBurger: () => dispatch(orderBurger())
//     }
// }

// userDispatch(dispatch => orderPizza()) // This is a dispatch function that dispatches the orderPizza action to the store.
// It is a function that takes the dispatch function as an argument and returns the orderPizza action creator function.
// It is used to dispatch the action to the store and update the state.


export default BurgerBox;
