import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Project from "./Pages/Project[id]";
import Profile from "./Pages/Profile";
import Donate from "./Pages/Donate";

const Routes = () => (
  <BrowserRouter>
    <Route component={Login} path="/login" />
    <Route component={Home} exact path="/" />
    <Route component={Register} path="/register" />
    <Route component={Profile} path="/profile" />
    <Route component={Project} path="/project/:projectId" />
    <Route component={Donate} path="/donate" />
  </BrowserRouter>
);

export default Routes;
