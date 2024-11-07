import "./Products.css";
import Header from "./Header";
import Footer from "./Footer";
const Products = () => {
  const displayProducts = () => {
    return (
      <>
        <div className="container">
          <div className="hero">
            <p className="hero_heading">
              India’s <span className="hero_highlight">FASTEST DELIVERY</span>{" "}
              to your door step
            </p>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="main_container">
      <Header />
      {displayProducts()}
      <Footer />
    </div>
  );
};
export default Products;
