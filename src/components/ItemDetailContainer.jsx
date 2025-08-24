import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { getItem } from "../mock/AsyncMock";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
const [prod, setProd] = useState(null);
const {id} = useParams()

  useEffect(() => {
    getItem(id)
      .then((res) => setProd(res))
      .catch((err) => console.log(err));
  }, [id]);

  return <div>{prod ? <ItemDetail prod={prod} /> : <p>Cargando...</p>}</div>;
};

export default ItemDetailContainer;
