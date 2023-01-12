import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import SigninErrors from "../SigninErrors";
import "./SignupForm.css";

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [demoCredential, setDemoCredential] = useState("user1@user.io");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [demoPassword, setDemoPassword] = useState("password2");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(
        sessionActions.signup({
          firstName,
          lastName,
          email,
          phone,
          password,
        })
      ).catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
    }
    return setErrors(["Passwords must match"]);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(
      sessionActions.login({
        credential: demoCredential,
        password: demoPassword,
      })
    );
  };

  return (
    <>
      <NavLink to="/">
        <img
          src="../../images/Amazon_logo_PNG3.png"
          className="signin-signup-logo"
        />
      </NavLink>
      <div id="create-account-div">
        {errors.length !== 0 && <SigninErrors errors={errors} />}
        <form onSubmit={handleSubmit} id="signin-form">
          <h1 id="signin-title">Create account</h1>
          <label className="signin-signup-labels">
            Your first name
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="signin-signup-inputs"
            />
          </label>
          <label className="signin-signup-labels">
            Your last name
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              className="signin-signup-inputs"
            />
          </label>
          <label className="signin-signup-labels">
            Mobile number
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="signin-signup-inputs"
            />
          </label>
          <label className="signin-signup-labels">
            Email
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="signin-signup-inputs"
            />
          </label>
          <label className="signin-signup-labels">
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="signin-signup-inputs"
            />
          </label>
          <label className="signin-signup-labels">
            Re-enter password
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="signin-signup-inputs"
            />
          </label>
          <button type="submit" className="signin-signup-buttons">
            Continue
          </button>
          <p id="privacy-notice">
            By creating an account, you agree to Amazon's Conditions of Use and
            Privacy Notice
          </p>
          <div id="register-footer">
            <span className="create-footer-questions">
              Already have an account?{" "}
            </span>
            <NavLink to="/signin">
              <span className="create-footer-answers">Sign in </span>
            </NavLink>
            <span className="create-footer-questions">
              Sign in as demo user?{" "}
            </span>
            <NavLink to="/">
              <span onClick={handleClick} className="create-footer-answers">
                Demo
              </span>
            </NavLink>
          </div>
        </form>
      </div>
      {/* <div className="signin-signup-footer"></div> */}
    </>
  );
}

export default SignupFormPage;
