import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { contact } from './contact';
import { pageNotFound } from './PageNotFound';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={contact} />
            <Route path="/about" component={About} />
            <Route component={pageNotFound} />
          </Switch>
        </Router>
        <h1>fares</h1>
      </React.Fragment>
    );
  }
}

export default App;
