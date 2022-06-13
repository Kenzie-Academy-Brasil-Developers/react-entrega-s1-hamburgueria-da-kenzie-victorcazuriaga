// interface IProductUser {
//     id: number;
//     name: String;
//     price: number;
//     category: string;
// }
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
                    <span>{price} </span>
                    <button onClick={() => handleClick(id)}> Adicionar </button>
                </div>
            </div>
        </>
    )

}