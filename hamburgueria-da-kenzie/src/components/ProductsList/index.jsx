import Product from "../Product";
import "./style.css";

export default function ProductsList({ productList, handleClick }) {
    return (
        <div className="container">
            {
                productList.map(({ id, name, price, img }) =>
                    <Product key={id} name={name} price={price} img={img} id={id} handleClick={handleClick} />

                )

            }
        </div>
    )
}