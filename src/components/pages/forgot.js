import React, { useState } from "react";
import "./../../App.css";
import axios from "axios";

const Forgot = () => {
  const [email, setemail] = useState();
  //   want to notify the user if the email was sent or not
  const [notify, setNotify] = useState({
    show: false,
    error: false,
    message: "",
  });
  const submit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "forgot", //url
        {
          //data
          email,
        }
      );
      //if the response is successfull
      setNotify({
        show: true,
        error: false,
        message: "Email was sent!",
      });

      //if email isn't sent
    } catch (e) {
      setNotify({
        show: true,
        error: true,
        message: "Email doesn't exist",
      });
    }
  };
  let info;
  if (notify.show) {
    info = (
      <div
        className={
          notify.error ? "alert alert-danger " : "alert alert-success "
        }
        role="alert"
      >
        {notify.message}
      </div>
    );
  }

  return (
    <form className="box" onSubmit={submit}>
      {info}
      <h2>Please set your email</h2>
      <input
        className="box-input"
        name="email"
        type="email"
        placeholder="Your Email"
        required
        onChange={(e) => setemail(e.target.value)}
      />

      <div className="buttonlogin-class">
        <input type="submit" className="buttonlogin" value={"Send Email"} />
      </div>
    </form>
  );
};
export default Forgot;
