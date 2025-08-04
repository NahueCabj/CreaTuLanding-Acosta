import { ShoppingCart } from 'lucide-react';

export default function CartWidget() {
  return (
    <div className="relative cursor-pointer">
      <ShoppingCart className="text-indigo-600" size={28} />
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
        3
      </span>
    </div>
  );
}
