/* eslint-disable react/prop-types */
import "./Header.css";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
const Header = ({ hasHiddenAuth, login }) => {
  const history = useNavigate();
  const [isLogged, setIsLogged] = useState(false);
  const [isLoggedUser, setIsLoggedUser] = useState("");
  const logoutHandler = () => {
    localStorage.removeItem("isLogged");
    localStorage.removeItem("cartItems");
    history("/");
    setIsLogged(false);
    setIsLoggedUser("");
    login(false);
  };
  useEffect(() => {
    const login = JSON.parse(localStorage.getItem("isLogged"));
    if (login) {
      setIsLogged(login[0]);
      setIsLoggedUser(login[1]);
    }
  }, []);
  return (
    <div className="header">
      <div className="header_container">
        <div className="header_title">
          <img src="logo_light.svg" alt="e-commerce" />
        </div>
        <div className="nav_btns">
          {isLogged ? (
            <div className="user_info">
              <FaRegUserCircle style={{ fontSize: "30px" }} />
              <div className="logged_username">{isLoggedUser}</div>
              <button className="logout_btn" onClick={logoutHandler}>
                LOGOUT
              </button>
            </div>
          ) : (
            <>
              {!hasHiddenAuth ? (
                <>
                  <button
                    className="btn_login"
                    onClick={() => {
                      history("/login");
                    }}
                  >
                    LOGIN
                  </button>
                  <button
                    className="btn_reg"
                    onClick={() => {
                      history("/register");
                    }}
                  >
                    REGISTER
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="explore_btn"
                    onClick={() => {
                      history("/");
                    }}
                  >
                    <FaArrowLeft
                      style={{
                        fontSize: "14px",
                        paddingRight: "6px",
                      }}
                    />
                    BACK TO EXPLORE
                  </button>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default Header;
