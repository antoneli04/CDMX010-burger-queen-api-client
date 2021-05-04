import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Adm from "../../Assets/admin.png";
import Inventario from "../../Assets/stock.png";
import Entregar from "../../Assets/entregar.png";
import Cook from "../../Assets/cocina.png";
import Menus from "../../Assets/menus.png";
import "../route/route.css";
import Card from "../ordenes/Card";

const Navbar = () => {
  return (
    <div>
      <nav className="nav-content">
        <ul className="navbar">
          <li>
            <Link to="/ordenes" style={{ textDecoration: "none" }}>
              <img src={Menus} alt="Ordenes" />
              <br />
              <span>Ordenar</span>
            </Link>
          </li>
          <li>
            <Link to="/cocina" style={{ textDecoration: "none" }}>
              <img src={Cook} alt="Cocina" />
              <br />
              <span>Cocina</span>
            </Link>
          </li>
          <li>
            <Link to="/entregados" style={{ textDecoration: "none" }}>
              <img src={Entregar} alt="Entregados" />
              <br />
              <span>Entregar</span>
            </Link>
          </li>
          <li>
            <Link to="/admin" style={{ textDecoration: "none" }}>
              <img src={Adm} alt="Administrador" />
              <br />
              <span>Admin</span>
            </Link>
          </li>
          <li>
            <Link to="/stock" style={{ textDecoration: "none" }}>
              <img src={Inventario} alt="Inventario" />
              <br />
              <span>Stock</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

function Routter() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/stock">
            <Stock />
          </Route>
          <Route path="/ordenes">
            <Ordenes />
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
        </Switch>
      </div>
    </Router>
  );
}

function Ordenes() {
  return (
    <div>
      <h2>Ordenes</h2>
      <Card />
      <Navbar />
    </div>
  );
}

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

export default Routter;
