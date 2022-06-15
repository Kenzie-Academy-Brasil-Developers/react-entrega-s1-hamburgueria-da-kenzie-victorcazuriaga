import "./style.css"
export default function CardTotal({ currentSale, handleRemoveAllCart }) {
    return (
        <div className="cartTotal">
            <h1> Total: </h1>
            <span> R$:
                {currentSale.reduce((acc, cur) =>
                    acc + cur.price, 0
                )}
            </span>
            <button onClick={handleRemoveAllCart}> Remover Todos</button>
        </div>
    )
}