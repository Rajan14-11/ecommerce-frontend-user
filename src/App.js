import HomePage from "./containers/HomePage";
import ProductListPage from "./containers/ProductListPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import {useSelector,useDispatch} from "react-redux"
import { isUserLoggedIn, updateCart} from "./actions";
import ProductDetailsPage from "./containers/ProductDetailsPage";
import CartPage from "./containers/CartPage";

function App() {
const dispatch = useDispatch()
const auth = useSelector(state=>state.auth)

useEffect(() => {
 if(!auth.authenticate){
  dispatch(isUserLoggedIn())
 }
}, [auth.authenticate])

useEffect(()=>{
  dispatch(updateCart())
},[auth.authenticate])


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
          <Route path="/:slug" element={<ProductListPage />}></Route>
          <Route path="/:productslug/:productId/p" element={<ProductDetailsPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
