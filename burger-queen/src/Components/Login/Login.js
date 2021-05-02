import React from "react";
import "../Login/Login.css";
import logo from "../../Assets/logo-queen.png";

export function Login() {
  return (
    <div className="contentGeneral">
      <div className="contentLogo">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <div className="contentLogin">
        <h2>Iniciar Sesión</h2>
        <br />
        <br />
        <input className="sesion one" type="text" placeholder="Correo"></input>
        <br />
        <input
          className="sesion"
          type="password"
          placeholder="Contraseña"
        ></input>
        <br />
        <button className="sesion three">Entrar</button>
        <br />
      </div>
    </div>
  );
}
