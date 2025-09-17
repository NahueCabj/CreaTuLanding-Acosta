import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { getItem } from "../mock/AsyncMock";
import { useParams, Link } from "react-router-dom";
import LoaderComponent from './LoaderComonent';
import { getDoc, doc } from "firebase/firestore";
import { db } from "../service/firebase";

const ItemDetailContainer = () => {
const [prod, setProd] = useState({});
const [cargando, setCargando] = useState(false)
const [invalid, setInvalid] = useState(null)
const {id} = useParams()

//FIREBASE

useEffect(()=>{
  setCargando(true)
  //conectar con coleccion y crear referencia
  const docRef = doc(db, "productos", id)
  //traer documento
  getDoc(docRef)
  .then((res)=>{
    if(res.data()){
      setProd({id: res.id, ...res.data()})
    }else{
      setInvalid(true)
    }
  })
  .catch((error)=> console.log(error))
  .finally(()=> setCargando(false))
},[id])

if(invalid){
  return(
    <div className="error-card">
      <h2 className="error-card__title">Oops! Página no encontrada</h2>
      <p className="error-card__message">
        Parece que lo que estás buscando no existe o fue movido.  
        Volvé al inicio y seguí explorando nuestros productos.
      </p>
      <Link to={'/'} className="btn btn--primary">Ir al inicio</Link>
    </div>
  )
}



//promesa

  // useEffect(() => {
  //   setCargando(true)
  //   getItem(id)
  //     .then((res) => setProd(res))
  //     .catch((error) => console.log(error))
  //     .finally(()=> setCargando(false))
  // }, [id]);

  return (
    <>
  {cargando
    ?<LoaderComponent/>
    :<ItemDetail prod={prod}/>
  }
  </>
)
  };

export default ItemDetailContainer;
