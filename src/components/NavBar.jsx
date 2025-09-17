import { useState } from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";


export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar relative shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">

        
        <NavLink to="/">
          <div className="logo text-2xl font-bold text-white md:text-indigo-700">
            KIKA Coffe Roasters
          </div>
        </NavLink>

        {/* Desktop menu */}
        <ul className="hidden md:!flex gap-10 text-white font-medium">
          <li className="li-item"><NavLink to="/" className="hover:text-[#c49a6c]">INICIO</NavLink></li>
          <li className="li-item relative group">
            <NavLink to="/products" className="hover:text-[#c49a6c]">PRODUCTOS</NavLink>
            <ul className="absolute left-0 top-full mt-2 w-48 bg-white text-[#3e2c20] shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 z-50">
            <li className="first:rounded-t-lg last:rounded-b-lg overflow-hidden">
              <NavLink to="/categories/Nuestros cafes" className="block px-4 py-2 hover:bg-indigo-100">
                Nuestros Cafés
              </NavLink>
            </li>
            <li className="overflow-hidden">
              <NavLink to="/categories/Cafeteras y métodos" className="block px-4 py-2 hover:bg-indigo-100">
                Cafeteras y métodos
              </NavLink>
            </li>
            <li className="first:rounded-t-lg last:rounded-b-lg overflow-hidden">
              <NavLink to="/categories/Accesorios" className="block px-4 py-2 hover:bg-indigo-100">
                Accesorios
              </NavLink>
            </li>
          </ul>
          </li>
          <li className="li-item"><NavLink to="/contacto" className="hover:text-[#c49a6c]">CONTACTO</NavLink></li>
          <li className="li-item"><NavLink to={'/nosotros'} href="#" className="hover:text-[#c49a6c]">NOSOTROS</NavLink></li>
        </ul>

        
        <div className="flex md:!hidden items-center gap-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white md:!hidden !block focus:outline-none text-2xl z-50"
          >
            ☰
          </button>
          <NavLink to="/cartview"><CartWidget /></NavLink>
        </div>

        
        <div className="hidden md:!block">
          <NavLink to="/cartview"><CartWidget /></NavLink>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="md:!hidden bg-[#3e2c20] w-full flex flex-col items-center py-6 space-y-4 shadow-lg absolute top-full left-0 z-50">
          <li><NavLink to="/" className="text-white hover:text-[#c49a6c]" onClick={() => setIsOpen(false)}>INICIO</NavLink></li>
          <li><NavLink to="/products" className="text-white hover:text-[#c49a6c]" onClick={() => setIsOpen(false)}>PRODUCTOS</NavLink></li>
          <li><NavLink to="/contacto" className="text-white hover:text-[#c49a6c]" onClick={() => setIsOpen(false)}>CONTACTO</NavLink></li>
          <li><NavLink to="/nosotros" className="text-white hover:text-[#c49a6c]" onClick={() => setIsOpen(false)}>NOSOTROS</NavLink></li>
        </ul>
      )}
    </header>
  );
}
