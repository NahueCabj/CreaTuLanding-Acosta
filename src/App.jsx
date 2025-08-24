import './App.css';
import './styles/main.scss';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorComponent from './components/ErrorComponent';

function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
          <Route path='/' element={<ItemListContainer mensaje="Bienvenidos a mi primer proyecto React!"/>}/>
          <Route path='/categories/:category' element={<ItemListContainer mensaje="Bienvenidos a nuestras categorias!"/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='*' element={<ErrorComponent/>}/>





          {/* Route path='*' para poner ruta no existente */}
      </Routes>
      
      
    </BrowserRouter>
  )
}

export default App
