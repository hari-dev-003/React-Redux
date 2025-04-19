import React from 'react'
import { orderPizza, parcelPizza  } from '../features/pizza/pizza.selector'
import { useSelector, useDispatch } from 'react-redux'
const Pizzabox = () => {

const count = useSelector((state) => state.pizza.pizzaBase) 
const dispatch = useDispatch()
const OrderPizza = () => {
    dispatch(orderPizza())
}

const ParcelPizza = () => {
    dispatch(parcelPizza());
}

  return (
    <>
        <div className='container flex flex-col gap-10 m-20 w-[350px] h-[450px] rounded-xl bg-emerald-100 shadow-2xl'>
            <h1 className='heading h-16 text-3xl font-bold bg-gradient-to-r from-blue-600 to-gray-900 m-auto
            bg-clip-text text-transparent'>Pizzabox page</h1>
            <h3 className="state m-auto text-4xl">{count}</h3>
            <button className="btn bg-red-500 rounded-3xl cursor-pointer hover:scale-125 transition-transform duration-300 text-white w-[120px] m-auto h-[46px]"
            onClick={OrderPizza}>Order Pizza</button>
            <button className="btn bg-green-500 rounded-3xl cursor-pointer hover:scale-125 transition-transform duration-300 text-white w-[120px] m-auto h-[46px]"
            onClick={ParcelPizza}>Parcel Pizza</button>
        </div>
       
    </>
  )
}

export default Pizzabox;
