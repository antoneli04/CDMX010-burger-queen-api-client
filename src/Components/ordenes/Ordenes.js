// import React from "react";

import React, {useEffect, useState} from "react";
import Card from "../ordenes/Card";
import "../route/route.css";
import Navbar from "../Navbar/Navbar.js"

const Ordenes = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProduct()
  }, [])
  
  const getProduct = async () => {
    const data = await fetch('http://localhost:5000/desayuno')
    const products = await data.json();
    setProduct(products);
  }

  return (
    <div>
      <h2>Ordenes</h2>
      <div className="desayuno">
      {
      product.map(p => (
        <Card key={p.id} imagen={p.image} title={p.name} price={p.price}/>
      ))
      }
      </div>
      <Navbar />
    </div>
  );
};

export default Ordenes;
