import { useState } from "react";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleAdd = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleSubtract = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <>
    {stock > 0
     ? <div className="itemCount">
      <div className="itemCount__controls">
        <button className="itemCount__btn" onClick={handleSubtract}>-</button>
        <span className="itemCount__number">{count}</span>
        <button className="itemCount__btn" onClick={handleAdd}>+</button>
      </div>

      <button
        className="itemCount__add"
        onClick={() => onAdd ? onAdd(count) : console.log(`Agregaste ${count} producto(s)`)}
        disabled={stock === 0}
      >
        Agregar al carrito
      </button>
    </div>
    : <p className="text-red-600 font-semibold bg-red-100 border border-red-300 rounded-md px-3 py-2 text-center">
        Lo sentimos, no hay stock
      </p>
    }
    
    
    </>
  );
};

export default ItemCount;
