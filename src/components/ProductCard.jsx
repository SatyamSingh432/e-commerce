/* eslint-disable react/prop-types */
import "./ProductCard.css";
const ProductCard = (props) => {
  const card = { image: props.image, price: props.price, name: props.name };
  const updateItems = props.updateItems;
  const handleSubmit = (e) => {
    e.preventDefault();
    const cardData = JSON.parse(localStorage.getItem("cartItems")) || false;
    console.log(cardData);
    if (cardData) {
      localStorage.setItem("cartItems", JSON.stringify([...cardData, card]));
      updateItems([...cardData, card]);
    } else {
      localStorage.setItem("cartItems", JSON.stringify([card]));
      updateItems([card]);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="card_container">
        <img className="card_img" src={props.image} alt="image" />
        <div className="product_content">
          <div className="product_details">
            <div className="product_name">{props.name}</div>
            <div className="product_price"> $ {props.price}</div>
            <div className="product_ratin"></div>
          </div>
          <button className="product_btn" type="submit">
            ADD TO CART
          </button>
        </div>
      </div>
    </form>
  );
};
export default ProductCard;
