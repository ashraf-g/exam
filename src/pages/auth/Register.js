import React, { useState } from "react";
import "./assets/Style.css";
import login from "./assets/img.svg";
import { Link } from "react-router-dom";

const Register = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    state: "",
    country: "",
    pincode: "",
    password: "",
    cpassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
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
            className={step === 1 ? "login__create" : "none"}
          >
            <div className="">
              <h1 className="login__title">Personal Information</h1>
              <div className="login__box">
                <input
                  type="text"
                  placeholder="First Name"
                  className="login__input"
                  onChange={handleChange}
                  value={formData.firstName}
                  name="firstName"
                  required
                />
              </div>
              <div className="login__box">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="login__input"
                  onChange={handleChange}
                  value={formData.lastName}
                  name="lastName"
                  required
                />
              </div>
              <div className="login__box">
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className="login__input"
                  onChange={handleChange}
                  value={formData.mobileNumber}
                  name="mobileNumber"
                  required
                />
              </div>
              <div className="login__box">
                <input
                  type="email"
                  placeholder="Email"
                  className="login__input"
                  onChange={handleChange}
                  value={formData.email}
                  name="email"
                  required
                />
              </div>
              <button
                type="button"
                className="login__button"
                onClick={nextStep}
              >
                Next
              </button>
            </div>
          </form>

          <form
            onSubmit={handleSubmit}
            className={step === 2 ? "login__create" : "none"}
          >
            <div className="">
              <h1 className="login__title">Address Information</h1>
              <div className="login__box">
                <input
                  type="text"
                  placeholder="State"
                  className="login__input"
                  onChange={handleChange}
                  value={formData.state}
                  name="state"
                  required
                />
              </div>
              <div className="login__box">
                <input
                  type="text"
                  placeholder="Country"
                  className="login__input"
                  onChange={handleChange}
                  value={formData.country}
                  name="country"
                  required
                />
              </div>
              <div className="login__box">
                <input
                  type="text"
                  placeholder="Pincode"
                  className="login__input"
                  onChange={handleChange}
                  value={formData.pincode}
                  name="pincode"
                  required
                />
              </div>
              <div className="login__box">
                <input
                  type="password"
                  placeholder="Password"
                  className="login__input"
                  onChange={handleChange}
                  value={formData.password}
                  name="password"
                  minLength={5}
                  required
                />
              </div>
              <div className="login__box">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="login__input"
                  onChange={handleChange}
                  value={formData.cpassword}
                  name="cpassword"
                  minLength={5}
                  required
                />
              </div>
              <button
                type="button"
                className="login__button"
                onClick={prevStep}
              >
                Previous
              </button>
              <button type="submit" className="login__button">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
