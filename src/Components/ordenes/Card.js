import React from "react";
import "./ordenes.css";

const Card = (props) => {

  return (
    <div>
      <button className="cafe">
        <img src={props.imagen} alt={props.title} />
        <br />
        <span>{props.title}</span>
        <br />
        <span> $ {props.price} </span>
      </button>
    </div>
  );
};

export default Card;
