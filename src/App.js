import React, {useState}from "react";
import "./App.css";
import { Login } from "./Components/Login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar"
import Ordenes from "./Components/ordenes/Ordenes"

function App() {

  const [order, setOrder] =useState({
    client:"",
    items:[],
    total:0,
    status:"pending",
  });

  return (
    <Router>
      {/* <div> */}
        <Switch>
          <Route path="/stock">
            <Stock />
          </Route>
          <Route path="/ordenes">
            <Ordenes  setOrder={setOrder} order={order}/>
          </Route>
          <Route path="/cocina">
            <Cocina />
          </Route>
          <Route path="/entregados">
            <Entregados />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
      {/* </div> */}
    </Router>
  );
}

export default App;

function Cocina() {
  return (
    <div>
      <h2>Cocina</h2>
      <Navbar />
    </div>
  );
}

function Entregados() {
  return (
    <div>
      <h2>Entregados</h2>
      <Navbar />
    </div>
  );
}

function Admin() {
  return (
    <div>
      <h2>Admin</h2>
      <Navbar />
    </div>
  );
}

function Stock() {
  return (
    <div>
      <h2>Stock</h2>
      <Navbar />
    </div>
  );
}
