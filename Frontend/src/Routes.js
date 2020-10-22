import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";

const Routes = () => (
  <BrowserRouter>
    <Route component={Home} path="/home" />
  </BrowserRouter>
);

export default Routes;
