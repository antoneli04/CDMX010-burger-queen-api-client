import React, { useState } from "react";

//estado global
const Contexto = React.createContext();

const Proveedor = ({ children }) => {
  const [platillo, actualizarPlatillo] = useState({
    titulo: "cafe",
    precio: "treinta",
  });
  console.log(Contexto);
  return <Contexto.Provider value={{ platillo }}>{children}</Contexto.Provider>;
};

export { Contexto, Proveedor };
