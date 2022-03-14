import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import axios from "axios";

function Navbar({ user, setBelogin }) {
  const [click, setClick] = useState(false); // هنا عملنا دي علشان تغير بين الحالات
  const [button, setButton] = useState(true); // دي علشان تغير علامه x ل التلات شرط

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  ////////////////////////
  // const [message, setMessage] = useState(null);

  // useEffect(() => {
  //   //this will be called only once .
  //   (async () => {
  //     try {
  //       //here will use axios inside ... this is the async function

  //       const response = await axios.get("user");
  //       const user = response.data;
  //       setMessage(`hi, ${user.first_name} ${user.last_name}`); //massage that will appear above
  //     } catch (e) {
  //       setMessage(null);
  //     }
  //     // console.log(response);
  //   })(); //the excute of it
  // }, []); //if we put an empty array, if we put a value here, it will change.When that value changes
  ////////////////
  ////////////////////// another way
  let message;
  let name;
  if (user) {
    message = `hi ${user.first_name} ${user.last_name}`;
    name = (
      <li className="nav-item" id="loginName">
        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
          {message}
        </Link>
      </li>
    );
  } else {
    message = null;
    name = null;
  }

  const logout = async () => {
    await axios.post("logout", {});
    setBelogin();
  };
  //////////////////
  let links;
  if (user) {
    links = button && (
      <Button onClick={logout} buttonStyle="btn--outline">
        Logout
      </Button>
    );
  } else {
    links = button && <Button buttonStyle="btn--outline">SIGN UP</Button>;
  }
  let linkss;
  if (user) {
    linkss = (
      <Link className="nav-links-mobile" onClick={(closeMobileMenu, logout)}>
        Logout
      </Link>
    );
  } else {
    linkss = (
      <Link to="/login" className="nav-links-mobile" onClick={closeMobileMenu}>
        SIGN UP
      </Link>
    );
  }
  /////
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <i className="fab fa-researchgate"> Gate of Research </i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/addResearch"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Add your Research
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About Us
              </Link>
            </li>

            {name}
            <li>{linkss}</li>
          </ul>
          {links}
          {/* {button && <Button buttonStyle="btn--outline">SIGN UP</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
