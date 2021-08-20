import './App.scss';
import { useState } from 'react'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ProductList from './components/ProductList/ProductList';
import Cart from './components/Cart/Cart';
import { CartProduct } from './types/CartProduct'

function App() {

  const [cartMenuState, setCartMenuState] = useState<Boolean>(false)
  const [cartItems, setCartItems] = useState<CartProduct[]>([])

  return (
    <>

      <Navbar cartMenuState={cartMenuState} setCartMenuState={setCartMenuState} />
      <Cart cartMenuState={cartMenuState} cartItems={cartItems} setCartItems={setCartItems} />
      <Header />
      <ProductList 
      cartItems={cartItems} setCartItems={setCartItems} 
      setCartMenuState={setCartMenuState}
      />
      <Footer />
    </>
  );
}

export default App;
