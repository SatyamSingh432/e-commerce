/* eslint-disable react/prop-types */
import "./ProductCard.css";
const ProductCard = (props) => {
  return (
    <>
      <div className="card_container">
        <img className="card_img" src={props.image} alt="image" />
        <div className="product_content">
          <div className="product_details">
            <div className="product_name">{props.name}</div>
            <div className="product_price"> ${props.price}</div>
            <div className="product_ratin"></div>
          </div>
          <button className="product_btn">ADD TO CART</button>
        </div>
      </div>
    </>
  );
};
export default ProductCard;
