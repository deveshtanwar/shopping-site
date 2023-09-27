import ProductList from "./screen/ProductList";
import ProductDetail from "./screen/ProductDetail";
import Header from "../src/component/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./component/Cart/Cart";

const App = () =>{
  return(
    <BrowserRouter basename="/shopping-site">
      <Header />
      <Routes>
        <Route path="/" exact element={<ProductList />} />
        <Route path="/details/:id" exact element={<ProductDetail />} />
        <Route path="/cart" exact element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;