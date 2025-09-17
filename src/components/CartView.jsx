import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import EmptyCart from './EmptyCart' // <-- asegurate que coincida con el export real
import Swal from 'sweetalert2'


const CartView = () => {
  const { cart, removeItem, clear, total } = useContext(CartContext)

  if (!cart || cart.length === 0) {
    return <EmptyCart />
  }

  const handleVaciarCarrito = () => { // <-- SIN parámetro
    Swal.fire({
      title: "¿Vaciar carrito?",
      text: "Se eliminarán todos los productos seleccionados",
      icon: "warning",
      background: "#f8f5f2",
      color: "#3e2c20",
      showCancelButton: true,
      confirmButtonText: "Sí, vaciar",
      cancelButtonText: "Cancelar",
      customClass: {
        popup: "swal-popup",
        title: "swal-title",
        actions: "swal-actions",                    // importante: target para alinear botones
        confirmButton: "btn btn--danger swal-btn",
        cancelButton: "btn btn--secondary swal-btn",
      },
      buttonsStyling: false,
    }).then((result) => {
      if (result.isConfirmed) {
        clear(); // ahora sí llama a la función del contexto
        Swal.fire({
          title: "Carrito vacío",
          text: "Tu carrito quedó vacío, ¡agregá un café para continuar! ☕",
          icon: "success",
          background: "#f8f5f2",
          color: "#3e2c20",
          confirmButtonText: "Seguir comprando",
          customClass: {
            popup: "swal-popup",
            title: "swal-title",
            confirmButton: "btn btn--primary swal-btn",
          },
          buttonsStyling: false,
        });
      }
    });
  };

  return (
    <div className="cart-view">
      <h1 className="cart-view__title">Carrito</h1>

      <div className="cart-view__list">
        {cart.map((compra) => (
          <div className="cart-view__item" key={compra.id}>
            <img src={compra.img} alt={compra.name} className="cart-view__item-img" />
            <div className="cart-view__item-info">
              <span className="cart-view__item-name">{compra.name}</span>
              <span className="cart-view__item-price">${compra.price},00</span>
              <span className="cart-view__item-qty">Cantidad: {compra.quantity}</span>
              <span className="cart-view__item-total">Precio final: ${compra.quantity * compra.price},00</span>
            </div>
            <button onClick={() => removeItem(compra.id)} className="btn btn--danger cart-view__remove">X</button>
          </div>
        ))}
      </div>

      <div className="cart-view__summary">
        <span className="cart-view__total">Total a pagar: ${total()},00</span>
        <div className="cart-view__actions">
          <button onClick={handleVaciarCarrito} className="btn btn--secondary">Vaciar carrito</button>
          <Link className="btn btn--primary" to={'/checkout'}>Terminar compra</Link>
        </div>
      </div>
    </div>
  )
}

export default CartView
