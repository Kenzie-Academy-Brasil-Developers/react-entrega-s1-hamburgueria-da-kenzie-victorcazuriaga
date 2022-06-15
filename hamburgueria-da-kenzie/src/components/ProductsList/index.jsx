import Product from "../Product";
import "./style.css";

export default function ProductsList({ productList, handleClick, setCartItem }) {
    return (
        <div className="productsList">
            {
                productList.map(({ id, name, price, img, category }) =>
                    <Product key={id} name={name} price={price} img={img} id={id} category={category} handleClick={handleClick} setCartItem={setCartItem} />

                )

            }
        </div>
    )
}