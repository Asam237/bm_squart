import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Suspense } from "react-router/node_modules/@types/react";
import { Dashboard } from "../pages/dashboard/Dashboard.page";
import { Home } from "../pages/home/Home.page";
import { Login } from "../pages/login/Login.page";

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
