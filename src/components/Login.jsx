/* eslint-disable react/no-unescaped-entities */
import Header from "./Header";
import Footer from "./Footer";
import "./Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [isName, setIsName] = useState("");
  const [isPassword, setIsPassword] = useState("");
  const navigate = useNavigate();
  const handlerSubmit = (e) => {
    e.preventDefault();
    if (isName.length === 0) {
      alert("name is empty");
    } else if (isPassword.length === 0) {
      alert("password is required");
    } else {
      const userData = JSON.parse(localStorage.getItem(isName));
      if (userData && isName === userData[0] && isPassword === userData[1]) {
        setIsName("");
        setIsPassword("");
        console.log("loggedin");
        navigate("/");
      } else alert("user doesn't exist");
    }
  };
  const handlerName = (e) => {
    setIsName(e.target.value);
  };
  const handlerPassword = (e) => {
    setIsPassword(e.target.value);
  };
  return (
    <>
      <Header hasHiddenAuth />
      <div className="container_login">
        <div className="hero_login">
          <div className="login_form">
            <div className="login_form_container">
              <div className="title_login">Login</div>
              <form onSubmit={handlerSubmit}>
                <div className="detail_login">
                  <textarea
                    name="username"
                    id="username"
                    placeholder="Username"
                    value={isName}
                    onChange={handlerName}
                  ></textarea>
                  <textarea
                    name="password"
                    id="password"
                    placeholder="Password"
                    value={isPassword}
                    onChange={handlerPassword}
                  ></textarea>
                  <button type="submit">LOGIN TO QKART</button>
                </div>
              </form>
              <p className="account">
                Didn't have account?{" "}
                <Link className="link" to="/register">
                  Register now
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Login;
