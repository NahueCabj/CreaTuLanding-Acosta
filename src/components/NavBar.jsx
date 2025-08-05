import CartWidget from './CartWidget';

export default function NavBar() {
  return (
    <header className="navbar shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="logo text-2xl font-bold text-indigo-700">
          KIKA Coffe Roasters
        </div>
        <ul className="navitem flex space-x-20 text-gray-700 font-medium">
          <li><a href="#" className="li-item">INICIO</a></li>
          <li><a href="#" className="li-item">PRODUCTOS</a></li>
          <li><a href="#" className="li-item">NOSOTROS</a></li>
          <li><a href="#" className="li-item">CONTACTO</a></li>
        </ul>
        <CartWidget />
      </nav>
    </header>
  );
}
