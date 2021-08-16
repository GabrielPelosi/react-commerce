import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ProductList from './components/ProductList/ProductList';

function App() {
  return (
    <>
      <Navbar />
      <Header/>
      <ProductList />
      <Footer/>
    </>
  );
}

export default App;
