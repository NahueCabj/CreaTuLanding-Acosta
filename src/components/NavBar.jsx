import CartWidget from './CartWidget';

export default function NavBar() {
  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-indigo-700">
          KIKA Coffe Roasters
        </div>
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li><a href="#" className="hover:text-indigo-600 transition">Inicio</a></li>
          <li><a href="#" className="hover:text-indigo-600 transition">Productos</a></li>
          <li><a href="#" className="hover:text-indigo-600 transition">Nosotros</a></li>
          <li><a href="#" className="hover:text-indigo-600 transition">Contacto</a></li>
        </ul>
        <CartWidget />
      </nav>
    </header>
  );
}
