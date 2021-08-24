import React from 'react'
import { useState } from 'react'
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import ProductList from '../ProductList/ProductList';
import Cart from '../Cart/Cart';
import { CartProduct } from '../../types/CartProduct'

const Home = () => {

    const [cartMenuState, setCartMenuState] = useState<Boolean>(false)
    const [cartItems, setCartItems] = useState<CartProduct[]>(
      JSON.parse(localStorage.getItem('cart-items') || "[]")
    )
    const [productItemCount, setProductItemCount] = useState<number>(
      JSON.parse(localStorage.getItem('cart-items-lenght') || "0")
    )
  
    return (
      <>
  
        <Navbar cartMenuState={cartMenuState} setCartMenuState={setCartMenuState} productItemCount={productItemCount}/>
        <Cart setProductItemCount={setProductItemCount}
        cartMenuState={cartMenuState} cartItems={cartItems} 
        setCartItems={setCartItems} />
        <Header />
        <ProductList 
        cartItems={cartItems} setCartItems={setCartItems} 
        setCartMenuState={setCartMenuState}
        setProductItemCount={setProductItemCount}
        productItemCount={productItemCount}
        />
      </>
    );
}

export default Home
