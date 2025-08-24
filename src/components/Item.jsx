import React from "react";
import { Link } from "react-router-dom";

const Item = ({ prod }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img
          src={prod.img || "https://via.placeholder.com/300"}
          alt={prod.name}
        />
      </div>
      <div className="card-body">
        <h3>{prod.name}</h3>
        <p>{prod.description}</p>
        <div className="card-footer">
          <span className="price">${prod.price}</span>
          <Link className="btn" to={'/item/'+prod.id}>Ver más</Link>
        </div>
      </div>
    </div>
  );
};

export default Item;

