/* eslint-disable react/prop-types */
import { FaCartArrowDown } from "react-icons/fa";
import "./Cart.css";
import CartCard from "./CartCard";
const Cart = ({ cartItems, setItems }) => {
  let grandTotal = 0;
  cartItems.map((ele) => {
    grandTotal += ele.price * ele.quantity;
  });

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
              setItems={setItems}
              key={ele.name}
              name={ele.name}
              price={ele.price}
              image={ele.image}
              quantity={ele.quantity}
              id={ele.id}
            />
          );
        })}
        <div className="checkout">
          <div className="total">
            <div className="grand_total">Grand Total</div>
            <div className="total_price">${grandTotal}</div>
          </div>
          <div className="checkout_btn_container">
            <button className="checkout_btn">
              <FaCartArrowDown
                style={{
                  fontSize: "18px",
                  color: "white",
                  paddingRight: "10px",
                }}
              />
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
