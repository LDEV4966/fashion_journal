import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import Closet from "../Routes/Closet/Closet";
import Main from "../Routes/Main/Main";
import TodayLook from "../Routes/TodayLook/TodayLook";

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
        <Route exact path="/todayslook">
          <TodayLook />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
