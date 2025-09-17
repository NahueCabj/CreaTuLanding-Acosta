import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#2B1A0F] text-white py-6 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo */}
        <Link to={'/'}>
        <div className="flex items-center gap-2 logo text-2xl font-bold text-indigo-700">
            KIKA Coffe Roasters
        </div>
        </Link>
      
        <p className="text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Mi Tienda. Todos los derechos reservados.
        </p>

        
        <div className="flex gap-4">
          <a href="#" className="hover:text-gray-300 transition">Instagram</a>
          <a href="#" className="hover:text-gray-300 transition">Facebook</a>
          <a href="#" className="hover:text-gray-300 transition">Contacto</a>
        </div>
      </div>
    </footer>
  );
}
