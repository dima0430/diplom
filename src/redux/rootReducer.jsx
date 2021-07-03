import { combineReducers} from "redux";
import { categoriesReducer } from "./categoriesReducer";
import { logInReducer } from "./logInReducer";
import { productsReducer } from "./productsReducer";
import {cartReducer} from "./cartReducer";
import { ordersReducer } from "./ordersReducer";

export const rootReducer=combineReducers({
    logIn:logInReducer,
    categories: categoriesReducer,
    products: productsReducer,
    cart: cartReducer,
    orders:ordersReducer
})