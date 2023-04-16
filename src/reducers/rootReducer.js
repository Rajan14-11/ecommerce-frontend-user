import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import cartReducer from "./cart.reducer";
import categoryReducer from "./category.reducer";
import productReducer from "./product.reducer";
import userReducer from "./user.reducer";

const rootReducer = combineReducers({
    auth:authReducer,
    category:categoryReducer,
    product:productReducer,
    cart:cartReducer,
    user:userReducer
})

export default rootReducer