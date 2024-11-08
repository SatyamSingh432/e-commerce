import Header from "./Header";
import Footer from "./Footer";
import "./Login.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [isName, setIsName] = useState("");
  const [isPassword, setIsPassword] = useState("");
  const [isConPassword, setIsConPassword] = useState("");
  const navigate = useNavigate();
  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log(23);
    console.log(isPassword.length);
    if (isName.length === 0) {
      alert("no name");
    } else if (isPassword.length < 6) {
      alert("small password");
    } else if (isPassword !== isConPassword) {
      alert("password didn't match");
    } else {
      localStorage.setItem(isName, JSON.stringify([isName, isPassword]));
      setIsConPassword("");
      setIsName("");
      setIsPassword("");
      navigate("/login");
    }
  };
  const handleInputName = (e) => {
    console.log(e.target.value);
    setIsName(e.target.value);
  };
  const handleInputPassword = (e) => {
    console.log(e.target.value);
    setIsPassword(e.target.value);
  };
  const handleInputConPassword = (e) => {
    console.log(e.target.value);
    setIsConPassword(e.target.value);
  };

  return (
    <>
      <Header hasHiddenAuth />
      <div className="container_login">
        <div className="hero_login">
          <div className="register_form">
            <div className="login_form_container">
              <div className="title_login">Register</div>
              <form onSubmit={handlerSubmit}>
                <div className="detail_login">
                  <textarea
                    name="username"
                    id="username"
                    placeholder="Username"
                    value={isName}
                    onChange={handleInputName}
                  ></textarea>
                  <div className="password_limit">
                    <textarea
                      name="password"
                      id="password"
                      placeholder="Password"
                      value={isPassword}
                      onChange={handleInputPassword}
                    ></textarea>
                    <p>Password must be atleast 6 characters length</p>
                  </div>
                  <textarea
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    value={isConPassword}
                    onChange={handleInputConPassword}
                  ></textarea>
                  <button type="submit">REGISTER NOW</button>
                </div>
              </form>
              <p className="account">
                Already have an account?{" "}
                <Link className="link" to={"/login"}>
                  Login here
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
export default Register;
