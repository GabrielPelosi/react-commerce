import './App.scss';
import {useState} from 'react'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ProductList from './components/ProductList/ProductList';
import Cart from './components/Cart/Cart';

function App() {

  const [cartMenuState, setCartMenuState] = useState<Boolean>(false)
  
  return (
    <>
      
      <Navbar cartMenuState={cartMenuState} setCartMenuState={setCartMenuState} />
      <Cart cartMenuState={cartMenuState}/>
      <Header />
      <ProductList />
      <Footer />
    </>
  );
}

export default App;
