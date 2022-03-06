import React, { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import about from "./components/pages/About";
import register from "./components/pages/Register";
import { useEffect } from "react";
import axios from "axios";
import Login from "./components/pages/login";

function App() {
  const [user, setUser] = useState(null);
  const [belogin, setBelogin] = useState(false);
  ////

  useEffect(() => {
    //this will be called only once .
    (async () => {
      try {
        //here will use axios inside ... this is the async function

        const response = await axios.get("user");
        const user = response.data;
        setUser(user);
      } catch (e) {
        setUser(null);
      }
      // console.log(response);
    })(); //the excute of it
  }, [belogin]); //if we put an empty array, if we put a value here, it will change.When that value changes

  return (
    <>
      <Router>
        <Navbar user={user} setBelogin={() => setBelogin(false)} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route
            path="/login"
            component={() => <Login setBelogin={() => setBelogin(true)} />}
          />
          <Route path="/products" component={Products} />
          <Route path="/about" component={about} />
          <Route path="/register" component={register} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
