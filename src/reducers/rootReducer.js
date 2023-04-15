import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import cartReducer from "./cart.reducer";
import categoryReducer from "./category.reducer";
import productReducer from "./product.reducer";

const rootReducer = combineReducers({
    auth:authReducer,
    category:categoryReducer,
    product:productReducer,
    cart:cartReducer
})

export default rootReducer