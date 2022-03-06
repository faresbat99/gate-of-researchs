import React, { useState } from "react";
import "./../../App.css";
import "./../Footer.css";
import axios from "axios"; //axios is a package that is used to send HTTP requests, so we imported axios make this function synchronoss
import { Redirect } from "react-router-dom";
const Register = () => {
  //create for each input variable from the state
  //So your state is returns an array with the two with a variable and the function to set these variable
  // and once these variable changes, it will render the HTML
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();
  //when we register successfully what we want to redirect to our login
  const [redirect, setRedirect] = useState(false);

  //submit
  //  so we imported axios make this function synchronoss
  const submit = async (e) => {
    e.preventDefault();
    // sending data with axios  and get respose

    await axios.post(
      'register', //endpoint that connect to backend.. we move the rest of url to index.js
      {
        //set data
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
        password_confirm: passwordConfirm,
      }
    );
    setRedirect(true);//we the register is succussfull  
  };
  if (redirect) {
    return <Redirect to='./Login'/>;
  }

  return (
    <form className="box" onSubmit={submit}>
      <h1>Register</h1>
      <input
        className="box-input"
        name="firstName"
        type="text"
        placeholder="First name"
        required
        // Once we change the input, once we type,
        // we will call on change here and we will call setfirstname.
        //and to set the value we have to call event that target that value.
        onChange={(e) => setFirstName(e.target.value)} //So once we change this input, we have to set the first name like this.
      />
      <input
        className="box-input"
        name="lastName"
        type="text"
        placeholder="last name"
        required
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        className="box-input"
        name="email"
        type="email"
        placeholder="Your Email"
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="box-input"
        name="password"
        type="password"
        placeholder="Your Password"
        required
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        className="box-input"
        name="confirmpassword"
        type="password"
        placeholder="confirm password"
        required
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />

      <div className="buttonlogin-class">
        <input type="submit" className="buttonlogin" value={"Sign in"} />
      </div>
    </form>
  );
};
export default Register;
