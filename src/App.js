import React, { Fragment } from "react";
import Routter from "./Components/route/Route";
import "./App.css";
import { Login } from "./Components/Login/Login";
import { BrowserRouter as Switch, Route } from "react-router-dom";

function Log() {
  return (
    <Fragment>
      <div>
        <Switch>
          <Route exact={true} path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Fragment>
  );
}

function App() {
  return (
    <Fragment>
      <Log />
      <Routter />
    </Fragment>
  );
}

export default App;
