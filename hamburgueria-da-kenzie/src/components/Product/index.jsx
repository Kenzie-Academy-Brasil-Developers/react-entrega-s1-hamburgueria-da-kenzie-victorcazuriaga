// interface IProductUser {
//     id: number;
//     name: string;
//     price: number;
//     category: string;
// }
import { useState } from "react";
import "./style.css"
export default function Product({ name, price, category, img, id, handleClick }) {

    return (
        <>
            <div className="productCard">
                <div className="productImg">
                    <img src={img} alt={name} />
                </div>
                <div className="productInfo">
                    <h1> {name} </h1>
                    <p> {category}</p>
                    <span>{` R$ ${price}`} </span>
                    <button onClick={() => handleClick(id)}> Adicionar </button>
                </div>
            </div>
        </>
    )

}