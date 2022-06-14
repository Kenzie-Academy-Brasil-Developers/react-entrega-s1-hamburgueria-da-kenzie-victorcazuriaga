import CardTotal from '../CartTotal'
import ProductCart from '../ProductCart'
import "./style.css"
export default function Cart({ currentSale, handleRemoveCart, handleRemoveAllCart }) {

    return (
        <div className='cartContainer'>
            <div className='containerCart'>
                <div className='headerCart'>
                    <h1> Carrinho de Compras</h1>
                </div>
                {currentSale.length === 0 ? <div> <h1> Sua sacola está vazia </h1> <span> Adicione Itens </span> </div> :
                    currentSale.map((product) =>
                        <ProductCart key={product.cartId} id={product.cartId} name={product.name} category={product.category} price={product.price}
                            handleRemoveCart={handleRemoveCart} img={product.img}
                        />

                    )
                }

            </div>
            {currentSale.length !== 0 && <CardTotal currentSale={currentSale} handleRemoveAllCart={handleRemoveAllCart} />
            }

        </div>
    )


}