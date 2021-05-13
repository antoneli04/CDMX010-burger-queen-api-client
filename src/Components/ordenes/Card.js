import React from "react";
import "./ordenes.css";

const Card = (props) => {

  return (
    <div>
      <button className="cafe" onClick={()=>{(props.handleAddItem(props.p))}}>
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
