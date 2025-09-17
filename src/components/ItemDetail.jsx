import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
//importamos el hook para usar el contexto
import { useContext, useState } from "react";
//importamos el contexto
import { CartContext } from "../context/CartContext";

Link

const ItemDetail = ({ prod }) => {
  const [purchase, setPurchase]=useState(false)
  //traemos funcion para agregar un item al carrito
  const {addItem, itemQuantity} = useContext(CartContext)

  //responsable de logica de agregar un item al carrito
  const onAdd = (cantidad)=>{
    setPurchase(true)
    addItem(prod, cantidad)
  }

  const stockActualizado = prod.stock - itemQuantity(prod.id)

  return (
    <div className="item-detail">
      <div className="item-detail__img">
        <img src={prod.img} alt={prod.name} />
      </div>

      <div className="item-detail__info">
        <h2 className="item-detail__title">{prod.name}</h2>
        <p className="item-detail__description">{prod.description}</p>
        <p className="item-detail__description">Stock disponible: {stockActualizado}</p>
        <p className="item-detail__price">Precio: ${prod.price}</p>

        <div className="item-detail__actions">
          <Link to={'/products'} className="btn btn--secondary">Volver</Link>
          {purchase ? (
          <Link to={'/cart'} className="btn btn--primary">Ir al carrito</Link>
          ) : (
          <div className="item-count">
            <ItemCount stock={stockActualizado} onAdd={onAdd} />
          </div>
           )}
        </div>
        
      </div>
      
    </div>
  )
}

export default ItemDetail;
