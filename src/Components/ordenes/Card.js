import React from "react";
import cafe from "../../Assets/cafe.png";
import "./ordenes.css";

const Card = () => {
  return (
    <div>
      <button className="cafe">
        <img src={cafe} alt="cafe" />
        <br />
        <span>Café Americano</span>
        <br />
        <span> $5 </span>
      </button>
    </div>
  );
};

export default Card;
