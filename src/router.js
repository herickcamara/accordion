import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./pages/register/Register";
import Home from "./pages/Home/Home";

import {Global} from './pages/Home/globalStyled'
const Routes = () => {
  const logado = localStorage.getItem("@logado");

  return (<>
  <Global />
    <BrowserRouter>

      <Switch>
        {!logado && <Route path="/" exact component={Login} />}
        {logado && <Route path="/" exact component={Home} />}
      </Switch>
    </BrowserRouter>
    </>);
};

export default Routes;
