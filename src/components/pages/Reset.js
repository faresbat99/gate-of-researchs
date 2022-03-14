import axios from "axios";
import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "./../../App.css";

const Reset = ({ match }) => {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [redirect, setRedirect] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    const token = match.params.token

    await axios.post(
      "reset", //url
      {
        //data
        token,
        password,
        password_confirm: passwordConfirm,
      }
    );
    setRedirect(true);
  };
  if (redirect) {
    return <Redirect to="/login" />;
  }
  return (
    <form className="box" onSubmit={submit}>
      {}
      <h2>Reset your password</h2>
      <input
        className="box-input"
        type="password"
        placeholder="Password"
        required
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        className="box-input"
        type="password"
        placeholder="Confirm Password"
        required
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />

      <div className="buttonlogin-class">
        <input type="submit" className="buttonlogin" style={{width:'150px'}} value={"Reset Password"} />
      </div>
    </form>
  );
};
export default Reset;
