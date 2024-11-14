/* eslint-disable react/prop-types */
import "./ProductCard.css";
const ProductCard = (props) => {
  const card = {
    id: props.id,
    image: props.image,
    price: props.price,
    name: props.name,
    category: props.category,
  };

  const updateItems = props.updateItems;

  const handleSubmit = (e) => {
    e.preventDefault();

    const cardData = JSON.parse(localStorage.getItem("cartItems")) || false;

    if (cardData) {
      // Cart Exists
      // Check if item exist
      let isItemExists = cardData.find((localCard) => localCard.id === card.id);

      console.log({ isItemExists });
      if (isItemExists) {
        // increase quanity
        const newData = cardData.map((localCard) => {
          if (localCard.id === card.id) {
            localCard.quantity += 1;
            return localCard;
          }
          return localCard;
        });
        localStorage.setItem("cartItems", JSON.stringify(newData));
        updateItems(newData);
      } else {
        // add new item, with 1 quantity
        localStorage.setItem(
          "cartItems",
          JSON.stringify([...cardData, { quantity: 1, ...card }])
        );
        updateItems([...cardData, { quantity: 1, ...card }]);
      }
    } else {
      // Empty Cart
      localStorage.setItem(
        "cartItems",
        JSON.stringify([{ quantity: 1, ...card }])
      );
      updateItems([{ quantity: 1, ...card }]);
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
