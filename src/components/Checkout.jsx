import "./Checkout.css";
import Header from "./Header";
import { IoFolderSharp } from "react-icons/io5";
import Cart from "./Cart";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
const Checkout = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [qty, setQty] = useState(0);
  const [total, setTotal] = useState(0);
  const [address, setAddress] = useState("");

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cartItems"));
    setData(cartData);
    let totalQty = 0;
    let totalAmount = 0;
    cartData.map((ele) => {
      totalQty += ele.quantity;
      totalAmount += ele.price * ele.quantity;
    });
    setQty(totalQty);
    setTotal(totalAmount);
  }, []);
  const addressHandler = (e) => {
    const custAddress = e.target.value;
    setAddress(custAddress);
  };
  const submitHandler = () => {
    if (address.length >= 20) {
      navigate("/");
    } else {
      alert("Address must be of atleast 20 words or more");
    }
  };
  return (
    <>
      <Header />
      <div className="checkout_container">
        <div className="checkout_container_child">
          <div className="shipping_payment">
            <div className="shipping_cont">
              <h1 className="shipping_address">Shipping</h1>
              <div className="shipping_content">
                Manage all the shipping addresses you want. This way you
                won&apos;t have to enter the shipping address manually with
                every order. Select the address you want to get your order
                delivered.
              </div>
              <hr />
              <textarea
                className="input_address"
                placeholder="Enter your complete address"
                onChange={addressHandler}
                value={address}
              ></textarea>
              {/* <button className="add_address">Add Address</button> */}
            </div>
            <div className="payment_cont">
              <h1 className="payment_method">Payment</h1>
              <div className="payment_content">Payment Method</div>
              <hr />
              <div className="wallet">
                <div className="wallet_heading">Wallet</div>
                <div className="wallet_amount">
                  {`Pay $${total} of available $5000`}
                </div>
              </div>
              <button className="order_place" onClick={submitHandler}>
                <IoFolderSharp style={{ paddingRight: "6px" }} />
                PLACE ORDER
              </button>
            </div>
          </div>

          <div className="cart_data">
            <div className="checkout_items">
              <Cart cartItems={data} hideButton={true} />
            </div>
            <div className="checkout_details">
              <h2 className="order_heading">Order Details</h2>
              <div className="order_detail_list">
                <h3 className="detail_name">Products</h3>
                <div className="amount">{qty}</div>
              </div>
              <div className="order_detail_list">
                <h3 className="detail_name">Subtotal</h3>
                <div className="amount">${total}</div>
              </div>
              <div className="order_detail_list">
                <h3 className="detail_name">Shipping Charges</h3>
                <div className="amount">$0</div>
              </div>
              <div className="order_detail_list total_amt">
                <h3 className="detail_name "> Total</h3>
                <div className="total_amt">${total}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Checkout;
