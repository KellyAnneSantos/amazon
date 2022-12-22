import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import "./SignupForm.css";

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [merchant, setMerchant] = useState(false);
  const [merchantName, setMerchantName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [prime, setPrime] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [password, setPassword] = useState("");
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
          merchant,
          merchantName,
          email,
          phone,
          prime,
          previewImage,
          password,
        })
      ).catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
    }
    return setErrors([
      "Confirm Password field must be the same as the Password field",
    ]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <label>
        First Name
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </label>
      <label>
        Last Name
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </label>
      <label>
        Merchant
        <input
          type="checkbox"
          checked={merchant}
          onClick={() => setMerchant(!merchant)}
        />
      </label>
      <label>
        Merchant Name
        <input
          type="text"
          value={merchantName}
          onChange={(e) => setMerchantName(e.target.value)}
        />
      </label>
      <label>
        Email
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        Phone
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </label>
      <label>
        Prime
        <input
          type="checkbox"
          checked={prime}
          onClick={() => setPrime(!prime)}
        />
      </label>
      <label>
        Profile Picture
        <input
          type="text"
          value={previewImage}
          onChange={(e) => setPreviewImage(e.target.value)}
        />
      </label>
      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <label>
        Confirm Password
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignupFormPage;
