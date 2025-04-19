import { ORDER_PIZZA } from "./pizza.types"



const orderPizza =() => {
    return {
        type:   ORDER_PIZZA,
        shop_name: "Pizza Hut",
    }
}

export {orderPizza}