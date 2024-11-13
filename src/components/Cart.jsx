/* eslint-disable react/prop-types */
import { FaCartArrowDown } from "react-icons/fa";
import "./Cart.css";
import CartCard from "./CartCard";
const Cart = ({ cartItems }) => {
  if (cartItems.length === 0) {
    return (
      <div className="cart_container">
        <div className="empty_cart">
          <FaCartArrowDown style={{ fontSize: "28px" }} />
          <div>Cart is empty. Add more items to the cart to checkout.</div>
        </div>
      </div>
    );
  }
  return (
    <div className="cart_container">
      <div className="cart_cont_child">
        {cartItems.map((ele) => {
          return (
            <CartCard
              key={ele.name}
              name={ele.name}
              price={ele.price}
              image={ele.image}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Cart;
