import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "./Components/Products";
import ProductDetails from "./Components/ProductDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;