import React from 'react';
import { Link } from "react-router-dom";
import Adm from "../../Assets/admin.png";
import Inventario from "../../Assets/stock.png";
import Entregar from "../../Assets/entregar.png";
import Cook from "../../Assets/cocina.png";
import Menus from "../../Assets/menus.png";
import "../route/route.css";

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

export default Navbar;