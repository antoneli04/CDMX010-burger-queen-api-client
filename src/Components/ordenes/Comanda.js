import React from "react";
import logo from "./../../Assets/logo-queen.png";

const Comanda = () => {
  return (
    <div className="contenedor_padre_comanda">
      <div className="contenedor_comanda_uno">
        <div className="contenedor_input_comanda">
          <input className="input_comanda" type="text" placeholder="Mesa" />
          <input
            className="input_comanda"
            type="cliente"
            placeholder="Nombre del Cliente"
          />
        </div>
        <img className="logo_comanda" src={logo} alt="logo" />
      </div>
      <div className="contenedor_comanda_dos">
        <h3 className="titulo_comanda">Resumen del pedido</h3>
        <div className="resumen_pedido">
          <p>1 Cafe americano </p>
          <h3>Total: $</h3>
        </div>
      </div>
      <div className="contenedor_boton_comanda">
        <button className="boton_comanda">Enviar a cocina</button>
      </div>
    </div>
  );
};

export default Comanda;
