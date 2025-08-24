const ItemDetail = ({ prod }) => {
  return (
    <div className="item-detail">
      <div className="item-detail__img">
        <img src={prod.img} alt={prod.name} />
      </div>

      <div className="item-detail__info">
        <h2 className="item-detail__title">{prod.name}</h2>
        <p className="item-detail__description">{prod.description}</p>
        <p className="item-detail__price">Precio: ${prod.price}</p>

        <div className="item-detail__actions">
          <button className="btn btn--primary">Agregar al carrito</button>
          <button className="btn btn--secondary">Volver</button>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail;
