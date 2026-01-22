import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const res = await axios.post(
      "http://localhost:3002/api/auth/login",
      { email, password }
    );

    // 🔴 YAHI SABSE IMPORTANT LINE HAI
    localStorage.setItem("token", res.data.token);

    navigate("/dashboard");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
