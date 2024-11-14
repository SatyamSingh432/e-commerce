/* eslint-disable react/prop-types */
import "./CartCard.css";
import { RiSubtractLine } from "react-icons/ri";
import { IoIosAdd } from "react-icons/io";
const CartCard = (props) => {
  return (
    <div className="cart_card_cont">
      <img src={props.image} alt="de" className="cart_card_image" />
      <div className="cart_card_details">
        <div className="cart_card_name">{props.name}</div>
        <div className="cart_card_info">
          <div className="cart_card_btn">
            <button className="subtract ">
              {" "}
              <RiSubtractLine style={{ fontSize: "22px" }} />
            </button>
            <div className="product_number">{props.quantity}</div>
            <button className="add">
              {" "}
              <IoIosAdd style={{ fontSize: "22px" }} />
            </button>
          </div>
          <div className="cart_cart_price">{props.price}</div>
        </div>
      </div>
    </div>
  );
};
export default CartCard;
