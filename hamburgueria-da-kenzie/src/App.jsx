import React, { useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductsList from './components/ProductsList';
import axios from "axios"
import { useEffect, useState } from 'react';
import Cart from './components/Cart';
import FilterProduct from './components/FilterProduct';
import { LogoBurgerKenzie } from './Images';

function App() {
  const { v4: uuidv4 } = require('uuid')

  //hooks useState
  const productsList = useRef([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [filteredListProducts, setFilteredListProducts] = useState([]);
  const [cartItem, setCartItem] = useState("");

  //Request Api
  const getProductList = () => {
    axios({
      method: "get",
      url: "https://hamburgueria-kenzie-json-serve.herokuapp.com/products",
    }).then((response) => {
      productsList.current = response.data
      setFilteredListProducts(productsList.current)
    })
      .catch((error) => console.log(error));
  }

  useEffect(getProductList, [])

  //Funções Aplicação

  const handleClick = (productId) => {
    const selectedProduct = filteredListProducts.find(({ id }) => id === productId)
    const cartId = uuidv4();
    cartItem !== productId && setCurrentSale(([...prevState]) => [...prevState, { ...selectedProduct, cartId: cartId }])
  }
  const handleRemoveCart = (currentCartId) => setCurrentSale((prevState) => prevState.filter(({ cartId }) => cartId !== currentCartId));
  const handleRemoveAllCart = () => setCurrentSale([]);

  return (
    <>
      <header className='header'>
        <img src={LogoBurgerKenzie} alt="LogoBurguerKenzie" />
        <FilterProduct setFilteredListProducts={setFilteredListProducts} productsList={productsList.current} />
      </header>
      <div className='container'>
        <ProductsList productList={filteredListProducts} handleClick={handleClick} setCartItem={setCartItem} cartItem={cartItem} />
        <Cart currentSale={currentSale} handleRemoveCart={handleRemoveCart} handleRemoveAllCart={handleRemoveAllCart} cartItem={cartItem} />
      </div>
    </>
  );
}

export default App;

