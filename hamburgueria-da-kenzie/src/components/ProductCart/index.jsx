import "./style.css"
export default function ProductCart({ id, name, price, category, handleRemoveCart }) {

    return (
        <div className="productCart">

            <h1>{name}</h1>
            <p> {category}</p>
            <span>{price}</span>
            <button onClick={() => handleRemoveCart(id)}> Remover </button>

        </div>


    )

}