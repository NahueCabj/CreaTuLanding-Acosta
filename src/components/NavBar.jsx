import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <header className="navbar shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between relative z-10">
        <NavLink to={'/'}>
          <div className="logo text-2xl font-bold text-indigo-700">
            KIKA Coffe Roasters
          </div>
        </NavLink>
        <ul className="navitem flex space-x-20 text-gray-700 font-medium">
          <li>
            <NavLink to={'/'} className="li-item">INICIO</NavLink>
            </li>
          <li className="relative group">
            <a href="#" className="li-item">PRODUCTOS</a>
            <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 z-50">
              <li>
                <NavLink to={'/categories/Nuestros cafes'} className="block px-4 py-2 text-[#5c4033] hover:bg-indigo-100">
                  Nuestros Cafés
                </NavLink>
              </li>
              <li>
                <NavLink to={'/categories/Cafeteras y métodos'} className="block px-4 py-2 text-[#5c4033] hover:bg-indigo-100">
                  Cafeteras y metodos
                </NavLink>
              </li>
              <li>
                <NavLink to={'/categories/Accesorios'} className="block px-4 py-2 text-[#5c4033] hover:bg-indigo-100">
                  Accesorios
                </NavLink>
              </li>
            </ul>
          </li>

          <li><a href="#" className="li-item">NOSOTROS</a></li>
          <li><a href="#" className="li-item">CONTACTO</a></li>
        </ul>
        <CartWidget numberItems={3} />
      </nav>
  </header>

  );
}
