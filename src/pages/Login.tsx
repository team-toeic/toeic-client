import React from "react";
import { LoginCSS } from "../style/pages/LoginCSS";
import LoginForm from "../components/LoginForm";
import Header from "../components/Header";

function Login() {
  return (
    <LoginCSS>
      <Header />
      <LoginForm />
    </LoginCSS>
  );
}

export default Login;
