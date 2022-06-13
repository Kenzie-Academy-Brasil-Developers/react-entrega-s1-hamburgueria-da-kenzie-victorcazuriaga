export default function CardTotal({ currentSale, handleRemoveAllCart }) {
    return (
        <div>
            <h1>
                {currentSale.reduce((acc, cur) =>
                    acc + cur.price, 0
                )}
            </h1>

            <button onClick={handleRemoveAllCart}> Remover Todos</button>
        </div>
    )
}