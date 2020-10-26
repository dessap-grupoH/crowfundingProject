import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Project from "./Pages/Project[id]"
import Profile from "./Pages/Profile"

const Routes = () => (
  <BrowserRouter>
    <Route component={Profile} path="/profile" />
    <Route component={Project} path="/project/:projectId" />
    <Route component={Home} exact path="/" />
  </BrowserRouter>
);

export default Routes;
