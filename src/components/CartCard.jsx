/* eslint-disable react/prop-types */
import "./CartCard.css";
import { RiSubtractLine } from "react-icons/ri";
import { IoIosAdd } from "react-icons/io";
const CartCard = (props) => {
  const { id, setItems } = props;

  const addHandler = () => {
    // get data from localstorage
    const cartData = JSON.parse(localStorage.getItem("cartItems"));

    // increase quantity of the item
    const newData = cartData.map((localCard) => {
      if (localCard.id === id) {
        localCard.quantity += 1;
        return localCard;
      }
      return localCard;
    });
    localStorage.setItem("cartItems", JSON.stringify(newData));
    setItems(newData);
  };

  const subtractHandler = () => {
    // get data from localstorage
    const cartData = JSON.parse(localStorage.getItem("cartItems"));

    // increase quantity of the item
    const newData = cartData
      .map((localCard) => {
        if (localCard.id === id) {
          if (localCard.quantity > 1) {
            localCard.quantity -= 1;
            return localCard;
          } else {
            // If quantity is 1, we need to delete the item so,
            // return null so that we can filter out later
            return null;
          }
        }
        return localCard;
      })
      .filter((localCard) => localCard != null);
    localStorage.setItem("cartItems", JSON.stringify(newData));
    setItems(newData);
  };

  return (
    <div className="cart_card_cont">
      <img
        src={props.image}
        alt="de"
        title={props.name}
        className="cart_card_image"
      />
      <div className="cart_card_details">
        <div className="cart_card_name">{props.name}</div>
        <div className="cart_card_info">
          {props.hideButton ? (
            <div className="product_number">Qty: {props.quantity}</div>
          ) : (
            <div className="cart_card_btn">
              <button className="subtract" onClick={subtractHandler}>
                {" "}
                <RiSubtractLine style={{ fontSize: "22px" }} />
              </button>
              <div className="product_number">{props.quantity}</div>
              <button className="add" onClick={addHandler}>
                {" "}
                <IoIosAdd style={{ fontSize: "22px" }} />
              </button>
            </div>
          )}
          <div className="cart_cart_price">{props.price}</div>
        </div>
      </div>
    </div>
  );
};
export default CartCard;
