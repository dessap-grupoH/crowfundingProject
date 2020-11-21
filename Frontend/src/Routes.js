import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Project from "./Pages/Project[id]";
import Profile from "./Pages/Profile";

const Routes = () => (
  <BrowserRouter>
    <Route component={Register} path="/register" />
    <Route component={Profile} path="/profile" />
    <Route component={Project} path="/project/:projectId" />
    <Route component={Home} exact path="/" />
  </BrowserRouter>
);

export default Routes;
