import ProductCart from '../ProductCart'
export default function Cart({ currentSale, handleRemoveCart, handleRemoveAllCart }) {
    return (
        <>
            {
                currentSale.map((product) =>
                    <ProductCart key={product.cartId} id={product.cartId} name={product.name} category={product.category} price={product.price}
                        handleRemoveCart={handleRemoveCart}
                    />

                )
            }
            <h1>
                {currentSale.reduce((acc, cur) =>
                    acc + cur.price, 0
                )}
            </h1>

            <button onClick={handleRemoveAllCart}> Remover Todos</button>
        </>
    )


}