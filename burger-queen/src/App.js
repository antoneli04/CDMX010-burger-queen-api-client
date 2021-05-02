import React from "react";
import Routter from "./Components/route/Route";
import "./App.css";
import { Login } from "./Components/Login/Login";
import { BrowserRouter as Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="principal">
      <div className="secundario">
        <Switch>
          <Route exact path="/">
            {<Login />}
          </Route>
        </Switch>
      </div>
      <div className="terciario"> {<Routter />}</div>
    </div>
  );
}

export default App;
