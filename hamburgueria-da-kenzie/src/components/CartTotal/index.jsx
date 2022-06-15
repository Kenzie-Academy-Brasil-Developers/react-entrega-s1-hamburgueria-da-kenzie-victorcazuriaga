import "./style.css"
export default function CardTotal({ currentSale, handleRemoveAllCart }) {
    return (
        <div className="cartTotal">
            <h1> Total: R$:</h1>
            <span>
                {currentSale.reduce((acc, cur) =>
                    acc + cur.price, 0
                )}
            </span>
            <button onClick={handleRemoveAllCart}> Remover Todos</button>
        </div>
    )
}