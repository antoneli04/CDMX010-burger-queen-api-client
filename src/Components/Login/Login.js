import React from "react";
import { useHistory } from "react-router-dom";
import "../Login/Login.css";
import logo from "../../Assets/logo-queen.png";

export function Login() {
  let history = useHistory();

  function handleClick() {
    history.push("/ordenes");
  }

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
        <button onClick={handleClick} className="sesion three">
          Entrar
        </button>
        <br />
      </div>
    </div>
  );
}
