/* eslint-disable react/no-unescaped-entities */
import Header from "./Header";
import Footer from "./Footer";
import "./Login.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <Header hasHiddenAuth />
      <div className="container_login">
        <div className="hero_login">
          <div className="login_form">
            <div className="login_form_container">
              <div className="title_login">Login</div>
              <div className="detail_login">
                <textarea name="" id="" placeholder="Username"></textarea>
                <textarea name="" id="" placeholder="Password"></textarea>
                <button>LOGIN TO QKART</button>
              </div>
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
