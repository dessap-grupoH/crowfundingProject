import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Project from "./Pages/Project[id]"

const Routes = () => (
  <BrowserRouter>
    <Route component={Home} path="/home" />
    <Route component={Home} exact path="/" />
    <Route component={Project} path="/project/:projectId" />
  </BrowserRouter>
);

export default Routes;
