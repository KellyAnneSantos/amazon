import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import "./LoginForm.css";
import SigninErrors from "../SigninErrors";

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("");
  const [demoCredential, setDemoCredential] = useState("user1@user.io");
  const [password, setPassword] = useState("");
  const [demoPassword, setDemoPassword] = useState("password2");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
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
          <h1 id="signin-title">Sign in</h1>
          <label className="signin-signup-labels">
            Email or mobile phone number
            <input
              type="text"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
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
          <button type="submit" className="signin-signup-buttons">
            Sign in
          </button>
        </form>
        <div id="new-question-line">
          <hr id="left-signin-new-hr" />
          <span id="new-question">New to Amazon?</span>
          <hr id="right-signin-new-hr" />
        </div>
        <NavLink to="/register">
          <button id="create-account-btn">Create your Amazon account</button>
        </NavLink>
        <div id="new-question-line">
          <hr id="left-signin-demo-hr" />
          <span id="new-question">Or</span>
          <hr id="right-signin-demo-hr" />
        </div>
        <button onClick={handleClick} id="create-account-btn">
          Sign in as demo user
        </button>
      </div>
      {/* <div className="signin-signup-footer"></div> */}
    </>
  );
}

export default LoginFormPage;
