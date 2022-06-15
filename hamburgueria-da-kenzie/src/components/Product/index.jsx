// interface IProductUser {
//     id: number;
//     name: string;
//     price: number;
//     category: string;
// }
import "./style.css"
export default function Product({ name, price, category, img, id, handleClick, setCartItem }) {
    const dbCart = (id) => setCartItem(id);
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
                    <button onClick={() => { handleClick(id); dbCart(id) }}> Adicionar </button>
                </div>
            </div>
        </>
    )

}