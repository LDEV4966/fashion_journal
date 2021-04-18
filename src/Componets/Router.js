import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import Closet from "../Routes/Closet/Closet";
import Main from "../Routes/Main/Main";

const AppRouter = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/closet">
          <Closet />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
