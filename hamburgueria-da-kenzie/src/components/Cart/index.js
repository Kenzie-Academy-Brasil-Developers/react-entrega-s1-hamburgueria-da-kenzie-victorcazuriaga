import CardTotal from '../CartTotal'
import ProductCart from '../ProductCart'
import "./style.css"
export default function Cart({ currentSale, handleRemoveCart, handleRemoveAllCart }) {
    return (
        <div className='containerCart'>
            {
                currentSale.map((product) =>
                    <ProductCart key={product.cartId} id={product.cartId} name={product.name} category={product.category} price={product.price}
                        handleRemoveCart={handleRemoveCart} img={product.img}
                    />

                )
            }
            <CardTotal currentSale={currentSale} handleRemoveAllCart={handleRemoveAllCart} />
        </div>
    )


}