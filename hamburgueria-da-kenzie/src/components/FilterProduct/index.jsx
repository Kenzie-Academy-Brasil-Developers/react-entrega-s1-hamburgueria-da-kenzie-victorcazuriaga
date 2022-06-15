import { useRef } from "react"
import "./style.css"

export default function FilterProduct({ setFilteredListProducts, productsList }) {
    const input = useRef();
    const onSearchProduct = () => {
        setFilteredListProducts(() =>
            productsList.filter((product) =>
                product.name.toLowerCase().includes(input.current.value.toLowerCase()) ||
                product.category.toLowerCase().includes(input.current.value.toLowerCase())
            )
        )

    }
    return (
        <div className="filterSearch">
            <input ref={input} placeholder="pesquisa" />
            <button onClick={onSearchProduct}>Pesquisar</button>
        </div>
    )
}