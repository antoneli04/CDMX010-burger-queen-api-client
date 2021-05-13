import React from "react"
import eliminar from "../../Assets/eliminar.png"

const Product = ({item, borrarProduct}) => {
    console.log(item.id)
    return (
        <div className="container_product">
            <div>{item.name}</div>
            <div className="price_eliminar">$ {item.price}<img src={eliminar} onClick={() => borrarProduct(item.id)}/></div>
        </div>
    );
}

export default Product