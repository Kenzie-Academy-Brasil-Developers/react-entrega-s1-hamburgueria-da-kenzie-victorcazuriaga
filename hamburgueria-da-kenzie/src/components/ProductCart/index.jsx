import "./style.css"
import { useState } from "react";
export default function ProductCart({ id, name, price, category, handleRemoveCart, img }) {


    return (
        < div className="productCart" >
            <img src={img} alt={name} />
            <h1>{name}</h1>
            <p> {category}</p>
            <span>R${price}</span>
            <button onClick={() => handleRemoveCart(id)}> Remover </button>

        </div >


    )

}