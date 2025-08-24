import { useEffect, useState } from "react";
import { getProducts } from "../mock/AsyncMock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";


const ItemListContainer = (props) =>{
  const [data,setData]=useState([])
  const {category}=useParams()
  useEffect (()=> {
    getProducts()
    .then((res)=> {
      if (category){
        setData(res.filter((item)=> item.category === category))
      }else{
        setData(res)
      }
    })
    .catch((error)=> console.error(error))
  },[category])
console.log(category)



  return(
  <div className="max-w-7xl mx-auto px-4">
    <h1 className="text-2xl font-bold my-6">{props.mensaje}</h1>
    <ItemList data={data}/>

  </div>
  )
}

export default ItemListContainer;
