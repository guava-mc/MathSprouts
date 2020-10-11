import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Demo from "../components/Demo";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
        <Route path="/demo" exact component={Demo} />
    </Switch>
  </Router>
);
