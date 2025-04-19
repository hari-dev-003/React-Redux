import { ORDER_PIZZA, PARCEL_PIZZA } from "./pizza.types"

const orderPizza =() => {
    return {
        type:   ORDER_PIZZA,
        shop_name: "Pizza Hut",
    }
}

const parcelPizza = () => {
    return {
        type: PARCEL_PIZZA,
        shop_name: "Pizza Hut",
    }
}

export {orderPizza, parcelPizza}
