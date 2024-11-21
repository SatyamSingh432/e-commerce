import "./Thanks.css";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
const Thanks = () => {
  const navigate = useNavigate();
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const storedBalance = JSON.parse(localStorage.getItem("balance")) || 0;
    setBalance(storedBalance);
  }, []);
  const shoppingHandler = () => {
    localStorage.removeItem("cartItems");
    navigate("/");
  };
  return (
    <>
      <Header />
      <div className="thanks_container">
        <div className="thanks_cont_child">
          <div className="thanks_heading">Yay! It&apos;s ordered 😃</div>
          <div className="thanks_content">
            <div>You will receive an invoice for your order shortly.</div>
            <div>Your order will arrive in 7 business days.</div>
          </div>
          <div className="thanks_wallet">
            <div className="heading">Wallet Balance</div>
            <div className="balance">${balance} Available</div>
            <button className="shopping_btn" onClick={shoppingHandler}>
              continue shoping
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Thanks;
