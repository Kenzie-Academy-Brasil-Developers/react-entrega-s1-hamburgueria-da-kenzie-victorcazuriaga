import { useRef } from "react"

export default function FilterProduct({ setFilteredListProducts, productsList }) {
    const input = useRef();
    const onSearchProduct = () => {
        setFilteredListProducts(() =>
            productsList.filter((product) => product.category.toLowerCase().includes(input.current.value.toLowerCase())
            )
        )

    }
    return (
        <div>
            <input ref={input} placeholder="pesquisa" />
            <button onClick={onSearchProduct}>Pesquisar</button>
        </div>
    )
}