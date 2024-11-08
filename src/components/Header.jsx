/* eslint-disable react/prop-types */
import "./Header.css";
import { useNavigate } from "react-router-dom";
const Header = ({ hasHiddenAuth }) => {
  const history = useNavigate();
  return (
    <div className="header">
      <div className="header_container">
        <div className="header_title">
          <img src="logo_light.svg" alt="e-commerce" />
        </div>
        <div className="nav_btns">
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
            <button className="explore_btn">BACK TO EXPLORE</button>
          )}
        </div>
      </div>
    </div>
  );
};
export default Header;
