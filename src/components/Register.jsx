/* eslint-disable react/no-unescaped-entities */
import Header from "./Header";
import Footer from "./Footer";
import "./Login.css";
const Register = () => {
  return (
    <>
      <Header />
      <div className="container_login">
        <div className="hero_login">
          <div className="register_form">
            <div className="login_form_container">
              <div className="title_login">Register</div>
              <div className="detail_login">
                <textarea
                  name="username"
                  id="username"
                  placeholder="Username"
                ></textarea>
                <div className="password_limit">
                  <textarea
                    name="password"
                    id="password"
                    placeholder="Password"
                  ></textarea>
                  <p>Password must be atleast 6 characters length</p>
                </div>
                <textarea
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                ></textarea>
                <button>REGISTER NOW</button>
              </div>
              <p className="account">
                Already have an account? <span>Login here</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Register;
