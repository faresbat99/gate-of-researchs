import React, { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "./components/pages/Products";
import about from "./components/pages/About";
import register from "./components/pages/Register";
import { useEffect } from "react";
import axios from "axios";
import Login from "./components/pages/login";
import forgot from './components/pages/forgot';
import Reset from "./components/pages/Reset";
import AddResearch from "./components/pages/addResearch";
import dashboard from "./components/pages/dashboard";
import updateResearch from "./components/pages/updateResearch";
import Search from "./components/Search";

function App() {
  const [user, setUser] = useState(null);
  const [belogin, setBelogin] = useState(false);
  ////
//useEfect use to get data without refresh the page 
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
          <Route path="/reset/:token" component={Reset} />
          <Route
            path="/login"
            component={() => <Login setBelogin={() => setBelogin(true)} />}
          />
          <Route path="/products" component={Products} />
          <Route path="/forgot" component={forgot} />
          <Route path="/about" component={about} />
          <Route path="/register" component={register} />
          <Route path="/addResearch" component={AddResearch} />
          <Route path="/Update/:id" component={updateResearch}  /> {/**get the num with specific parameter */}
          <Route path="/search" component={Search}  /> {/**get the num with specific parameter */}
          <Route path="/dashboard" component={dashboard} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
