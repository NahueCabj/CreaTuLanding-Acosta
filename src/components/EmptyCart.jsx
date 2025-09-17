import { Link } from "react-router-dom";

export const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="bg-white shadow-lg rounded-2xl p-10 max-w-md">
        <h2 className="text-2xl font-bold text-[#7b4b2a] mb-4">
          Tu carrito está vacío 🛒
        </h2>
        <p className="text-gray-600 mb-6">
          Parece que todavía no agregaste nada. ¡Descubrí nuestros productos!
        </p>
        <Link to="/products" className="px-6 py-3 bg-[#7b4b2a] text-white rounded-xl font-semibold shadow-md hover:bg-[#633b21] transition">Ir a la tienda </Link>
      </div>
    </div>
  );
};

export default EmptyCart;
