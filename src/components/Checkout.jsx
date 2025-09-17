import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../service/firebase";
import EmptyCart from "./EmptyCart";

const Checkout = () => {
  const [buyer, setBuyer] = useState({});
  const [validMail, setValidMail] = useState("");
  const [orderId, setOrderId] = useState(null);
  const [errors, setErrors] = useState({});
  const { cart, total, clear } = useContext(CartContext);

  const buyerData = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  const validar = () => {
    let newErrors = {};

    if (!buyer.nombre?.trim()) {
      newErrors.nombre = "El nombre es obligatorio";
    }

    if (!buyer.email) {
      newErrors.email = "El email es obligatorio";
    } else if (!/\S+@\S+\.\S+/.test(buyer.email)) {
      newErrors.email = "El email no tiene un formato válido";
    }

    if (!validMail) {
      newErrors.validMail = "Debe repetir el email";
    } else if (buyer.email !== validMail) {
      newErrors.validMail = "Los emails no coinciden";
    }

    if (!buyer.telefono?.trim()) {
      newErrors.telefono = "El teléfono es obligatorio";
    } else if (!/^\d{8,15}$/.test(buyer.telefono)) {
      newErrors.telefono = "Ingrese un teléfono válido (solo números, 8-15 dígitos)";
    }

    if (!buyer.direccion?.trim()) {
      newErrors.direccion = "La dirección es obligatoria";
    }

    return newErrors;
  };

  const finalizarCompra = (e) => {
    e.preventDefault();

    let newErrors = validar();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    let order = {
      comprador: buyer,
      compras: cart,
      total: total(),
      date: serverTimestamp(),
    };

    const ventas = collection(db, "orders");
    addDoc(ventas, order)
      .then((res) => {
        setOrderId(res.id);
        clear();
      })
      .catch((error) => console.log(error));
  };

  if (!cart.length && !orderId) {
    return <EmptyCart />;
  }

  return (
    <>
      {orderId ? (
        <div>
          <h2>Realizaste tu compra correctamente!</h2>
          <h3>Tu ID de la compra es {orderId}</h3>
        </div>
      ) : (
        <div className="checkout">
          <h1 className="checkout__title">COMPLETE EL FORMULARIO</h1>
          <form onSubmit={finalizarCompra} className="checkout__form" noValidate>
            <div className="checkout__field">
              <label htmlFor="nombre">Nombre completo</label>
              <input
                type="text"
                name="nombre"
                placeholder="Ingrese su nombre y apellido"
                onChange={buyerData}
              />
              {errors.nombre && <span className="error">{errors.nombre}</span>}
            </div>

            <div className="checkout__field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="ejemplo@correo.com"
                onChange={buyerData}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div className="checkout__field">
              <label htmlFor="second-email">Repita su Email</label>
              <input
                type="email"
                name="second-email"
                placeholder="ejemplo@correo.com"
                onChange={(e) => setValidMail(e.target.value)}
              />
              {errors.validMail && <span className="error">{errors.validMail}</span>}
            </div>

            <div className="checkout__field">
              <label htmlFor="telefono">Teléfono</label>
              <input
                type="tel"
                name="telefono"
                placeholder="Ingrese su número de teléfono"
                onChange={buyerData}
              />
              {errors.telefono && <span className="error">{errors.telefono}</span>}
            </div>

            <div className="checkout__field">
              <label htmlFor="direccion">Dirección</label>
              <input
                type="text"
                name="direccion"
                placeholder="Ingrese su dirección completa"
                onChange={buyerData}
              />
              {errors.direccion && <span className="error">{errors.direccion}</span>}
            </div>

            <div className="checkout__field">
              <label htmlFor="notas">Notas adicionales</label>
              <textarea
                name="notas"
                rows="3"
                placeholder="Agregue detalles para la entrega (opcional)"
                onChange={buyerData}
              ></textarea>
            </div>

            <button type="submit" className="btn btn--primary">
              Completar compra
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Checkout;
