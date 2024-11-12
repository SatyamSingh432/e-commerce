import { FaCartArrowDown } from "react-icons/fa";
import "./Cart.css";
const Cart = () => {
  return (
    <div className="cart_container">
      <div className="empty_cart">
        <FaCartArrowDown style={{ fontSize: "28px" }} />
        <div>Cart is empty. Add more items to the cart to checkout.</div>
      </div>
    </div>
  );
};
export default Cart;
