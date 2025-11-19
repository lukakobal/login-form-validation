import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleEmail = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (!value.includes("@")) {
      setErrors((prev) => ({ ...prev, email: "Email is not valid ❌" }));
    } else {
      setErrors((prev) => ({ ...prev, email: "" }));
    }
  };

  const handlePassword = (e) => {
    const value = e.target.value;
    setPassword(value);

    if (value.length < 6) {
      setErrors((prev) => ({
        ...prev,
        password: "Password must be at least 6 characters ❌",
      }));
    } else {
      setErrors((prev) => ({ ...prev, password: "" }));
    }
  };
  const isValid = email.includes("@") && password.length >= 6;

  return (
    <div className="container">
      <h1>Login Form ✅</h1>
      <div className="field">
        <label>Email</label>
        <input value={email} onChange={handleEmail} />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>

      <div className="field">
        <label>Password:</label>
        <input type="password" value={password} onChange={handlePassword} />
        {errors.password && <p className="error">{errors.password}</p>}
      </div>
      <button disabled={!isValid}>Login</button>
    </div>
  );
}
