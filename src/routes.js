import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./pages/main";
import Character from "./pages/character";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main}></Route>
      <Route path="/characters/:id" component={Character}></Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
