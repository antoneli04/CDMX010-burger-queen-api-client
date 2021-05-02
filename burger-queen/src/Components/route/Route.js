import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { Login } from "../Login/Login";
import Adm from "../../Assets/admin.png";
import Inventario from "../../Assets/stock.png";
import Entregar from "../../Assets/entregar.png";
import Cook from "../../Assets/cocina.png";
import Menus from "../../Assets/menus.png";
import "../route/route.css";

function Routter() {
  return (
    <Router>
      <div>
        <nav className="nav-content">
          <ul className="navbar">
            {/* <li>
              <Link to="/" style={{ textDecoration: "none" }}>
                Login
              </Link>
            </li> */}
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

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
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
          {/* <Route path="/"><Login /></Route> */}
        </Switch>
      </div>
    </Router>
  );
}

// function Login() {
//   return <h2>Login</h2>;
// }

function Ordenes() {
  return <h2>Ordenes</h2>;
}

function Cocina() {
  return <h2>Cocina</h2>;
}

function Entregados() {
  return <h2>Entregados</h2>;
}

function Admin() {
  return <h2>Admin</h2>;
}

function Stock() {
  return <h2>Stock</h2>;
}

export default Routter;
