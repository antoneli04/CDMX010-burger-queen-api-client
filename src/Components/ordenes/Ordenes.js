import React, { useEffect, useState } from "react";
import Card from "../ordenes/Card";
import "../route/route.css";
import Navbar from "../Navbar/Navbar.js";
import "./../ordenes/ordenes.css";
import ButtonMenu from "./ButtonMenu";
import Comanda from "./Comanda";

const Ordenes = ({setOrder, order}) => {

  const [product, setProduct] = useState([]);
 
  const handleAddItem = (p) => {
    setOrder({...order, items:[...order.items, p]})
  }

  useEffect(() => {
    getProduct()
  }, [])
  
  const getProduct = async () => {
    const data = await fetch('http://localhost:5000/desayuno')
    const products = await data.json();
    setProduct(products);
  }

  // const borrarTarea = (id) => {
  //   cambiarTareas(tareas.filter((tarea) => {
  //     if (tarea.id !== id){
  //       return tarea;
  //     }
  //     return;
  //   }));   
  // }

  const borrarProduct = (id) => {
    // console.log(setOrder, "setOrder")
    // console.log(id, "función borrar")
    // console.log(order, "order dentro de borrar")
    // console.log(order.items, "order dentro de borrar")
    order.items.filter((item) => {
      // console.log(item.id, "un solo item")
      let idProduct = item.id;
      if(idProduct !== id){
        console.log("el id es igual")
      }
    })
    
    // setOrder(order.items.filter((item) => {
    //   console.log(item, "función borrar")
    //   if (item.id !== id){
    //     return item;
    //   }
    //   return;
    // }))
  }

  return (
    <>
      <div className="contenedor_padre_ordenes">
        <div className="contenedor_tarjetas">
          <div className="contenedor-menu">
            <ButtonMenu menu="Desayuno" />
            <ButtonMenu menu="Almuerzo/Cena" />
          </div>
          <div className="desayuno">
            {product.map((p) => (
              <Card p={p}
                key={p.id}
                imagen={p.image}
                title={p.name}
                price={p.price}
                handleAddItem={handleAddItem}   //pasa cart y setCard, burger y burgers
              />
            ))}
          </div>
        </div>
        <div className="comanda">
          <Comanda order={order} borrarProduct={borrarProduct}/>
        </div>
      </div>
      <Navbar />
    </>
  );
};

export default Ordenes;
