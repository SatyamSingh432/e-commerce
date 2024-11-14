import "./Products.css";
import Header from "./Header";
import Footer from "./Footer";
import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";
import Cart from "./Cart";

import productData from "./productsData";

const Products = () => {
  // -------------------------------------------------------------------------------------------------------
  // from here we sending items to cart.jsx( to re-render our cart.jsx when  we update items by ADD TO CART BUTTON from profuctCard.jsx )
  // and we sending setItems to productCard.jsx to update it .
  //

  const [items, setItems] = useState([]);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setItems(cartItems);
  }, []);

  // --------------------------------------------------------------------------------------------------------

  const [isLogin, setIsLoggin] = useState(false);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("isLogged"));
    setIsLoggin(user);
  }, []);

  const HeroSection = () => {
    return (
      <div className="container">
        <div className="hero">
          <p className="hero_heading">
            India’s <span className="hero_highlight">FASTEST DELIVERY</span> to
            your door step
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="main_container">
      {isLogin ? (
        <div className="product_cart">
          <div className="product_sec">
            {/* sending setIsLoggin state as props to header, so that after click on logout button cart section disapear */}
            <Header login={setIsLoggin} />
            <HeroSection />
            <div className="product_grid_container">
              <h2>PRODUCTS</h2>
              <div className="product_grid">
                {productData.map((ele) => {
                  return (
                    <ProductCard
                      updateItems={setItems}
                      name={ele.name}
                      key={ele._id}
                      price={ele.cost}
                      rating={ele.rating}
                      category={ele.category}
                      image={ele.image}
                      id={ele._id}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div className="cart_sec">
            <Cart cartItems={items} />
          </div>
        </div>
      ) : (
        <div>
          {/* sending setIsLoggin state as props to header, so that after click on logout button cart section disapear */}
          <Header login={setIsLoggin} />
          <HeroSection />
          <div className="product_grid_container">
            <h2>PRODUCTS</h2>
            <div className="product_grid">
              {productData.map((ele) => {
                return (
                  <ProductCard
                    name={ele.name}
                    key={ele.name}
                    price={ele.cost}
                    rating={ele.rating}
                    image={ele.image}
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};
export default Products;
