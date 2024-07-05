import React, { useState } from "react";
import "./assets/Style.css";
import login from "./assets/img.svg";
import { Link } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(credentials);
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="login">
      <div className="login__content">
        <div className="login__img">
          <img src={login} alt="" />
        </div>
        <div className="login__forms">
          <form
            onSubmit={handleSubmit}
            className="login__registre"
            id="login-in"
          >
            <h1 className="login__title">LogIn</h1>
            <div className="login__box">
              <i className="bx bx-user login__icon" />
              <input
                type="email"
                placeholder="Email"
                value={credentials.email}
                onChange={onChange}
                name="email"
                className="login__input"
              />
            </div>
            <div className="login__box">
              <i className="bx bx-lock-alt login__icon" />
              <input
                type="password"
                placeholder="Password"
                value={credentials.password}
                onChange={onChange}
                name="password"
                className="login__input"
              />
            </div>
            <a href="/reset" className="login__forgot">
              Forgot password?
            </a>
            <button type="submit" className="login__button">
              LogIn
            </button>
            <div>
              <span className="login__account">Don't have an Account ?</span>
              <Link className="login__signin" to="/register" id="sign-up">
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
