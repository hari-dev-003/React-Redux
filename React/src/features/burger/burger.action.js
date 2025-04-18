import { Order_burger } from "./burger.types";

const orderBurger = () => {
    return {
        type: Order_burger,
        shop_name: "Burger King",
    }
}
export { orderBurger }