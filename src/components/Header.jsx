import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header_container">
        <div className="header_title">
          <img src="logo_light.svg" alt="e-commerce" />
        </div>
        <div className="nav_btns">
          <button className="btn_login">LOGIN</button>
          <button className="btn_reg">REGISTER</button>
        </div>
      </div>
    </div>
  );
};
export default Header;
