import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Dashboard } from "../pages/dashboard/Dashboard.page";
import { Home } from "../pages/home/Home.page";
import { Login } from "../pages/login/Login.page";
import { Test } from "../pages/test/Test.page";

export const AppNavigation = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
};
