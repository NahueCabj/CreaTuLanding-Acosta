import './App.css';
import './styles/main.scss';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorComponent from './components/ErrorComponent';
import Footer from './components/Footer';
import Contacto from './components/Contacto';
import { CartProvider } from './context/CartContext';
import CartContainer from './components/CartContainer';
import CartView from './components/CartView';
import Checkout from './components/Checkout';
import KikaCoffeBanner2 from './components/KikaCoffeBanner2';
import CategoriesSection from './components/CategoriesSection';
import Nosotros from './components/Nosotros';
import LocationSection from './components/Location';
import FAQSection from './components/FAQSection';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="layout">
          <NavBar />
          <main className="main-content">
            
            <Routes>
              <Route path="/" element={<><KikaCoffeBanner2/><CategoriesSection/><LocationSection/><FAQSection/></>}/>
              <Route path="/products" element={<ItemListContainer mensaje="Mirá todos nuestros productos" />}/>
              <Route path="/categories/:category"element={<ItemListContainer mensaje="Bienvenidos a nuestras categorias!" />}/>
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<CartContainer />} />
              <Route path="*" element={<ErrorComponent />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/cartview" element={<CartView />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
