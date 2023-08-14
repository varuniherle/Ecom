import React from "react";
import {Route, BrowserRouter, Routes} from "react-router-dom"
import Address from "./components/Address";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import OrderDetails from "./components/OrderDetails";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Routes>
        {/* <Route path="/address" element={<Address/>}></Route> */}
        <Route path="/" element={<Products />}></Route>
        <Route path ="/productDetail" element={<ProductDetails />}></Route>
        <Route path ="/Review" element={<OrderDetails />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
