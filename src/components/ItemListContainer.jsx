import { useEffect, useState } from "react";
import { getProducts } from "../mock/AsyncMock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../service/firebase";
import LoaderComponent from './LoaderComonent';
import { productos } from "../mock/AsyncMock";

const ItemListContainer = (props) => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const { category } = useParams();

  
  const formatCategory = (cat) => {
    if (!cat) return "";
    return cat.charAt(0).toUpperCase() + cat.slice(1);
  };

  // FIREBASE
  useEffect(() => {
    setLoader(true);
    const productsCollection = category
      ? query(collection(db, "productos"), where("category", "==", category))
      : collection(db, "productos");

    getDocs(productsCollection)
      .then((res) => {
        const list = res.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(list);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoader(false));
  }, [category]);

  return (
    <>
      {loader ? (
        <LoaderComponent />
      ) : (
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center my-10">
            <h1 className="text-3xl font-bold text-[#3e2c20]">
              {category
                ? ` ${formatCategory(category)}`
                : props.mensaje}
            </h1>
            <div className="w-full h-[1px] bg-[#c49a6c] mt-3"></div>
          </div>

          <ItemList data={data} />
        </div>
      )}
    </>
  );
};

export default ItemListContainer;
