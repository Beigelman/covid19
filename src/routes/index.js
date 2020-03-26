import React from "react";

import { Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Projection from "../pages/Projection";

import Route from "./Route";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/projections" component={Projection} />
    </Switch>
  );
}
