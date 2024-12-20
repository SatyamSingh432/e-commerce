import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Checkout from "./components/Checkout";
import Thanks from "./components/Thanks";
import Products from "./components/Products";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Products} />
        <Route path="/login" Component={Login} />
        <Route path="/register" Component={Register} />
        <Route path="/checkout" Component={Checkout} />
        <Route path="/thanks" Component={Thanks} />
      </Routes>
      <ToastContainer
        position="bottom-center" // Position of the toast
        autoClose={3000} // Auto close duration (in milliseconds)
        hideProgressBar={true} // Show/hide progress bar
        newestOnTop={false} // Newest toast on top
        closeOnClick // Close on click
        pauseOnHover // Pause on hover
        draggable // Allow dragging
        theme="colored" // Theme: colored, light, or dark
      />
    </BrowserRouter>
  );
}

export default App;
