import React, { useState } from "react";
import "./../../App.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { Redirect } from "react-router-dom";

const Login = ({ setBelogin }) => {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [redirect, setRedirect] = useState(false);
  const submit = async (e) => {
    e.preventDefault();

    await axios.post(
      "login", //url
      {
        //data
        email,
        password,
      }
    );
    setRedirect(true);
    setBelogin();
  };
  if (redirect) {
    return <Redirect to="/" />;
  }
  return (
    <form className="box" onSubmit={submit}>
      <h1>Login</h1>
      <input
        className="box-input"
        name="email"
        type="email"
        placeholder="Your Email"
        required
        onChange={(e) => setemail(e.target.value)}
      />
      <input
        className="box-input"
        name="password"
        type="password"
        placeholder="Your Password"
        required
        onChange={(e) => setpassword(e.target.value)}
      />
      <p className="forgot-password">
        <Link style={{ textDecoration: "none" }} to="./forgot">
          Forget your password?
        </Link>
      </p>
      <div className="buttonlogin-class">
        <input type="submit" className="buttonlogin" value={"Login"} />
        <Link style={{ textDecoration: "none" }} to="./Register">
          <input className="buttonlogin" type={"submit"} value={"Sign in"} />
        </Link>
      </div>
    </form>
  );
};
export default Login;
