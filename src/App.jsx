/* eslint-disable react/no-unescaped-entities */

import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import ProductCard from "./components/ProductCard";
import Products from "./components/Products";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Products} />
        <Route path="/login" Component={Login} />
        <Route path="/register" Component={Register} />
        {/* <ProductCard /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
