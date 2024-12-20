import Header from "./Header";
import Footer from "./Footer";
import "./Login.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Register = () => {
  const [isName, setIsName] = useState("");
  const [isPassword, setIsPassword] = useState("");
  const [isConPassword, setIsConPassword] = useState("");
  const navigate = useNavigate();
  const handlerSubmit = (e) => {
    e.preventDefault();

    if (isName.length === 0) {
      toast.error("no name");
    } else if (isPassword.length < 6) {
      toast.warning("small password");
    } else if (isPassword !== isConPassword) {
      toast.error("password didn't match");
    } else {
      localStorage.setItem(isName, JSON.stringify([isName, isPassword]));
      toast.success("Registration Complete");
      setIsConPassword("");
      setIsName("");
      setIsPassword("");
      navigate("/login");
    }
  };
  const handleInputName = (e) => {
    setIsName(e.target.value);
  };
  const handleInputPassword = (e) => {
    setIsPassword(e.target.value);
  };
  const handleInputConPassword = (e) => {
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
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username"
                    value={isName}
                    onChange={handleInputName}
                  ></input>
                  <div className="password_limit">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                      value={isPassword}
                      onChange={handleInputPassword}
                    ></input>
                    <p>Password must be atleast 6 characters length</p>
                  </div>
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    value={isConPassword}
                    onChange={handleInputConPassword}
                  ></input>
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
