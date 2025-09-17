import { ShoppingCart } from 'lucide-react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function CartWidget({}) {
  const {cart, cartQuantity} = useContext(CartContext)
  console.log(cart)
  return (
    <div className="relative cursor-pointer">
      <ShoppingCart className="carrito-compras text-600" size={28} />
      {cart.length >0 && <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
        {cartQuantity()}
      </span>}
    </div>
  );
}
