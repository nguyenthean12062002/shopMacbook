import "./Login.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "../Component/Button/button";
import { useState } from "react";
function Login({}) {
  const isLogin = true;
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const handleLogin = () => {
    console.log(userName, userPassword);
  };
  return (
    <div className="login">
      <h3 className="login__title">Sign in to pay faster</h3>
      <div className="login__wrapper">
        <form className="login__form">
          <h3 className="form__title">{isLogin ? "Login" : "SinginUp"}</h3>
          <div className="form__input mb-3">
            <input
              className="inputClass"
              id="input"
              // placeholder="Email or number phone"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
            <label for="input" className="input__label">
              Email or numberphone
            </label>
          </div>
          <div className="form__input mb-3">
            <input
              className="inputClass"
              id="input"
              type="password"
              onChange={(e) => {
                setUserPassword(e.target.value);
              }}
            />
            <label for="input" className="input__label">
              Pasword
            </label>
          </div>

          <br />
          <Button login onClick={handleLogin}>
            Login
          </Button>
          <div className="form__sub">
            <div className="sub_remember d-flex justify-content-center my-2">
              <input className="me-2" type="checkbox" />
              <span>Remember Account</span>
            </div>
            <div className="my-3 h6 ">
              <a href="" className="link">
                You forgot password?
              </a>
            </div>
            <div className="sub__createAccount">
              <span>You haven't account ?</span>
              <a href="" className="link">
                Create a new accout ,now!
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
